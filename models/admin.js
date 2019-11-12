import { config } from "dotenv";
config();
import mongoose, { Schema, model } from "mongoose";

mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.DB_URL, { user: process.env.DB_USER, pass: process.env.DB_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("error", (error) => {
    console.error("There is a problem connecting with database. Please check the following error: ", error.message);
});

mongoose.Promise = global.Promise;

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
}, { timestamps: true });

export default model("Admin", adminSchema);