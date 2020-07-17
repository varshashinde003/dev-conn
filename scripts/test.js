import { config } from "dotenv";
config();

import { sendMail } from "../utils/mailer";

sendMail("varshashinde003@gmail.com", "Varsha", "salman.ekport@gmail.com", "Salman", "This is test subject", "This is test email body").then(() => {
    console.log("Mail sent successfully");
}).catch(err => {
    console.log("Error sending email", err);
});