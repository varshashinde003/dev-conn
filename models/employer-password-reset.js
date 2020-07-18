import { Schema, model } from 'mongoose'

const employerPasswordResetSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
})

export default model('EmployerPasswordReset', employerPasswordResetSchema)
