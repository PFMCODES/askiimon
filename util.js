import chalk from "chalk"

function info(str) {
    console.log(chalk.blueBright("ⓘ ASKIIMON: ") + str)
}

function warn(str) {
    console.log(chalk.yellow('⚠  ASKIIMON: ') + str)
}

function err(str) {
    console.log(chalk.redBright("╳ ASKIIMON: ") + str)
}

export { warn, info, err };