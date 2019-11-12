const fs = require("fs");
const path = require("path");

const envLocation = path.join(__dirname.replace("scripts", ""), ".env");

if (!fs.existsSync(envLocation)) {
    fs.copyFileSync(envLocation + ".example", envLocation);
    console.log(".env file generated successfully!");
}