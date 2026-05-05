import brain from "brain.js";

export function birth(starting_mood, starting_message, birth_place) {
    brain.init(birth_place || "nodejs");
    brain.setMood(starting_mood || "idle");
    brain.setMessage(starting_message || "");

    return brain;
}

const create = birth;
const init = birth;

const askiimon = {
    birth,
    create,
    init,
};

export { birth, init, create };
export default askiimon;