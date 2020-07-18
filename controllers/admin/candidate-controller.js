import log from '../../utils/logger'
import Candidate from '../../models/candidate'

export const getAllCandidates = (req, res) => {
  Candidate.find()
    .exec()
    .then((candidates) => {
      return res.json(candidates)
    })
    .catch((err) => errorHandler(err, res))
}

export const getCandidateProfile = (req, res) => {
  return Candidate.findOne({ id: req.params.id }, { password: 0, __v: 0 }).exec()
    .then(profile => {
      return res.json({ statusCode: 200, message: 'success', profile })
    }).catch(err => errorHandler(err, res))
}

export const activateCandidate = (req, res) => {
  const data = {
    accountActivatedOn: new Date()
  }
  return Candidate.findOneAndUpdate(
    { id: req.params.id },
    { $set: data },
    { useFindAndModify: false, new: true, select: '-password -__v' }
  )
    .exec()
    .then((candidate) => {
      const result = {
        message: 'Profile updated',
        profile: candidate
      }
      return res.json(result)
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
