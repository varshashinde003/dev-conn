import log from '../../utils/logger'
import JobPost from '../../models/job-post'

export const getAllPosts = (req, res) => {
  JobPost.find().exec()
    .then(posts => {
      return res.json(posts)
    }).catch(err => errorHandler(err, res))
}

export const getPostDetails = (req, res) => {
  const { slug } = req.params
  return JobPost.findOne({ slug }, { password: 0, __v: 0 }).exec()
    .then(post => {
      if (post) {
        return res.json(post)
      } else {
        const result = {
          statusCode: 404,
          message: 'Post not found'
        }
        res.status(result.statusCode)
        return res.json(result)
      }
    }).catch(err => errorHandler(err, res))
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
