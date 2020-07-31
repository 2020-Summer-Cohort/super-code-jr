import { renderWrongCodeBlock, renderCorrectCodeBlock, renderWrongIframeContent, renderCorrectIFrameContent, 
    renderCodeyDialogue, renderGroundControl}from "./codeRender.js"
import { fetchQuestion, fetchQuestions} from "./fetchQuestions.js"

const turnCounter = 1

questionGrabber(turnCounter)

const questionGrabber = (turnCounter) => {
fetchQuestion(turnCounter)
  .then(question => {
    renderWrongIframeContent()
    renderWrongCodeBlock(question)
    renderCodeyDialogue(question)
    renderGroundControl(question)
  })
}