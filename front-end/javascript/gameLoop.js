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

let turnStart = 1;

const rightCodeContainer = document.querySelector(".right-code-container");
const indexContainer = document.querySelector(".game-container");
const wrongCodeContainer = document.querySelector(".wrong-code-container");
const questionCodeBlock = document.querySelector(".question-code-block");
const groundControlContainer = document.querySelector(
  ".ground-control-dialogue"
);
const iframeDisplayContainer = document.querySelector(".rendered-display");
const continueButton = document.createElement("button");
continueButton.addEventListener("click", () => {
  turnStart++;
  updateGame(turnStart);
});
const updateGame = (turnCounter) => {
  console.log(turnCounter);
  if (indexContainer != null) {
    fetchQuestion(turnCounter).then((question) => {
      renderWrongCodeBlock(question);
      errorInteractivity(question, questionCodeBlock);
      renderCodeyDialogue(question);
      renderGroundControl(question);
    });
  }
  clearIframeDisplay();
  fetchQuestion(turnCounter).then((question) => {
    const myIframe = document.createElement("iframe");
    iframeDisplayContainer.appendChild(myIframe);
    myIframe.classList.add("iframe-display");
    myIframe.srcdoc = question.iframeWrong;
  });
};

const startGame = (turnCounter) => {
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
    console.log(turnCounter);
    fetchQuestion(turnCounter).then((question) => {
      displayWrongIframe(question);
      renderWrongCodeBlock(question);
      errorInteractivity(question, questionCodeBlock);
      renderCodeyDialogue(question);
      renderGroundControl(question);
    });
  }
};

const displayWrongIframe = (question) => {
  const wrongIframe = document.createElement("iframe");
  wrongIframe.srcdoc = question.iframeWrong;
  wrongIframe.classList.add("iframe-display");
  iframeDisplayContainer.appendChild(wrongIframe);
};

const displayRightIframe = (question) => {
  const rightIframe = document.createElement("iframe");
  rightIframe.srcdoc = question.iframeCorrect;
  rightIframe.classList.add("iframe-display");
  iframeDisplayContainer.appendChild(rightIframe);
};

const clearIframeDisplay = () => {
  iframeDisplayContainer.innerHTML = ``;
};
const updateAllDisplays = (question) => {
  clearIframeDisplay();
  displayRightIframe(question);
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

window.onload = startGame(turnStart);
