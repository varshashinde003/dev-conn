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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_img: {
        type: String,
        required: true
    },
    address: {
        type: Text,
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
    website: {
        type: String,
        required: false
    },
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            joining_date: {
                type: Date,
                required: true
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
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            field_of_study: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
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
    is_email_verified: {
        type: Boolean,
        default: false,
        required: true
    },
    is_contact_verified: {
        type: Boolean,
        default: false,
        required: true
    },
    account_activated_on: {
        type: Date
    },
    resume: {
        type: String,
        required: true
    },
    emailToken: String
}, { timestamps: true });

export default model("Candidate", candidateSchema);