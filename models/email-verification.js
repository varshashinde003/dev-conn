import { Schema, model } from 'mongoose'

const verifyEmailSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
})

export default model('VerifyEmail', verifyEmailSchema)
