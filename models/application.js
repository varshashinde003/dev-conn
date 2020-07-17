import { Schema, model } from "mongoose";

const applicationSchema = new Schema({
    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'candidate'
    },
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobPost'
    },
    cover_letter: {
        type: String,
        required: false
    },
    resume: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default model("Application", applicationSchema);