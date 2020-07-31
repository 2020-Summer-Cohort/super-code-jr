import { getTurnCounter } from "./gameLoop.js";

const container = document.querySelector(".rendered-code-container");
const test = document.createElement("h2");
const turn = getTurnCounter;
test.innerHTML = getTurnCounter;
container.append(test);
