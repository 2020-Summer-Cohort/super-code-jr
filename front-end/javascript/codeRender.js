export { renderWrongCodeBlock, renderCorrectCodeBlock, renderWrongIframeContent, renderCorrectIFrameContent, 
  renderCodeyDialogue, renderGroundControl };
import { fetchQuestion, fetchQuestions} from "./fetchQuestions.js"


const renderWrongIframeContent = () => {
  const renderIFrameQuestion = document.querySelector(".iframe-display")
  renderIFrameQuestion.src = "./wrong-rendered-Code.html"
}

const renderCorrectIFrameContent = () => {
  const iframeDisplay = document.querySelector(".iframe-display")
  iframeDisplay.src = "./right-rendered-code.html"
}

const renderWrongCodeBlock = (question) => {
  codeTag = document.querySelector(".question-code-block")
  codeTag.innerHTML = `${question.wrongCodeBlock}`
}

const renderCorrectCodeBlock = (question) => {
  codeTag = document.querySelector(".question-code-block")
  codeTag.innerHTML = `${question.rightCodeBlock}`
}

const renderCodeyDialogue = (question) => {
  pTag = document.querySelector(".codey-dialogue")
  pTag.innerHTML = `${question.codeyStartingDialogue}`
}

const renderGroundControl = (question) => {
  pTag = document.querySelector(".ground-control-dialogue")
  pTag.innerHTML= `${question.wholeQuestionCompletedDialogue}`
}

const renderGroundControlHint = (question) => {
  pTag = document.querySelector(".ground-control-dialogue")
  pTag.innerHTML = `${question.hintText}`
}