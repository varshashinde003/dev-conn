import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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
                                message: process.env.DEBUG === "true" ? err.message : "Something went wrong. Please try again later"
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