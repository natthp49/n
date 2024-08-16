
function commands() {
    const keys = process.argv.slice(2)

    switch (keys[0]) {
        case "latest" || "current":

            break;
        case "lts" || "stable":

            break;
        case "install" || 'i':
            versions(keys[2])
            break;
        case "run" || "use" || "as":
            versions(keys[2])
            break;
        case "which" || "bin":
            versions(keys[2])
            break;
        case "exec":
            versions(keys[2])
            break;
        case "rm" || "-":
            versions(keys[2])
            break;
        case "prune":

            break;
        case "--latest":

            break;
        case "--lts":

            break;
        case "ls" || 'list':

            break;
        case "ls-remote" || "lsr":
            versions(keys[2])
            break;
        case "uninstall":

            break;
        default:
            versions(keys[1])
            break;
    }

}

function versions(key) {
    switch (key) {
        case "lts" || "latest" || "current" || "auto" || "engine" || "boron" || "carbon" || "lts_latest" || "nightly":

            break;

        default:
            break;
    }

}


exports.commands
module.exports = commands;