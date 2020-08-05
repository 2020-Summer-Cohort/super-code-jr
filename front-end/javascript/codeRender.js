export { renderAllContent };
import { fetchQuestion, fetchQuestions } from "./fetchQuestions.js";
import { questionGrabber } from "./gameLoop.js";

const walkieTalkie = new Audio("audio/walkie-talkie.mp3");
const numberOfTries = document.querySelector(".score");
const totalNumberOfTries = document.querySelector(".total-score")

const renderAllContent = (question, turnCounter) => {
  renderWrongIframeContent(question);
  renderWholeErrorCode(question, turnCounter);
  // renderBeforeError(question);
  // renderErrorCode(question, turnCounter);
  // renderAfterError(question);
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

const renderWholeErrorCode = (question, turnCounter) => {
  const codeBlock = document.querySelector(".question-code-block");
    while (codeBlock.firstChild) {
        codeBlock.firstChild.remove();
    }
  const beforeError = document.createElement("p");
  beforeError.innerText = `${question.beforeErrorCode}`;
  beforeError.addEventListener("click", () => {
    renderGroundControlHint(question);
    walkieTalkie.play();
    numberOfTries.innerHTML = Number(numberOfTries.innerHTML) + 1;
    totalNumberOfTries.innerHTML = Number(totalNumberOfTries.innerHTML) + 1;
  });
  codeBlock.appendChild(beforeError);
  const errorCode = document.createElement("p");
  errorCode.classList.add("error--block");
  errorCode.classList.remove("highlight--corrected");
  errorCode.innerHTML = `${question.errorCode}`;
  errorCode.addEventListener("click", () => {
    updateAllDisplays(question, turnCounter);
    alert("you found bad code!");
  });
  codeBlock.appendChild(errorCode);
  const afterError = document.createElement("p");
  afterError.innerText = `${question.afterErrorCode}`;
  afterError.addEventListener("click", () => {
    renderGroundControlHint(question);
    walkieTalkie.play();
    numberOfTries.innerHTML = Number(numberOfTries.innerHTML) + 1;
    totalNumberOfTries.innerHTML = Number(totalNumberOfTries.innerHTML) + 1;
  });
  codeBlock.appendChild(afterError);
};

// const renderBeforeError = (question) => {
//   const codeTag = document.querySelector(".before-error");
//   codeTag.innerText = `${question.beforeErrorCode}`;
//   codeTag.addEventListener("click", () => {
//     renderGroundControlHint(question);
//     walkieTalkie.play();
//   });
// };
// const renderErrorCode = (question, turnCounter) => {
//   const codeTag = document.querySelector(".error-code");
//   codeTag.classList.remove("highlight--corrected");
//   codeTag.innerHTML = `${question.errorCode}`;
//   codeTag.addEventListener("click", () => {
//     updateAllDisplays(question, turnCounter);
//     alert("you found bad code!");
//   });
// };

const updateAllDisplays = (question, turnCounter) => {
  renderGroundControlFinished(question, turnCounter);
  renderCorrectIFrameContent(question);
  renderCorrectCodeBlock(question);
  renderCodeyEndingDialogue(question);
};

const renderCorrectedError = (question) => {
  const codeTag = document.querySelector(".error--block");
  codeTag.classList.add("highlight--corrected");
  codeTag.innerHTML = `${question.correctedError}`;
};
// const renderAfterError = (question) => {
//   const codeTag = document.querySelector(".after-error");
//   codeTag.innerText = `${question.afterErrorCode}`;
//   codeTag.addEventListener("click", () => {
//     renderGroundControlHint(question);
//     walkieTalkie.play();
//   });
// };

const renderCorrectCodeBlock = (question) => {
  renderCorrectedError(question);
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
    numberOfTries.firstChild.remove();
    questionGrabber();
  });
  pTag.append(continueButton);
};

const renderGroundControlHint = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = `${question.hintText}`;
};
