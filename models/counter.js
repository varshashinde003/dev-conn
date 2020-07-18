import { Schema, model } from 'mongoose'

const counterSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  sequence: {
    type: Number,
    default: 0
  }
})

export default model('Counter', counterSchema)
