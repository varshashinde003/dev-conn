import { Schema, model } from "mongoose";

const candidateSchema = new Schema({
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
    profile_img: {
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
            joining_date: {
                type: Date,
                required: false
            },
            last_date: {
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
    ], education: [
        {
            school: {
                type: String,
                required: false
            },
            degree: {
                type: String,
                required: false
            },
            field_of_study: {
                type: String,
                required: false
            },
            from: {
                type: Date,
                required: false
            },
            to: {
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
    resume: {
        type: String,
        required: false
    },
    email_verified_at: {
        type: Date,
        required: false
    },
    is_contact_verified: {
        type: Boolean,
        default: false,
        required: false
    },
    account_activated_on: {
        type: Date,
        required: false
    },
    is_profile_completed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default model("Candidate", candidateSchema);