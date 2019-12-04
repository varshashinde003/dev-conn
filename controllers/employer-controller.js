import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Validator from "../utils/validator";
import Employer from "../models/employer";
import { getRandomString } from "../utils/random";
import errorFormatter from "../utils/error-formatter";

export default class employer {
    constructor() {
        this.create = this.create.bind(this);
    }

    create(req, res) {
        const val = new Validator(req.body, {
            company_name: "required|string",
            company_logo: "required|size:4kb",
            name: "required|string",
            email: "required|email|unique:User,email",
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
            industries: "required|string",
            is_email_verified: "required|string",
            is_contact_verified: "required|string",
            account_activated_on: "required|string",
        });

        return val.check()
            .then(matched => {
                if (!matched) {
                    const result = {
                        statusCode: 422,
                        message: "Invalid inputs",
                        errors: errorFormatter(val.errors)
                    }
                    return result;
                } else {
                    const request = {
                        company_name: req.body.company_name,
                        company_logo: req.body.company_logo,
                        name: req.body.name,
                        email: req.body.email,
                        contact: req.body.contact,
                        designation: req.body.designation,
                        address: req.body.address,
                        city: req.body.city,
                        state: req.body.state,
                        country: req.body.country,
                        company_email: req.body.company_email,
                        company_website: req.body.company_website,
                        company_desc: req.body.company_desc,
                        industries: req.body.industries,
                        is_email_verified: req.body.is_email_verified,
                        is_contact_verified: req.body.is_contact_verified,
                        account_activated_on: req.body.account_activated_on,
                        password: bcrypt.hashSync(req.body.password, saltRounds)
                    };
                    Employer.create(request).then(employer => {
                        const token = jwt.sign(employer, process.env.APP_KEY);
                        const result = {
                            token,
                            statusCode: 200,
                            message: "Logged in succesfully."
                        }
                        return result;
                    })
                }
            })
            .catch(err => {
                log.error(err.message);
                const result = {
                    statusCode: 500,
                    message: process.env.DEBUG === "true" ? err.message : "Something went wrong. Please try again later"
                }
                return result;
            });
    }
}