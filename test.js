import brain from "./brain.js";

brain.init()
let timeout;
timeout = setTimeout(() => {
    brain.setMood("DEAD_3");
    brain.setMessage("ASKIIMON died")
    let nTimeout;
    nTimeout = setTimeout(() => {
        clearTimeout(nTimeout)
    }, 2000)
    clearTimeout(timeout)
}, 3000)
