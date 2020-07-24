import log from '../../utils/logger'
import Validator from '../../utils/validator'
import errorFormatter from '../../utils/error-formatter'
import JobPost from '../../models/job-post'

export const approveJobPost = (req, res) => {
  const val = new Validator(req.body, {
    isApproved: 'required|boolean'
  })
  return val.check()
    .then(matched => {
      if (!matched) {
        const result = {
          statusCode: 422,
          message: 'Invalid inputs',
          errors: errorFormatter(val.errors)
        }
        res.status(result.statusCode)
        return res.json(result)
      } else {
        return JobPost.findOneAndUpdate(
          { id: req.params.id },
          { $set: { isApproved: req.body.isApproved } },
          { useFindAndModify: false, new: true, select: '-password -__v' }
        )
          .exec()
          .then((post) => {
            if (post) {
              const result = {
                message: 'Post updated',
                post
              }
              return res.json(result)
            } else {
              const result = {
                statusCode: 404,
                message: 'Post not found'
              }
              res.status(result.statusCode)
              return res.json(result)
            }
          })
      }
    }).catch((err) => errorHandler(err, res))
}

export const updateIsFeatured = (req, res) => {
  const val = new Validator(req.body, {
    isFeatured: 'required|boolean'
  })
  return val.check()
    .then(matched => {
      if (!matched) {
        const result = {
          statusCode: 422,
          message: 'Invalid inputs',
          errors: errorFormatter(val.errors)
        }
        res.status(result.statusCode)
        return res.json(result)
      } else {
        return JobPost.findOneAndUpdate(
          { id: req.params.id },
          { $set: { isFeatured: req.body.isFeatured } },
          { useFindAndModify: false, new: true }
        )
          .exec()
          .then((post) => {
            if (post) {
              const result = {
                message: 'Post updated'
              }
              return res.json(result)
            } else {
              const result = {
                statusCode: 404,
                message: 'Post not found'
              }
              res.status(result.statusCode)
              return res.json(result)
            }
          })
      }
    })
    .catch((err) => errorHandler(err, res))
}

export const updateIsTop = (req, res) => {
  const val = new Validator(req.body, {
    isTop: 'required|boolean'
  })
  return val.check()
    .then(matched => {
      if (!matched) {
        const result = {
          statusCode: 422,
          message: 'Invalid inputs',
          errors: errorFormatter(val.errors)
        }
        res.status(result.statusCode)
        return res.json(result)
      } else {
        return JobPost.findOneAndUpdate(
          { id: req.params.id },
          { $set: { isTop: req.body.isTop } },
          { useFindAndModify: false, new: true }
        )
          .exec()
          .then((post) => {
            if (post) {
              const result = {
                message: 'Post updated'
              }
              return res.json(result)
            } else {
              const result = {
                statusCode: 404,
                message: 'Post not found'
              }
              res.status(result.statusCode)
              return res.json(result)
            }
          })
      }
    })
    .catch((err) => errorHandler(err, res))
}

const errorHandler = (err, res) => {
  log.error(err.message)
  const result = {
    statusCode: 500,
    message: process.env.DEBUG === 'true' ? err.message : 'Something went wrong. Please try again later'
  }
  res.status(result.statusCode)
  return res.json(result)
}
