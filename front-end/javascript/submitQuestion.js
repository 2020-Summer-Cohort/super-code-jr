import { submitQuestion } from "./fetchQuestions.js";
const submitButton = document.getElementById("submitButton");
const codeLanguage = document.getElementById("codeLanguage");
const beforeError = document.getElementById("beforeErrorCode");
const errorCode = document.getElementById("errorCode");
const afterError = document.getElementById("afterErrorCode");
const correctedError = document.getElementById("correctedError");
const iframeWrong = document.getElementById("iframeWrong");
const iframeCorrect = document.getElementById("iframeCorrect");
const codeyStartingDialogue = document.getElementById("codeyStartingDialogue");
const codeyEndingDialogue = document.getElementById("codeyEndingDialogue");
const hintText = document.getElementById("hintText");
const groundControlBeginningDialogue = document.getElementById(
  "groundControlBeginningDialogue"
);
const groundControlCompletedDialogue = document.getElementById(
  "groundControlCompletedDialogue"
);

submitButton.addEventListener("click", () => {
  var question = {
    codeLanguage: codeLanguage.value,
    beforeErrorCode: beforeError.value,
    errorCode: errorCode.value,
    afterErrorCode: afterError.value,
    correctedError: correctedError.value,
    iframeWrong: iframeWrong.value,
    iframeCorrect: iframeCorrect.value,
    codeyStartingDialogue: codeyStartingDialogue.value,
    codeyEndingDialogue: codeyEndingDialogue.value,
    hintText: hintText.value,
    groundControlBeginningDialogue: groundControlBeginningDialogue.value,
    groundControlCompletedDialogue: groundControlCompletedDialogue.value,
  };

  console.log(question);
  submitQuestion(question);
  alert("Thanks for your submission!");
  document.location.reload(true);
});
