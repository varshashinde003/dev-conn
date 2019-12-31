import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import uniqid from "uniqid";
import ejs from "ejs";
import path from "path";
import Validator from "../utils/validator";
import errorFormatter from "../utils/error-formatter";
import log from "../utils/logger";
import Candidate from "../models/candidate";
import VerifyEmail from "../models/email-verification";
import moment from "moment";
import { getRandomString } from "../utils/random";
import { sendMail } from "../utils/mailer";

export const createCandidate = (req, res) => {
    const val = new Validator(req.body, {
        name: "required|string",
        email: "required|email|unique:Candidate,email",
        contact: "required|string",
        password: "required|string",
        city: "required|string",
        state: "required|string",
        country: "required|string"
    });

    return val.check()
        .then(matched => {
            if (!matched) {
                const result = {
                    statusCode: 422,
                    message: "Invalid inputs",
                    errors: errorFormatter(val.errors)
                }
                res.statusCode = result.statusCode;
                return res.json(result);
            } else {
                const request = {
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10)
                }
                Candidate.create(request).then(candidate => {
                    const verification_data = {
                        email: request.email,
                        link: uniqid(getRandomString(50)),
                        expiresAt: moment().add(5, "minutes")
                    }
                    VerifyEmail.create(verification_data)
                        .then(verification_body => {
                            const token = jwt.sign({ _id: candidate._id }, process.env.APP_KEY);
                            const result = {
                                token,
                                statusCode: 200,
                                message: "Account created succesfully."
                            }
                            return ejs.renderFile(path.join(__dirname.replace("server", "templates"), "emails", "account-verification.ejs"), { link: verification_body.link, name: candidate.name, model: "candidate" }, (error, body) => {
                                if (error) {
                                    throw error;
                                } else {
                                    return sendMail("System", `noreply@${process.env.BASE_URL}`, verification_body.email, candidate.name, "Verify your email address", body, "html").then(() => {
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
            res.statusCode = result.statusCode;
            return res.json(result);
        });
}

export const updateProfile = (req, res) => {
    const user = req.Candidate;
    const val = new Validator(req.body, {
        dob: "required|string",
        address: "required|string",
        bio: "required|string",
        githubusername: "required|string",
    });

    return val.check()
        .then(matched => {
            if (!matched) {
                const result = {
                    statusCode: 422,
                    message: "Invalid inputs",
                    errors: errorFormatter(val.errors)
                }
                res.statusCode = result.statusCode;
                return res.json(result);
            } else {
                const { dob, profile_img, address, bio, githubusername, website, youtube, facebook, twitter, instagram, linkedin } = req.body;
                const profile = {};
                if (dob) profile.dob = dob;
                if (profile_img) profile.profile_img = profile_img;
                if (address) profile.address = address;
                if (website) profile.website = website;
                if (bio) profile.bio = bio;
                if (githubusername) profile.githubusername = githubusername;
                profile.social = {};
                if (youtube) profile.social.youtube = youtube;
                if (twitter) profile.social.twitter = twitter;
                if (facebook) profile.social.facebook = facebook;
                if (linkedin) profile.social.linkedin = linkedin;
                if (instagram) profile.social.instagram = instagram;

                console.log(profile);
                Candidate.findOneAndUpdate({ _id: user._id }, { $set: profile });
                const result = {
                    statusCode: 200,
                    message: "Profile created",
                    profile: profile
                }
                return res.json(result);
            }
        }).catch(e => this.errorHandler(e, res));
}