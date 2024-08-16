const hepl = require('./hepl')
const ls_remote = require('./ls-remote')

function run() {
    const keys = process.argv.slice(2)
    const options = keys[0]

    switch (options) {
        case "-v":
        case "--version":

            break;
        case "-h":
        case "--help":
            hepl()
            break;
        case "-p":
        case "--preserve":

            break;
        case "-q":
        case "--quiet":

            break;
        case "-d":
        case "--download":

            break;
        case "-a":
        case "--arch":

            break;
        case "--offline":

            break;
        case "--all":

            break;
        case "--insecure":

            break;
        case "--use-xz/--no-use-xz":

            break;
        case "latest":
        case "current":

            break;
        case "lts":
        case "stable":

            break;
        case "install":
        case 'i':
            versions(keys[2])
            break;
        case "run":
        case "use":
        case "as":
            versions(keys[2])
            break;
        case "which":
        case "bin":
            versions(keys[2])
            break;
        case "exec":
            versions(keys[2])
            break;
        case "rm":
        case "-":
            versions(keys[2])
            break;
        case "prune":

            break;
        case "--latest":
            ls_remote("latest")
            break;
        case "--lts":
            ls_remote("lts")
            break;
        case "ls":
        case 'list':

            break;
        case "ls-remote":
        case "lsr":
            ls_remote(keys[1])
            break;
        case "uninstall":

            break;
        default:
            versions(keys[1])
            break;
    }
}
run()
