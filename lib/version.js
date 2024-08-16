const { msg_not_foult } = require("./config");
const { node_list } = require("./fetch");

async function version(name) {
    try {

        const list = await node_list()

        var vers;
        if (name) {
            switch (name) {
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
                    vers = list.filter(val => typeof val.lts === "string" && val.lts.toLowerCase().includes(name))
                    // console.log(vers[0].version);
                    return vers[0].version

                    break;
                default:
                    if (name.toLowerCase().includes("v")) {
                        vers = list.filter(val => val.version.includes(name))
                        // console.log(vers[0].version);
                        return vers[0].version
                    } else {
                        let arr_vers = name.split(".")
                        switch (arr_vers.length) {
                            case 1:
                                vers = list.filter((val) => {
                                    let group1 = val.version.split(".")[0]
                                    if (group1.includes(name)) {

                                        return val
                                    }
                                })
                                // console.log(vers[0].version);
                                return vers[0].version

                                break;
                            case 2:
                                vers = list.filter((val) => {
                                    let group1 = val.version.split(".")[0]
                                    let group2 = val.version.split(".")[1]
                                    if (`${group1}.${group2}`.includes(name)) {

                                        return val
                                    }
                                })
                                // console.log(vers[0].version);
                                return vers[0].version
                                break;

                            default:
                                vers = list.filter((val) => {
                                    if (val.version.includes(name)) {

                                        return val
                                    }
                                })

                                if (vers.length > 0) {

                                    // console.log(vers[0].version);
                                    return vers[0].version
                                } else {
                                    // console.log(msg_not_foult);
                                    return msg_not_foult

                                }

                                break;
                        }
                    }

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

exports.version
module.exports = version
