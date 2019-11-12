import Admin from "../models/admin";
import { login } from "../middlewares/auth-middleware";

export const doLogin = (req, res) => {
    login(req.body.email, req.body.password, "Admin")
        .then(result => {
            res.statusCode = result.statusCode;
            return res.json(result)
        })
}

export const getProfile = (req, res) => {
    const admin = req.Admin;
    return res.json({ status: "success", profile: admin })
}