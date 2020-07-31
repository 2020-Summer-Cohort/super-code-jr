export { renderBeforeError, renderErrorCode, renderAfterError, renderCorrectCodeBlock, renderWrongIframeContent, 
  renderCorrectIFrameContent, renderCodeyDialogue, renderGroundControlBeginning, renderGroundControlFinished, 
  renderGroundControlHint };


const renderWrongIframeContent = () => {
  const renderIFrameQuestion = document.querySelector(".iframe-display")
  renderIFrameQuestion.src = "./wrong-rendered-Code.html"
}

const renderCorrectIFrameContent = () => {
  const iframeDisplay = document.querySelector(".iframe-display")
  iframeDisplay.src = "./right-rendered-code.html"
}
const renderBeforeError = (question) => {
  const codeTag = document.querySelector(".before-error")
  codeTag.innerText = `${question.beforeErrorCode}`
}
const renderErrorCode = (question) => {
  const codeTag = document.querySelector(".error-code")
  codeTag.innerHTML = `${question.errorCode}`
}
const renderAfterError = (question) => {
  const codeTag = document.querySelector(".after-error")
  codeTag.innerText = `${question.afterErrorCode}`
}

const renderCorrectCodeBlock = (question) => {
  const  codeTag = document.querySelector(".question-code-block")
  codeTag.innerHTML = `${question.rightCodeBlock}`
}

const renderCodeyDialogue = (question) => {
  const pTag = document.querySelector(".codey-dialogue")
  pTag.innerHTML = `${question.codeyStartingDialogue}`
}

const renderGroundControlBeginning = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue")
  pTag.innerText = `${question.groundControlBeginningDialogue}`
}

const renderGroundControlFinished = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue")
  pTag.innerHTML= `${question.wholeQuestionCompletedDialogue}`
}

const renderGroundControlHint = (question) => {
  const pTag = document.querySelector(".ground-control-dialogue")
  pTag.innerHTML = `${question.hintText}`
}