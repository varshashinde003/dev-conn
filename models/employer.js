import { Schema, model } from 'mongoose'
import Counter from './counter'

const employerSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyLogoSecureUrl: {
    type: String,
    required: true
  },
  companyLogoPublicId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  address: {
    type: String,
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
  companyEmail: {
    type: String,
    required: true
  },
  companyWebsite: {
    type: String,
    required: true
  },
  companyDesc: {
    type: String,
    required: true
  },
  industries: {
    type: Array,
    required: true
  },
  emailVerifiedAt: {
    type: Date,
    required: false
  },
  contactVerifiedAt: {
    type: Date,
    required: false
  },
  accountActivatedOn: {
    type: Date,
    required: false
  }
}, { timestamps: true })

employerSchema.pre('validate', false, function (next) {
  const doc = this
  Counter.findOneAndUpdate({ model: 'Employer' }, { $inc: { sequence: 1 } }, { upsert: true, new: true }, (error, counter) => {
    if (error) { return next(error) }
    doc.id = counter.sequence
    next()
  })
})

export default model('Employer', employerSchema)
