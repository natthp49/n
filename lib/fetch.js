const { node_mirror_uri } = require("./config");


exports.node_list = async () => {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const res = await fetch(`${node_mirror_uri}/index.json`, requestOptions).then()
        return res.json()
    } catch (err) {
        return err

    }
}