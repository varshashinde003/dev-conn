import { Schema, model } from 'mongoose'
import Counter from './counter'

const candidateSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
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
  contact: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  profileImageSecureUrl: {
    type: String,
    required: false
  },
  profileImagePublicId: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
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
  website: {
    type: String,
    required: false
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  experience: [
    {
      title: {
        type: String,
        required: false
      },
      company: {
        type: String,
        required: false
      },
      location: {
        type: String
      },
      joiningDate: {
        type: Date,
        required: false
      },
      lastDate: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: false
      },
      degree: {
        type: String,
        required: false
      },
      fieldOfStudy: {
        type: String,
        required: false
      },
      from: {
        type: Date,
        required: false
      },
      to: {
        type: Date,
        required: false
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String,
        required: false
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  resumeSecureUrl: {
    type: String,
    required: false
  },
  resumePublicId: {
    type: String,
    required: false
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
  },
  isProfileCompleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

candidateSchema.pre('validate', false, function (next) {
  const doc = this
  Counter.findOneAndUpdate({ model: 'Candidate' }, { $inc: { sequence: 1 } }, { upsert: true, new: true }, (error, counter) => {
    if (error) { return next(error) }
    doc.id = counter.sequence
    next()
  })
})

export default model('Candidate', candidateSchema)
