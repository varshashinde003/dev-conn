import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import uniqid from "uniqid";
import ejs from "ejs";
import path from "path";
import Validator from "../utils/validator";
import errorFormatter from "../utils/error-formatter";
import log from "../utils/logger";
import Employer from "../models/employer";
import VerifyEmail from "../models/email-verification";
import moment from "moment";
import { getRandomString } from "../utils/random";
import { sendMail } from "../utils/mailer";

export const createEmployer = (req, res) => {
    const val = new Validator(req.body, {
        company_name: "required|string",
        company_logo: "required",
        name: "required|string",
        email: "required|email|unique:Employer,email",
        password: "required|string",
        contact: "required|string",
        designation: "required|string",
        address: "required|string",
        city: "required|string",
        state: "required|string",
        country: "required|string",
        company_email: "required|email",
        company_website: "required|string",
        company_desc: "required|string",
        industries: "required|array",
    });

    return val.check()
        .then(matched => {
            if (!matched) {
                const result = {
                    statusCode: 422,
                    message: "Invalid inputs",
                    errors: errorFormatter(val.errors)
                }
                res.status(result.statusCode);
                return res.json(result);
            } else {
                const request = {
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10)
                }
                Employer.create(request).then(employer => {
                    const verification_data = {
                        email: request.email,
                        link: uniqid(getRandomString(50)),
                        expiresAt: moment().add(5, "minutes")
                    }
                    VerifyEmail.create(verification_data)
                        .then(verification_body => {
                            const token = jwt.sign({ _id: employer._id }, process.env.APP_KEY);
                            const result = {
                                token,
                                statusCode: 200,
                                message: "Account created succesfully."
                            }
                            return ejs.renderFile(path.join(__dirname.replace("server", "templates"), "emails", "account-verification.ejs"), { link: verification_body.link, name: employer.name, model: "employer" }, (error, body) => {
                                if (error) {
                                    throw error;
                                } else {
                                    return sendMail("System", `noreply@${process.env.BASE_URL}`, verification_body.email, employer.name, "Verify your email address", body, "html").then(() => {
                                        const result = {
                                            statusCode: 200,
                                            message: "Mail has been sent"
                                        }
                                        res.status(result.statusCode);
                                        return res.json(result);
                                    }).catch(() => {
                                        return res.json(result);
                                    });
                                }
                            })
                        })
                })
            }
        })
        .catch(err => errorHandler(err, res));
}

export const getProfile = (req, res) => {
    const user = req.Employer;
    return Employer.findOne({ _id: user._id }, { password: 0, __v: 0 }).exec()
        .then(profile => {
            return res.json({ message: "success", profile })
        }).catch(err => errorFormatter(err, res));
}

export const updateProfile = (req, res) => {
    const user = req.Employer;

    const { company_name, company_logo, name, designation, address, city, state, country, company_email, company_website, company_desc, industries } = req.body;
    const data = {};
    if (company_name) data.company_name = company_name;
    if (company_logo) data.company_logo = company_logo;
    if (name) data.name = name;
    if (designation) data.designation = designation;
    if (address) data.address = address;
    if (city) data.city = city;
    if (state) data.state = state;
    if (country) data.country = country;
    if (company_email) data.company_email = company_email;
    if (company_website) data.company_website = company_website;
    if (company_desc) data.company_desc = company_desc;
    if (industries) data.industries = industries;

    return Employer.findOneAndUpdate({ _id: user._id }, { $set: data }, { useFindAndModify: false, new: true, select: "-password -__v" })
        .exec()
        .then(employer => {
            const result = {
                message: "Profile updated",
                profile: employer
            }
            return res.json(result);
        }).catch(err => errorHandler(err, res));
}

const errorHandler = (err, res) => {
    log.error(err.message);
    const result = {
        statusCode: 500,
        message: process.env.DEBUG === "true" ? err.message : "Something went wrong. Please try again later"
    }
    res.status(result.statusCode);
    return res.json(result);
}