import { config } from "dotenv";
config();
import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);

const connectDB = () => {
    return mongoose.connect(process.env.DB_URL, { user: process.env.DB_USER, pass: process.env.DB_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        mongoose.Promise = global.Promise;
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.error("There is a problem connecting with database. Please check the following error: ", error.message);
    })
}

export default connectDB;