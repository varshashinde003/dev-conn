const path = require("path");

module.exports = {
    serverIndex: path.join(__dirname.replace("config", "server"), "index.js"),
    serverBuildDir: __dirname.replace("config", "server"),
    serverBuildFile: "build.js",
    serverEjs: path.join(__dirname.replace("config", "templates"), "index.ejs"),

    clientEntry: path.join(__dirname.replace("config", "client"), "entry.js"),
    clientBuildDir: __dirname.replace("config", "public"),
    clientSrc: __dirname.replace("config", "client"),
    clientHtml: path.join(__dirname.replace("config", "client"), "index.html"),
}