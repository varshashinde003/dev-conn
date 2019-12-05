export default (model) => {
    return (req, res, next) => {
        if (req[model] && req[model].account_activated_on) {
            next();
        } else {
            res.statusCode = 403
            return res.json({
                statusCode: 403,
                message: "Your Account is under review"
            });
        }

    }
}