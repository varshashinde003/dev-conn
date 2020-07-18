import { Schema, model } from 'mongoose'

const industrySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  enabled: {
    type: Boolean,
    default: true
  }
})

export default model('Industry', industrySchema)
