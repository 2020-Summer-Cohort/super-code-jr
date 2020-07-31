import {
  renderWrongCodeBlock,
  renderCorrectCodeBlock,
  renderWrongIframeContent,
  renderCorrectIFrameContent,
  renderCodeyDialogue,
  renderGroundControl,
} from "./codeRender.js";
import { errorInteractivity } from "./answerEvent.js";
import { fetchQuestion, fetchQuestions } from "./fetchQuestions.js";

let turnCounter = 1;

const wrongCodeContainer = document.querySelector(".rendered-code-container");
const indexContainer = document.querySelector(".game-container");

const startGame = () => {
  if (wrongCodeContainer != null) {
    const questionGrabber = (turnCounter) => {
      fetchQuestion(turnCounter).then((question) => {
        renderWrongIframeContent();
        renderWrongCodeBlock(question);
        renderCodeyDialogue(question);
        renderGroundControl(question);
      });
    };
  }
  if (wrongCodeContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      wrongCodeContainer.innerHTML = `${question.codeyStartingDialogue}`;
    });
  }
};
startGame();
