import { Schema, model } from 'mongoose'
import Counter from './counter'

const attachmentSchema = new Schema({
  secureUrl: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    required: true
  }
})

const applicationSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  candidateId: {
    type: Number,
    required: true
  },
  jobId: {
    type: Number,
    required: true
  },
  coverLetter: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false,
    default: 'under review'
  },
  attachments: [attachmentSchema]
}, { timestamps: true })

applicationSchema.pre('validate', false, function (next) {
  const doc = this
  Counter.findOneAndUpdate({ model: 'Application' }, { $inc: { sequence: 1 } }, { upsert: true, new: true }, (error, counter) => {
    if (error) { return next(error) }
    doc.id = counter.sequence
    next()
  })
})

export default model('Application', applicationSchema)
