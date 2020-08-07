export { renderAllContent };
import { fetchQuestion, fetchQuestions, submitQuestion } from "./fetchQuestions.js";
import { questionGrabber } from "./gameLoop.js";

const walkieTalkie = new Audio("audio/walkie-talkie.mp3");
const numberOfTries = document.querySelector(".score");
const totalNumberOfTries = document.querySelector(".total-score");

const renderAllContent = (question, turnCounter) => {
  renderWrongIframeContent(question);
  renderWholeErrorCode(question, turnCounter);
  renderCodeyStartingDialogue(question);
  renderGroundControlBeginning(question);
  developerTabClickable();
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
  beforeError.addEventListener("click", function beforeListener() {
    beforeError.removeEventListener("click", beforeListener);
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
  errorCode.addEventListener("click", function listener() {
    errorCode.removeEventListener("click", listener);
    updateAllDisplays(question, turnCounter);
    numberOfTries.innerHTML = Number(numberOfTries.innerHTML) + 1;
    totalNumberOfTries.innerHTML = Number(totalNumberOfTries.innerHTML) + 1;
  });
  codeBlock.appendChild(errorCode);
  const afterError = document.createElement("p");
  afterError.innerText = `${question.afterErrorCode}`;
  afterError.addEventListener("click", function afterListener() {
    afterError.removeEventListener("click", afterListener);
    renderGroundControlHint(question);
    walkieTalkie.play();
    numberOfTries.innerHTML = Number(numberOfTries.innerHTML) + 1;
    totalNumberOfTries.innerHTML = Number(totalNumberOfTries.innerHTML) + 1;
  });
  codeBlock.appendChild(afterError);
};

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

const renderCorrectCodeBlock = (question) => {
  renderCorrectedError(question);
};

const renderCodeyEndingDialogue = (question) => {
  const pTag = document.querySelector(".codey-dialogue");
  pTag.innerHTML = "";
  const text = `${question.codeyEndingDialogue}`;
  let i = 0;
  typeWriter();
  function typeWriter() {
    if (i < text.length) {
      pTag.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
};

const renderCodeyStartingDialogue = (question) => {
  const pTag = document.querySelector(".codey-dialogue");
  pTag.innerHTML = "";
  const text = `${question.codeyStartingDialogue}`;
  let i = 0;
  typeWriter();
  function typeWriter() {
    if (i < text.length) {
      pTag.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
};

const renderGroundControlBeginning = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = "";
  const text = `${question.groundControlBeginningDialogue}`;
  let i = 0;
  typeWriter();
  function typeWriter() {
    if (i < text.length) {
      pTag.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
};

const renderGroundControlFinished = (question, turnCounter) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = "";
  const text = `${question.groundControlCompletedDialogue}`;
  let i = 0;
  typeWriter();
  function typeWriter() {
    if (i < text.length) {
      pTag.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
    if (i == text.length) {
      continueContainer.prepend(continueButton);
    }
  }
  const continueContainer = document.querySelector(".continue-button");
  const continueButton = document.createElement("button");
  continueButton.innerText = "Continue";
  continueButton.addEventListener("click", () => {
    numberOfTries.firstChild.remove();
    continueContainer.firstChild.remove();
    questionGrabber();
  });
};

const renderGroundControlHint = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue");
  pTag.innerHTML = "";
  const text = `${question.hintText}`;
  let i = 0;
  typeWriter();
  function typeWriter() {
    if (i < text.length) {
      pTag.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
};

const developerTabClickable = () => {
  const sTag = document.querySelector(".developer-tab");
  sTag.innerText = `Developers`;
  const gTab = document.querySelector(".game-tab");
  gTab.innerText = `Codeys Game`;
  sTag.addEventListener("click", () => {
    renderDeveloperTab();
  });
};

const renderDeveloperTab = () => {
  const modal = document.getElementById("developer-modal");
  modal.style.display = "block";
  const sTag = document.getElementsByClassName("close-modal")[0];
  sTag.onclick = () => {
    modal.style.display = "none";
  };
};
