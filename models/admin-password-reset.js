import { Schema, model } from "mongoose";

const adminPasswordResetSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    }
});

export default model("AdminPasswordReset", adminPasswordResetSchema)