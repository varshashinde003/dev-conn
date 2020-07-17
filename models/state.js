import { Schema, model } from "mongoose";

const industrySchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default model("Industry", industrySchema);