export default (model) => {
    return (req, res, next) => {
        if (req[model] && req[model].account_activated_on) {
            next();
        } else {
            const result = {
                statusCode: 403,
                message: "Your Account is under review"
            }
            res.status(result.statusCode);
            return res.json(result);
        }

    }
}