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
  const victoryContainer = document.createElement("iframe");
  victoryContainer.classList.add("victory-container");
  victoryContainer.src = "./victory.html";
  victoryContainer.height = "150%";
  displayContainer.appendChild(victoryContainer);
};
