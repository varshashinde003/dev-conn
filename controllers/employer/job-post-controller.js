import log from '../../utils/logger'
import Validator from '../../utils/validator'
import errorFormatter from '../../utils/error-formatter'
import JobPost from '../../models/job-post'
import uniqid from 'uniqid'

export const addPost = (req, res) => {
  const user = req.Employer
  const val = new Validator(req.body, {
    title: 'required|string',
    company: 'required|string',
    contactName: 'required|string',
    contactEmail: 'required|string',
    expireOn: 'required|string',
    experience: 'required|string',
    coverImgSecureUrl: 'required|string',
    coverImgPublicId: 'required|string',
    education: 'required|string',
    summary: 'required|string',
    description: 'required|string',
    keySkills: 'required|array',
    city: 'required|string',
    state: 'required|string',
    country: 'required|string',
    salary: 'required|string',
    jobType: 'required|string',
    keywords: 'required|array',
    industry: 'required|string'
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
        const { title, company, contactName, contactEmail, expireOn, experience, coverImgSecureUrl, coverImgPublicId, education, summary, description, keySkills, city, state, country, salary, jobType, keywords, industry } = req.body
        const employerId = user.id
        const slug = `${title.toLowerCase().replace(/ /g, '-')}-${uniqid(10)}`
        const data = {
          title, slug, employerId, company, contactName, contactEmail, expireOn, experience, coverImgSecureUrl, coverImgPublicId, education, summary, description, keySkills, city, state, country, salary, jobType, keywords, industry
        }
        JobPost.create(data).then(post => {
          post.save()
          return res.json(post)
        })
      }
    }).catch(err => errorHandler(err, res))
}

export const editPost = (req, res) => {
  const employerId = req.Employer.id
  const { slug } = req.params
  const { title, company, contactName, contactEmail, expireOn, experience, coverImg, education, summary, description, keySkills, city, state, country, salary, jobType, keywords, industry } = req.body
  const val = new Validator(req.body, {
    title: title ? 'string' : 'required|string',
    company: company ? 'string' : 'required|string',
    contactName: contactName ? 'string' : 'required|string',
    contactEmail: contactEmail ? 'string' : 'required|string',
    expireOn: expireOn ? 'string' : 'required|string',
    experience: experience ? 'string' : 'required|string',
    coverImg: coverImg ? 'string' : 'required|string',
    education: education ? 'string' : 'required|string',
    summary: summary ? 'string' : 'required|string',
    description: description ? 'string' : 'required|string',
    keySkills: keySkills ? 'array' : 'required|array',
    city: city ? 'string' : 'required|string',
    state: state ? 'string' : 'required|string',
    country: country ? 'string' : 'required|string',
    salary: salary ? 'string' : 'required|string',
    jobType: jobType ? 'string' : 'required|string',
    keywords: keywords ? 'array' : 'required|array',
    industry: industry ? 'string' : 'required|string'
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
        const data = {
          title, employerId, company, contactName, contactEmail, expireOn, experience, coverImg, education, summary, description, keySkills, city, state, country, salary, jobType, keywords, industry
        }
        JobPost.findOneAndUpdate({ slug }, { $set: data }, { useFindAndModify: false, new: true, select: '-__v' }).exec().then(post => {
          if (post) {
            post.save()
            return res.json(post)
          } else {
            const result = {
              statusCode: 404,
              message: 'Not found'
            }
            res.status(result.statusCode)
            return res.json(result)
          }
        })
      }
    }).catch(err => errorHandler(err, res))
}

export const getAllPosts = (req, res) => {
  JobPost.find({ employerId: req.Employer.id }).exec()
    .then(posts => {
      return res.json(posts)
    }).catch(err => errorHandler(err, res))
}

export const deletePost = (req, res) => {
  const { id } = req.params
  return JobPost.findByIdAndRemove(id, { useFindAndModify: false }).exec()
    .then(post => {
      if (post) {
        const result = {
          message: 'Deleted Successfully'
        }
        return res.json(result)
      } else {
        const result = {
          statusCode: 404,
          message: 'Not found'
        }
        res.status(result.statusCode)
        return res.json(result)
      }
    })
}

export const activateJobPost = (req, res) => {
  const val = new Validator(req.body, {
    isActive: 'required|boolean'
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
          { $set: { isActive: req.body.isActive } },
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

const errorHandler = (err, res) => {
  log.error(err.message)
  const result = {
    statusCode: 500,
    message: process.env.DEBUG === 'true' ? err.message : 'Something went wrong. Please try again later'
  }
  res.status(result.statusCode)
  return res.json(result)
}
