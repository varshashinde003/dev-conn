export default (model) => {
  return (req, res, next) => {
    if (req[model] && req[model].accountActivatedOn) {
      next()
    } else {
      const result = {
        statusCode: 403,
        message: 'Your Account is under review'
      }
      res.status(result.statusCode)
      return res.json(result)
    }
  }
}
