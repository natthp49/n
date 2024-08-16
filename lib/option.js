

// const options = process.argv.slice(2)

function options() {
    const keys = process.argv.slice(2)

    switch (keys[0]) {
        case "-v" || "--version":

            break;
        case "-h" || "--help":

            break;
        case "-p" || "--preserve":

            break;
        case "-q" || "--quiet":

            break;
        case "-d" || "--download":

            break;
        case "-a" || "--arch":

            break;
        case "--offline":

            break;
        case "--all":

            break;
        case "--insecure":

            break;
        case "--use-xz/--no-use-xz":

            break;
        default:
            break;
    }

}


exports.options
module.exports = options