import { Schema, model } from "mongoose";

const employerSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    company_logo: {
        type: String,
        required: true
    },
    poc_name: {
        type: String,
        required: true
    },
    poc_email: {
        type: String,
        required: true,
        unique: true
    },
    poc_password: {
        type: String,
        required: true
    },
    poc_contact: {
        type: String,
        required: true
    },
    poc_designation: {
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
    company_email: {
        type: String,
        required: true
    },
    company_website: {
        type: String,
        required: true
    },
    company_desc: {
        type: Text,
        required: true
    },
    industries: {
        type: Array,
        required: true
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
    emailToken: String
}, { timestamps: true });

export default model("Employer", employerSchema);