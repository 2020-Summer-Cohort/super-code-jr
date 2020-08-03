import {
  renderWrongCodeBlock,
  renderCorrectCodeBlock,
  renderWrongIframeContent,
  renderCorrectIFrameContent,
  renderCodeyDialogue,
  renderGroundControl,
  renderCodeyEndDialogue,
} from "./codeRender.js";
import { fetchQuestion, fetchQuestions } from "./fetchQuestions.js";

var turnStart = 1;

const rightCodeContainer = document.querySelector(".right-code-container");
const indexContainer = document.querySelector(".game-container");
const wrongCodeContainer = document.querySelector(".wrong-code-container");
const questionCodeBlock = document.querySelector(".question-code-block");
const groundControlContainer = document.querySelector(
  ".ground-control-dialogue"
);
const continueButton = document.createElement("button");
continueButton.addEventListener("click", () => {
  newQuestion(turnStart);
});

const newQuestion = (turnCounter) => {
  turnCounter = turnCounter + 1;
  console.log(turnCounter);
  if (rightCodeContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      rightCodeContainer.innerHTML = `${question.codeyStartingDialogue}`;
    });
  }
  if (wrongCodeContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      wrongCodeContainer.innerHTML = `${question.codeLanguage}`;
    });
  }
  if (indexContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      renderWrongIframeContent();
      renderWrongCodeBlock(question);
      errorInteractivity(question, questionCodeBlock);
      renderCodeyDialogue(question);
      renderGroundControl(question);
    });
  }
};
const startGame = (turnCounter) => {
  if (indexContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      renderWrongIframeContent();
      renderWrongCodeBlock(question);
      errorInteractivity(question, questionCodeBlock);
      renderCodeyDialogue(question);
      renderGroundControl(question);
    });
  }
  if (rightCodeContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      rightCodeContainer.innerHTML = `${question.codeyStartingDialogue}`;
    });
  }
  if (wrongCodeContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      wrongCodeContainer.innerHTML = `${question.codeLanguage}`;
    });
  }
};

const updateAllDisplays = (question) => {
  renderCorrectIFrameContent();
  renderCodeyEndDialogue(question);
  groundControlContainer.appendChild(continueButton);
  continueButton.innerText = "Continue?";
};

const errorInteractivity = (question, errorText) => {
  errorText.addEventListener("click", () => {
    alert("you found bad code!");
    updateAllDisplays(question);
  });
};

startGame(turnStart);
