import log from '../../utils/logger'
import JobPost from '../../models/job-post'
import Application from '../../models/application'
import paginator from '../../utils/paginator'

export const getAllPosts = (req, res) => {
  return paginator(JobPost, req.query.pageNumber, 10, 'posts', { isApproved: true, isActive: true })
    .then(posts => {
      return res.json(posts)
    })
    .catch(err => errorHandler(err, res))
}

export const getPostDetails = (req, res) => {
  const { slug } = req.params
  return JobPost.findOne({ slug, isApproved: true, isActive: true }, { password: 0, __v: 0 }).exec()
    .then(post => {
      if (post) {
        return Application.countDocuments({ slug, candidateId: req.Candidate && req.Candidate.id })
          .exec()
          .then(applicationCount => {
            return res.json({
              isApplied: applicationCount > 0,
              post
            })
          })
          .catch(() => {
            return res.json({
              isApplied: false,
              post
            })
          })
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

// Homepage Api

export const getAllFeaturedPosts = (req, res) => {
  JobPost.find({ isFeatured: true, isApproved: true, isActive: true }).limit(8).exec()
    .then(posts => {
      return res.json(posts)
    }).catch(err => errorHandler(err, res))
}

export const getAllTopPosts = (req, res) => {
  JobPost.find({ isTop: true, isApproved: true, isActive: true }).limit(8).exec()
    .then(posts => {
      return res.json(posts)
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
