import { renderWrongCodeBlock, renderCorrectCodeBlock, renderWrongIframeContent, renderCorrectIFrameContent, 
    renderCodeyDialogue, renderGroundControl}from "./codeRender.js"
import { errorInteractivity} from "./answerEvent.js"
import { fetchQuestion, fetchQuestions} from "./fetchQuestions.js"

let turnCounter = 1

const questionGrabber = (turnCounter) => {
    fetchQuestion(turnCounter)
      .then(question => {
        renderWrongIframeContent()
        renderWrongCodeBlock(question)
        renderCodeyDialogue(question)
        renderGroundControl(question)
    })
}

questionGrabber(turnCounter)

errorInteractivity()