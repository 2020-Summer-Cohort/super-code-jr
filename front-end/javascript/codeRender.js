export { renderAllContent };
import { fetchQuestion, fetchQuestions } from "./fetchQuestions.js";
import { questionGrabber } from "./gameLoop.js";

const renderAllContent = (question, turnCounter) => {
  renderWrongIframeContent(question);
  renderBeforeError(question);
  renderErrorCode(question, turnCounter);
  renderAfterError(question);
  renderCodeyStartingDialogue(question);
  renderGroundControlBeginning(question);
};
const renderWrongIframeContent = (question) => {
  const renderIFrameQuestion = document.querySelector(".iframe-display");
  renderIFrameQuestion.srcdoc = question.iframeWrong;
};

const renderCorrectIFrameContent = (question) => {
  const iframeDisplay = document.querySelector(".iframe-display");
  iframeDisplay.srcdoc = question.iframeCorrect;
};
const renderBeforeError = (question) => {
  const codeTag = document.querySelector(".before-error");
  codeTag.innerText = `${question.beforeErrorCode}`;
};
const renderErrorCode = (question, turnCounter) => {
  const codeTag = document.querySelector(".error-code");
  codeTag.innerHTML = `${question.errorCode}`;
  codeTag.addEventListener("click", () => {
    alert("you found bad code!");
    updateAllDisplays(question, turnCounter);
  });
};

const updateAllDisplays = (question, turnCounter) => {
  renderGroundControlFinished(question, turnCounter);
  renderCorrectIFrameContent(question);
  renderCorrectCodeBlock(question);
  renderCodeyEndingDialogue(question);
};

const renderCorrectedError = (question) => {
  const codeTag = document.querySelector(".error-code");
  codeTag.innerHTML = `${question.correctedError}`;
};
const renderAfterError = (question) => {
  const codeTag = document.querySelector(".after-error");
  codeTag.innerText = `${question.afterErrorCode}`;
};

const renderCorrectCodeBlock = (question) => {
  renderBeforeError(question);
  renderCorrectedError(question);
  renderAfterError(question);
};
const renderCodeyEndingDialogue = (question) => {
  const pTag = document.querySelector(".codey-dialogue");
  pTag.innerHTML = `${question.codeyEndingDialogue}`;
};
const renderCodeyStartingDialogue = (question) => {
  const pTag = document.querySelector(".codey-dialogue");
  pTag.innerHTML = `${question.codeyStartingDialogue}`;
};

const renderGroundControlBeginning = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerText = `${question.groundControlBeginningDialogue}`;
};

const renderGroundControlFinished = (question, turnCounter) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = `${question.groundControlCompletedDialogue}`;
  const continueButton = document.createElement("button");
  continueButton.innerText = "continue";
  continueButton.addEventListener("click", () => {
    alert("Next Question!");
    console.log(turnCounter);
    questionGrabber();
  });
  pTag.append(continueButton);
};

const renderGroundControlHint = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = `${question.hintText}`;
};
