import { renderAllContent } from "./codeRender.js";
import { fetchQuestion, fetchQuestions } from "./fetchQuestions.js";
export { questionGrabber };
let turnCounter = -1;


const questionGrabber = () => {
  turnCounter++;
  fetchQuestions().then((questions) => {
    renderAllContent(questions[turnCounter], turnCounter);
  });
};
const startGame = () => {
  questionGrabber(turnCounter);
};

startGame(turnCounter);
