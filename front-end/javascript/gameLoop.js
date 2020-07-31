import { renderBeforeError, renderErrorCode, renderAfterError, renderCorrectCodeBlock, renderWrongIframeContent, 
    renderCorrectIFrameContent, renderCodeyDialogue, renderGroundControlBeginning, renderGroundControlFinished, 
    renderGroundControlHint}from "./codeRender.js"
import { errorInteractivity} from "./answerEvent.js"
import { fetchQuestion, fetchQuestions} from "./fetchQuestions.js"

let turnCounter = 1

const questionGrabber = (turnCounter) => {
    fetchQuestion(turnCounter)
      .then(question => {
        renderWrongIframeContent()
        renderBeforeError(question)
        renderErrorCode(question)
        renderAfterError(question)
        renderCodeyDialogue(question)
        renderGroundControlBeginning(question)
    })
}

questionGrabber(turnCounter)

errorInteractivity()