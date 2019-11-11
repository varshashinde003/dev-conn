const paths = require("./paths");

const nodeExternals = require("webpack-node-externals");

module.exports = function (webpackEnv) {
    return {
        target: "node",
        node: {
            __dirname: false
        },
        mode: webpackEnv,
        devtool: false,
        entry: [
            paths.serverIndex
        ],
        output: {
            path: paths.serverBuildDir,
            pathinfo: false,
            filename: paths.serverBuildFile,
            futureEmitAssets: true,
            globalObject: 'this'
        },
        externals: [nodeExternals()]
    };
}