import { currentMood, setMood, subscribe } from "./emotions.js";
import { setMessage } from "./mouth.js";
import chalk from "chalk";
import { err, Error, setErr, showWarnings } from "./util.js";

let mood = "";
let message = "";
// cleaning up
function cleanup() {
    process.stdout.write("\r");       // go to start
    process.stdout.clearLine(0);      // clear line
    mood = "";
    if (!Error()) brain.setMessage(`ASKIIMON is ${chalk.red.underline('Dead')}`);
}
// initialises the brain of The ASKIIMON
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
        if (str === "" || str === null || str === undefined) return;
        if (typeof str !== "string" && showWarnings()) {
            setErr(true);
            err(`setMessage received ${chalk.redBright(typeof str)} expected ${chalk.greenBright("string")}`);
            process.exit(1);
        }
        message = setMessage(str);
        render();
    }

function brainSetMood(mood) {
    setMood(evaluate(mood));
}

function evaluate(mood) {
    return evaluation[mood.toLowerCase()];
}

function render() {
    process.stdout.write(`\r${mood}${mood === "" ? "" : " "}${message}`);
}

// takes a mood like, "cartoon happy" and returns "HAPPY_3"(in the format emotions.js uses)
const evaluation = {
    wink: "FLIRT_1",
    idle: "IDLE",
    "being cute": "CUTE_0",
    "happy nose guy": "HAPPY_0",
    happiest: "HAPP_1",
    "yay!": "HAPPY_7",
    "good for you": "HAPPY_8",
    teasing: "TEASING_0",
    sad: "SAD_0",
    "nose guy sad": "SAD_1",
    "cute chilling": "CUTE_1",
    angry: "ANGRY",
    "really annoyed": "ANNOYED",
    "annoyed": "ANNOYED",
    "in awe": "IN_AWE",
    "woah!": "SHOCKED_0",
    "cute hmm": "CUTE_3",
    uwu: "CUTE_4",
    "cute happy": "HAPPY_2",
    "nose guy dizzy": "DIZZY_0",
    heart: "HEART",
    kiss: "KISS",
    "mouth shut": "MOUTH_SHUT",
    "not funny": "BORED_2",
    dead: "DEAD_0",
    dead_1: "DEAD_1",
    dead_2: "DEAD_2",
    dead_3: "DEAD_3",
    dead_4: "DEAD_4",
    dead_5: "DEAD_5",
    "really?": "BORED_2",
    crying: "CRYING_0",
    "huh?": "SHOCKED_1",
    ohh: "SHOCKED_2",
    smug: "SMUG",
    "stopped crying": "CRYING_1",
    aiming: "AIMING",
    "feeling fine": "HAPPY_9",
    "having a good day": "CUTE_2",
    "cartoon happy": "HAPPY_3",
    "no chin shocked": "SHOCKED_3",
    "double chinned": "HAPPY_10",
    "cartoon partially happy": "HAPPY_4",
    "kinda bored": "BORED_3",
    "zoning out": "ZONING_OUT",
    "trying to sleep": "TRYING_TO_SLEEP",
    "admiration": "ADMIRATION",
    "partially sad": "=[",
    "guy with glasses": "HAPPY_11",
    "trying to focus eyesight": "BORED_4",
    "saying something loudly": "BORED_5",
    dizzy: "DIZZY_1",
    greed: "GREEDY",
    bribe: "BRIBE",
    excited: "EXCITED_0",
    bored: "BORED_0",
    scared: "SCARED",
    "partially happy": "",
    "idle 2": "IDLE2",
    "cartoon partially happy": "HAPPY_6",
    "wink smile": "WINK_1",
    "pinnochio sad": "SAD_3",
    "i got you bro": "WINK_2",
    "teasing neutral": "TEASING_1",
    "y eyes": "EXCITED_1",
    "cartoon sad": "SAD_4",
}

const brain = {
    init, setMood: brainSetMood, setMessage: brainSetMessage
}

export default brain;