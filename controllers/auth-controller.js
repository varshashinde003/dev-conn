import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ejs from "ejs";
import path from "path";
import { getRandomNumberByRange } from "../utils/random";
import moment from "moment";
import { sendMail } from "../utils/mailer";
import log from "../utils/logger";

export default class Auth {
    constructor(model = "User", loginWith = "email") {
        this.model = model;
        this.loginWith = loginWith;

        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.changePassword = this.changePassword.bind(this);

        this.sendForgetPasswordMail = this.sendForgetPasswordMail.bind(this);
        this.resetPassword = this.resetPassword.bind(this);

        this.errorHandler = this.errorHandler.bind(this);
    }

    login(req, res) {
        const username = req.body.email;
        const password = req.body.password;
        mongoose.model(this.model).findOne({ [this.loginWith]: username })
            .exec()
            .then(user => {
                if (!user) {
                    const result = {
                        statusCode: 401,
                        message: "We can't find such account."
                    }
                    res.statusCode = result.statusCode;
                    return res.json(result);
                } else {
                    if (bcrypt.compareSync(password, user.password)) {
                        const token = jwt.sign({ _id: user._id }, process.env.AUTH_KEY);
                        const result = {
                            token,
                            statusCode: 200,
                            message: "Logged in succesfully."
                        }
                        res.statusCode = result.statusCode;
                        return res.json(result);
                    } else {
                        const result = {
                            statusCode: 422,
                            message: "Unauthorized."
                        }
                        res.statusCode = result.statusCode;
                        return res.json(result);
                    }
                }
            })
            .catch(err => this.errorHandler(err, res));
    }

    getProfile(req, res) {
        const user = req[this.model];
        return res.json({ status: "success", profile: user })
    }

    changePassword(req, res) {
        const { oldPassword, newPassword, confirmPassword } = req.body;
        mongoose.model(this.model).findOne({ _id: req[this.model]._id }).select("password")
            .exec()
            .then(user => {
                if (bcrypt.compareSync(oldPassword, user.password)) {
                    return mongoose.model(this.model).findByIdAndUpdate({ _id: user._id }, { password: bcrypt.hashSync(newPassword, 10) })
                        .then(() => {
                            const result = {
                                statusCode: 200,
                                message: "Password has been updated successfuly."
                            }
                            res.statusCode = result.statusCode;
                            return res.json(result);
                        })
                } else {
                    const result = {
                        statusCode: 422,
                        message: "Old password is Invalid."
                    }
                    res.statusCode = result.statusCode;
                    return res.json(result);
                }
            })
            .catch(err => this.errorHandler(err, res));
    }

    sendForgetPasswordMail(req, res) {
        const username = req.body[this.loginWith];
        mongoose.model(this.model).findOne({ [this.loginWith]: username })
            .select("name email")
            .exec()
            .then(user => {
                if (user) {
                    const passwordReset = {
                        email: user.email,
                        otp: getRandomNumberByRange(100000, 999999),
                        expiresAt: moment().add(5, "minutes")
                    }
                    return mongoose.model(this.model + "PasswordReset").findOneAndUpdate({ email: user.email }, passwordReset, { upsert: true })
                        .then(() => {
                            const data = {
                                email: user.email,
                                name: user.name,
                                otp: passwordReset.otp,
                                expiresAt: "5 minutes"
                            }

                            return ejs.renderFile(path.join(__dirname.replace("server", "templates"), "emails", "forget-password.ejs"), data, (error, body) => {
                                if (error) {
                                    throw error;
                                } else {
                                    return sendMail("System", `noreply@${process.env.BASE_URL}`, data.email, data.name, "Reset password request", body, "html")
                                        .then(() => {
                                            const result = {
                                                statusCode: 200,
                                                message: "Mail has been sent"
                                            }
                                            res.statusCode = result.statusCode;
                                            return res.json(result);
                                        })
                                }
                            })
                        })
                } else {
                    const result = {
                        statusCode: 422,
                        message: "We couldn't find any account associated with this email."
                    }
                    res.statusCode = result.statusCode;
                    return res.json(result);
                }
            })
            .catch(err => this.errorHandler(err, res));
    }

    resetPassword(req, res) {
        const { email, otp, password } = req.body;
        mongoose.model(this.model + "PasswordReset").findOne({ email, otp })
            .select("_id email expiresAt")
            .exec()
            .then(passwordReset => {
                if (!passwordReset) {
                    const result = {
                        statusCode: 422,
                        message: "Invalid OTP."
                    }
                    res.statusCode = result.statusCode;
                    return res.json(result);
                } else {
                    const { expiresAt } = passwordReset;
                    const currentDate = moment();
                    const expiryDate = moment(expiresAt, "YYYY-MM-DD HH:mm:ss")
                    const duration = moment.duration(expiryDate.diff(currentDate)).as("minutes");
                    if (duration < 1) {
                        const result = {
                            statusCode: 422,
                            message: "OTP has expired."
                        }
                        res.statusCode = result.statusCode;
                        return res.json(result);
                    } else {
                        return mongoose.model(this.model).updateOne({ email: passwordReset.email }, { password: bcrypt.hashSync(password, 10) })
                            .exec()
                            .then(() => {
                                return mongoose.model(this.model + "PasswordReset").deleteOne({ _id: passwordReset._id })
                                    .exec()
                                    .then(() => {
                                        const result = {
                                            statusCode: 200,
                                            message: "Password has been updated successfully"
                                        }
                                        res.statusCode = result.statusCode;
                                        return res.json(result);
                                    })
                            })
                    }
                }
            })
            .catch(err => this.errorHandler(err, res));
    }

    errorHandler(err, res) {
        log.error(err.message);
        const result = {
            statusCode: 500,
            message: process.env.DEBUG === "true" ? err.message : "Something went wrong. Please try again later"
        }
        res.statusCode = result.statusCode;
        return res.json(result);
    }
}