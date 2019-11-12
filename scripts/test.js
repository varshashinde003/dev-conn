// import Admin from "../models/admin";
// import bcrypt from "bcrypt";

import { login } from "../middlewares/auth-middleware";
login("varshashinde003@gmail.com", "asdasdasd", "Admin").then(res => {
    console.log(res);
})

// Admin.create({
//     name: "Varsha",
//     email: "varshashinde003@gmail.com",
//     password: bcrypt.hashSync("asdasdasd", 10)
// }).then(docs => {
//     console.log(docs)
// }).catch(error => {
//     console.log(error.message);
// });