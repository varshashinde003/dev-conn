import { Schema, model } from "mongoose";

const applicationSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job'
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
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