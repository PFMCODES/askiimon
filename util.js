import chalk from "chalk"

let error = false

function info(str) {
    console.log(chalk.blueBright("ⓘ ASKIIMON: ") + str)
}

function warn(str, topic) {
    console.log(chalk.yellow('⚠  ASKIIMON: ') + str + `\n\n${link("Docs/Help", `https://pfmcodes.onrender.com/askiimon/docs/${topic}/`)}\n`)
}

function err(str, topic) {
    error = true;
    process.stdout.write("\r");       // go to start
    process.stdout.clearLine(0);      // clear line
    console.log(chalk.redBright("╳ ASKIIMON: ") + str + `\n\n${link("Docs/Help", `https://pfmcodes.onrender.com/askiimon/docs/${topic}/`)}\nFound a bug or an issue? ${link("report", "https://github.com/pfmcodes/askiimon/issues/new")}\n`)
}

function setErr(value) {
    error = value;
}

function Error() {
    return error;
}

function setShowWarnings(value) {
    error = value;
}

function showWarnings() {
    return error;
}

function link(text, url) {
  return `\u001b]8;;${url}\u0007${text}\u001b]8;;\u0007`;
}

export { warn, info, err, link, setErr, Error };