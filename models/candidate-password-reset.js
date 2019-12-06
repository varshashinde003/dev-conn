import { Schema, model } from "mongoose";

const candidatePasswordResetSchema = new Schema({
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

export default model("CandidatePasswordReset", candidatePasswordResetSchema)