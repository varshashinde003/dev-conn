import { Schema, model } from 'mongoose'

const stateSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cities: [
    {
      title: {
        type: String,
        required: true
      }
    }
  ]
}, { timestamps: true })

export default model('State', stateSchema)
