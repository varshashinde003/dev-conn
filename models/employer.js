import { Schema, model } from "mongoose";

const employerSchema = new Schema({
    company_name : {
        type : String,
        required : true
    },
    company_logo : {
        type : String,
        required : true
    },
    poc_name : {
        type : String,
        required : true
    },
    poc_email : {
        type : String,
        required : true,
        unique : true
    },
    poc_password : {
        type : String,
        required : true
    },
    poc_contact : {
        type : String,
        required : true
    },
    poc_designation : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    company_email : {
        type : String,
        required : true
    },
    company_website : {
        type : String,
        required : true
    },
    company_desc : {
        type : String,
        required : true
    },
    industries : {
        type : String,
        required : true
    },
    is_email_verified : {
        type : Boolean,
        default: false
    },
    is_contact_verified : {
        type : Boolean,
        default: false
    },
    account_activated_on : {
        type : Date
    },
    emailToken: String
}, { timestamps : true });

export default model("Employer", employerSchema);