const { node_list } = require("./fetch");

async function ls_remote(version) {
    try {

        const list = await node_list()

        var vers;
        if (version) {
            switch (version) {
                case "latest":
                    console.log(list[0].version);

                    break;
                case "lts":
                    vers = list.filter(val => typeof val.lts === "string")
                    console.log(vers[0].version)

                    break;
                case "argon":
                case "boron":
                case "carbon":
                case "dubnium":
                case "erbium":
                case "fermium":
                case "gallium":
                case "hydrogen":
                case "iron":
                    vers = list.filter(val => typeof val.lts === "string" && val.lts.toLowerCase().includes(version))
                    console.log(vers[0].version);

                    break;
                default:
                    vers = list.filter(val => val.version.includes(version))
                    console.log(vers[0].version);
                    break;
            }


        } else {
            const all_versions = list.map((val) => {
                return val.version

            })
            console.log(all_versions.toString().replaceAll(',', "\n"));
        }
    } catch (err) {
        console.log(err);

    }

}

exports.ls_remote
module.exports = ls_remote
