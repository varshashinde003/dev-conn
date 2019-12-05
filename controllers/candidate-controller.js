import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import uniqid from "uniqid";
import ejs from "ejs";
import path from "path";
import Validator from "../utils/validator";
import errorFormatter from "../utils/error-formatter";
import log from "../utils/logger";
import Employer from "../models/employer";
import VerifyEmail from "../models/verify_email";
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
                            return ejs.renderFile(path.join(__dirname.replace("server", "templates"), "emails", "account-verification.ejs"), { link: verification_body.link, name: employer.name }, (error, body) => {
                                if (error) {
                                    throw error;
                                } else {
                                    return sendMail("System", `noreply@${process.env.BASE_URL}`, verification_body.email, employer.name, "Verify your email address", body, "html").then(() => {
                                        const result = {
                                            statusCode: 200,
                                            message: "Mail has been sent"
                                        }
                                        res.statusCode = result.statusCode;
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
        .catch(err => {
            log.error(err.message);
            const result = {
                statusCode: 500,
                message: process.env.DEBUG === "true" ? err.message : "Something went wrong. Please try again later"
            }
            return res.json(result);
        });
}