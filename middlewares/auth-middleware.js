import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const login = (username, password, model = "User", loginWith = "email") => {
    return mongoose.model(model).findOne({ [loginWith]: username })
        .exec()
        .then(user => {
            if (!user) {
                return {
                    statusCode: 401,
                    message: "We can't find such account."
                }
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    const token = jwt.sign({ _id: user._id }, process.env.AUTH_KEY);
                    return {
                        token,
                        statusCode: 200,
                        message: "Logged in succesfully."
                    }
                } else {
                    return {
                        statusCode: 422,
                        message: "Unauthorized."
                    }
                }
            }
        }).catch(err => {
            return {
                statusCode: 500,
                message: err.message
            }
        })
}


export const auth = (model = "User") => {
    const authModel = mongoose.model(model);
    return (req, res, next) => {
        const token = req.headers["authorization"] && req.headers["authorization"].split("Bearer ")[1];
        if (!token) {
            return throwUnauthorizedError(res);
        } else {
            jwt.verify(token, process.env.AUTH_KEY, {}, (error, decoded) => {
                if (error) {
                    return throwUnauthorizedError(res);
                } else {
                    console.log(decoded._id);

                    authModel.findOne({ _id: decoded._id })
                        .select("_id name email createdAt updatedAt")
                        .exec()
                        .then(user => {
                            if (!user) {
                                return throwUnauthorizedError(res);
                            } else {
                                req[model] = user;
                                next();
                            }
                        })
                        .catch(err => {
                            const result = {
                                statusCode: 500,
                                message: process.env.APP_ENV === "development" ? err.message : "Something went wrong. Please try again later"
                            }
                            res.statusCode = result.statusCode;
                            return res.json(result);
                        });
                }
            });
        }
    }
}

const throwUnauthorizedError = (res) => {
    const result = {
        statusCode: 401,
        message: "Unauthorized."
    }
    res.statusCode = result.statusCode;
    return res.json(result);
}