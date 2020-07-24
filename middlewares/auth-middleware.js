import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

export default class AuthMiddleware {
  constructor (model = 'Employer') {
    this.model = model
    this.auth = this.auth.bind(this)
    this.apiAuth = this.apiAuth.bind(this)
    this.webAuth = this.webAuth.bind(this)
    this.throwUnauthorizedError = this.throwUnauthorizedError.bind(this)
  }

  auth (req, res, next, token) {
    if (!token) {
      return this.throwUnauthorizedError(res)
    } else {
      jwt.verify(token, process.env.AUTH_KEY, {}, (error, decoded) => {
        if (error) {
          return this.throwUnauthorizedError(res)
        } else {
          const authModel = mongoose.model(this.model)
          authModel.findOne({ _id: decoded._id })
            .select('_id id name email accountActivatedOn createdAt updatedAt')
            .exec()
            .then(user => {
              if (!user) {
                return this.throwUnauthorizedError(res)
              } else {
                req[this.model] = user
                next()
              }
            })
            .catch(err => {
              const result = {
                statusCode: 500,
                message: process.env.DEBUG === 'true' ? err.message : 'Something went wrong. Please try again later'
              }
              res.status(result.statusCode)
              return res.json(result)
            })
        }
      })
    }
  }

  webAuth (req, res, next) {
    const token = req.signedCookies.authToken
    return this.auth(req, res, next, token)
  }

  apiAuth (req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split('Bearer ')[1]
    return this.auth(req, res, next, token)
  }

  throwUnauthorizedError (res) {
    const result = {
      statusCode: 401,
      message: 'Unauthorized.'
    }
    res.status(result.statusCode)
    return res.json(result)
  }
}
