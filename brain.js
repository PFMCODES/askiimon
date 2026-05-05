import { currentMood, setMood, subscribe } from "./emotions.js";
import { setMessage } from "./mouth.js";
import chalk from "chalk";

export let showWarnings = true;

let mood = "";
let message = "";

function cleanup() {
    process.stdout.write("\r");       // go to start
    process.stdout.clearLine(0);      // clear line
    mood = "";
    brain.setMessage(`ASKIIMON is ${chalk.red.underline('Dead')}`)
}

function init() {
    mood = currentMood;
    render();

    subscribe((newMood) => {
        mood = newMood;
        render();
    });

    // 🔥 handle exit
    process.on("exit", cleanup);
    process.on("SIGINT", () => {
        cleanup();
        process.exit();
    });
    process.on("SIGTERM", cleanup);
}

function brainSetMessage(str) {
    message = setMessage(str);
    render();
}

function render() {
    process.stdout.write(`\r${mood}${mood === "" ? "" : " "}${message}`);
}

const brain = {
    init, setMood, setMessage: brainSetMessage
}

export default brain;