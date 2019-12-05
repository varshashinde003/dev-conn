import { Schema, model } from "mongoose";

const adminSchema = new Schema({
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
    account_activated_on: {
        type: Date,
        default: new Date()
    },
}, { timestamps: true });

export default model("Admin", adminSchema);