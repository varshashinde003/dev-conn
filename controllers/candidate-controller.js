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
import { raw } from "express";

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
                res.status(result.statusCode);
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
    const user = req.Candidate;
    return Candidate.findOne({ _id: user._id }, { password: 0, "__v": 0 }).exec()
        .then(profile => {
            return res.json({ statusCode: 200, message: "success", profile })
        }).catch(err => errorHandler(err, res));
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
                res.status(result.statusCode);
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

                return Candidate.findOneAndUpdate({ _id: user._id }, { $set: profile }, { new: true })
                    .exec()
                    .then(candidate => {
                        const result = {
                            statusCode: 200,
                            message: "Profile created",
                            profile: candidate
                        }
                        return res.json(result);
                    })
            }
        }).catch(err => errorHandler(err, res));
}

export const addEducation = (req, res) => {
    const user = req.Candidate;
    const val = new Validator(req.body, {
        school: "required|string",
        degree: "required|string",
        field_of_study: "required|string",
        from: "required|string",
        to: "required|string",
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
                const { school, degree, field_of_study, from, to, current, description } = req.body;
                const data = {
                    school, degree, field_of_study, from, to, current, description
                }

                Candidate.findOne({ _id: user._id }, { password: 0, _v: 0 }).exec()
                    .then(profile => {
                        profile.education.push(data);
                        profile.save();
                        const result = {
                            statusCode: 200,
                            message: "Education Updated successfully",
                            profile
                        }
                        return res.json(result);
                    })
            }
        }).catch(err => errorHandler(err, res));
}

export const addExperience = (req, res) => {
    const user = req.Candidate;
    const val = new Validator(req.body, {
        title: "required|string",
        company: "required|string",
        location: "required|string",
        joining_date: "required|string",
        last_date: "required|string",
        current: "required|boolean",
        description: "required|string"
    });
    return val.check()
        .then(matched => {
            if (!matched) {
                const result = {
                    statusCode: 422,
                    message: "Invald Inputs",
                    errors: errorFormatter(val.errors)
                }
                res.status(result.statusCode);
                return res.json(result);
            } else {
                const { title, company, location, joining_date, last_date, current, description } = req.body;
                const data = { title, company, location, joining_date, last_date, current, description };
                return Candidate.findOne({ _id: user._id })
                    .exec()
                    .then(profile => {
                        profile.experience.push(data);
                        profile.save();
                        const result = {
                            statusCode: 200,
                            message: "Experience updated successfully.",
                            profile
                        }
                        return res.json(result);
                    });
            }
        })
        .catch(err => errorHandler(err, res));
}

export const deleteEducation = (req, res) => {
    const user = req.Candidate;
    const edu_id = req.params.id;
    return Candidate.findById({ _id: user.id }, { password: 0, "__v": 0 }).exec()
        .then(profile => {
            if (!profile) {
                const result = {
                    statusCode: 404,
                    message: "Not found",
                }
                res.status(result.statusCode);
                return res.json(result);
            } else {
                const entry = profile.education.map(item => item.id === edu_id)[0];
                if (entry) {
                    profile.education.splice(profile.education.indexOf(user.id), 1);
                    profile.save();
                    const result = {
                        message: "Deleted successfully.",
                    }
                    return res.json(result);
                } else {
                    const result = {
                        statusCode: 404,
                        message: "Not found",
                    }
                    res.status(result.statusCode);
                    return res.json(result);
                }
            }
        })
        .catch(err => errorHandler(err, res));

}

export const deleteExperience = (req, res) => {
    const user = req.Candidate;
    const exp_id = req.params.id;
    return Candidate.findById({ _id: user.id }, { password: 0, "__v": 0 }).exec()
        .then(profile => {
            if (!profile) {
                const result = {
                    statusCode: 404,
                    message: "Not found",
                }
                res.status(result.statusCode);
                return res.json(result);
            } else {
                const entry = profile.experience.map(item => item.id === exp_id)[0];
                if (entry) {
                    profile.experience.splice(profile.experience.indexOf(user.id), 1);
                    profile.save();
                    const result = {
                        message: "Deleted successfully.",
                    }
                    return res.json(result);
                } else {
                    const result = {
                        statusCode: 404,
                        message: "Not found",
                    }
                    res.status(result.statusCode);
                    return res.json(result);
                }
            }
        })
        .catch(err => errorHandler(err, res));

}

// export const updateEducation = (req, res) => {
//     const user = req.Candidate;
//     const edu_id = req.params.id;
//     const val = new Validator(req.body, {
//         school: "required|string",
//         degree: "required|string",
//         field_of_study: "required|string",
//         from: "required|string",
//         to: "required|string",
//     });

//     return val.check()
//         .then(matched => {
//             if (!matched) {
//                 const result = {
//                     statusCode: 422,
//                     message: "Invald Inputs",
//                     errors: errorFormatter(val.errors)
//                 }
//                 res.status(result.statusCode);
//                 return res.json(result);
//             } else {
//                 const { school, degree, field_of_study, from, to, current, description } = req.body;
//                 const data = {
//                     school, degree, field_of_study, from, to, current, description
//                 }

//                 return Candidate.findOne({ _id: user._id })
//                     .exec()
//                     .then(profile => {
//                         console.log(profile);
//                         const updae
//                         // profile.experience.push(data);
//                         // profile.save();
//                         // const result = {
//                         //     statusCode: 200,
//                         //     message: "Experience updated successfully.",
//                         //     profile
//                         // }
//                         // return res.json(result);
//                     });
//             }
//         })
//         .catch(err => errorHandler(err, res));

// }

const errorHandler = (err, res) => {
    log.error(err.message);
    const result = {
        statusCode: 500,
        message: process.env.DEBUG === "true" ? err.message : "Something went wrong. Please try again later"
    }
    res.status(result.statusCode);
    return res.json(result);
}
