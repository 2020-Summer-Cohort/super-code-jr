import { renderAllContent } from "./codeRender.js";
import { fetchQuestion, fetchQuestions } from "./fetchQuestions.js";
export { questionGrabber };
let turnCounter = -1;

const questionGrabber = () => {
  turnCounter++;
  fetchQuestions().then((questions) => {
    if (turnCounter >= questions.length) {
      displayVictory();
    } else {
      renderAllContent(questions[turnCounter], turnCounter);
    }
  });
};
const startGame = () => {
  questionGrabber(turnCounter);
};

startGame(turnCounter);

const displayVictory = () => {
  const totalClicks = document.querySelector(".total-score").textContent;
  const displayContainer = document.querySelector(".display-container");
  displayContainer.innerHTML = ``;
  const victoryContainer = document.createElement("section");
  victoryContainer.classList.add("victory-container");
  const youWon = document.createElement("h2");
  youWon.innerText = "WOW YOU DID IT";
  const moreText = document.createElement("p");
  moreText.innerText =
    "YEAH WOW YOU HAD " + totalClicks + " TOTAL CLICKS, NOT BAD!";
  victoryContainer.appendChild(youWon);
  victoryContainer.appendChild(moreText);
  displayContainer.appendChild(victoryContainer);
};
