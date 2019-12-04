import { Schema, model } from "mongoose";

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    conpany: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    posted_on: {
        type: Date,
        required: true
    },
    expire_on: {
        type: Date,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    cover_img: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    summary: {
        type: Text,
        required: true
    },
    description: {
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
    url: {
        type: String,
        required: false
    },
    no_of_applicants: {
        type: String,
        required: true
    },
    is_verified: {
        type: Boolean,
        default: false,
        required: true
    },
    is_active: {
        type: Boolean,
        default: false,
        required: true
    },
    salary: {
        type: String,
        required: false
    },
    job_type: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: false
    }
}, { timestamps: true });
export default model("Job", jobSchema);