import { Schema, model } from "mongoose";

const employerSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    company_logo: {
        type: Object,
        required: true
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
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    address: {
        type: String,
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
    company_email: {
        type: String,
        required: true
    },
    company_website: {
        type: String,
        required: true
    },
    company_desc: {
        type: String,
        required: true
    },
    industries: {
        type: Array,
        required: true
    },
    email_verified_at: {
        type: Date,
        required: false
    },
    contact_verified_at: {
        type: Date,
        required: false
    },
    account_activated_on: {
        type: Date,
        required: false
    },
}, { timestamps: true });

export default model("Employer", employerSchema);