import fs from "fs";
import path from "path";
import editEnv from "edit-dotenv";

export default (key, value) => {
    const envLocation = path.join(__dirname.replace("utils", ""), ".env");
    const oldEnv = fs.readFileSync(envLocation, "utf-8");
    const newEnv = editEnv(oldEnv, { [key]: value });
    fs.writeFileSync(envLocation, newEnv);
    console.log("Env file updated successfully.");
}