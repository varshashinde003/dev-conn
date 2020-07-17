import { Schema, model } from "mongoose";

const jobPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true 
    },
    company_id: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    contact_name: {
        type: String,
        required: false
    },
    contact_email: {
        type: String,
        required: false
    },
    expire_on: {
        type: String,
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
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    key_skills: {
        type: Array,
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
    application_url: {
        type: String,
        required: false
    },
    no_of_applicants: {
        type: String,
    },
    salary: {
        type: String,
        required: false
    },
    job_type: {
        type: String,
        required: true
    },
    keywords: {
        type: Array,
        required: true
    },
    industry: {
        type: String,
        required: false
    },
    benefits: {
        type: String,
        required: false
    },
    work_remotely: {
        type: Boolean,
        default: false,
    },
    urgent_hiring: {
        type: Boolean,
        default: false,
    },
    is_approved: {
        type: Boolean,
        default: false,
        required: true
    },
    is_active: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });

export default model("JobPost", jobPostSchema);