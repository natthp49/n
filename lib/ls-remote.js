const version = require("./version");

async function ls_remote(ver) {
    const versionName = await version(ver)
    console.log(versionName);

}

exports.ls_remote
module.exports = ls_remote
