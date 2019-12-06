import mongoose, { model } from "mongoose";
import log from "../utils/logger";

export default class Verification {
    constructor(model = "Employer") {
        this.model = model;
    }
    verifyEmail(req, res) {
        const token = req.params.token;
        return mongoose.model("VerifyEmail").findOneAndDelete({ link: token })
            .exec()
            .then(record => {
                if (!record) {
                    const result = {
                        statusCode: 422,
                        message: "Invalid Link"
                    }
                    res.statusCode = 422;
                    return res.json(result);
                } else {
                    return mongoose.model([this.model]).findOne({ email: record.email })
                        .exec()
                        .then(user => {
                            if (!user) {
                                const result = {
                                    statusCode: 400,
                                    message: "User not found."
                                }
                                res.statusCode = 400;
                                return res.json(result);
                            } if (!user.email_verified_at) {
                                user.email_verified_at = new Date();
                                user.save();
                                const result = {
                                    statusCode: 200,
                                    message: "Verified successfully"
                                }
                                return res.json(result);
                            } else {
                                const result = {
                                    statusCode: 200,
                                    message: "Email already verified"
                                }
                                return res.json(result);
                            }
                        });
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
}