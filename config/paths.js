const path = require("path");

module.exports = {
    serverIndex: path.join(__dirname.replace("config", "server"), "index.js"),
    serverBuildDir: __dirname.replace("config", "server"),
    serverBuildFile: "build.js"
}