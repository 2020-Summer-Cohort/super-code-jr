export {
  renderWrongCodeBlock,
  renderCorrectCodeBlock,
  renderWrongIframeContent,
  renderCorrectIFrameContent,
  renderCodeyDialogue,
  renderCodeyEndDialogue,
  renderGroundControl,
};
import { fetchQuestion, fetchQuestions } from "./fetchQuestions.js";

const renderWrongIframeContent = () => {
  const renderIFrameQuestion = document.querySelector(".iframe-display");
  renderIFrameQuestion.src = "./wrong-rendered-Code.html";
};

const renderCorrectIFrameContent = () => {
  const iframeDisplay = document.querySelector(".iframe-display");
  iframeDisplay.src = "./right-rendered-code.html";
};

const renderWrongCodeBlock = (question) => {
  const questionCodeBlock = document.querySelector(".question-code-block");
  questionCodeBlock.innerText = `${question.hintText}`;
};

const renderCorrectCodeBlock = (question) => {
  const codeTag = document.querySelector(".question-code-block");
  codeTag.innerHTML = `${question.rightCodeBlock}`;
};

const renderCodeyDialogue = (question) => {
  const pTag = document.querySelector(".codey-dialogue");
  pTag.innerHTML = `${question.codeyStartingDialogue}`;
};

const renderCodeyEndDialogue = (question) => {
  const pTag = document.querySelector(".codey-dialogue");
  pTag.innerHTML = `${question.codeyEndingDialogue}`;
};
const renderGroundControl = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = `${question.wholeQuestionCompletedDialogue}`;
};

const renderGroundControlHint = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = `${question.hintText}`;
};
