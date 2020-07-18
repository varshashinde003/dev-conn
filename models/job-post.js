import { Schema, model } from 'mongoose'
import Counter from './counter'

const jobPostSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  employerId: {
    type: String,
    required: true
  },
  contactName: {
    type: String,
    required: false
  },
  contactEmail: {
    type: String,
    required: false
  },
  expireOn: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  coverImgSecureUrl: {
    type: String,
    required: true
  },
  coverImgPublicId: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keySkills: {
    type: Array,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  applicationUrl: {
    type: String,
    required: false
  },
  noOfApplicants: {
    type: String
  },
  salary: {
    type: String,
    required: false
  },
  jobType: {
    type: String,
    required: true
  },
  keywords: {
    type: Array,
    required: true
  },
  industry: {
    type: String,
    required: false
  },
  benefits: {
    type: String,
    required: false
  },
  workRemotely: {
    type: Boolean,
    default: false
  },
  urgentHiring: {
    type: Boolean,
    default: false
  },
  isApproved: {
    type: Boolean,
    default: false,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false,
    required: true
  },
  isTop: {
    type: Boolean,
    default: false,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false,
    required: true
  }
}, { timestamps: true })

jobPostSchema.pre('validate', false, function (next) {
  const doc = this
  Counter.findOneAndUpdate({ model: 'JobPost' }, { $inc: { sequence: 1 } }, { upsert: true, new: true }, (error, counter) => {
    if (error) { return next(error) }
    doc.id = counter.sequence
    next()
  })
})

export default model('JobPost', jobPostSchema)
