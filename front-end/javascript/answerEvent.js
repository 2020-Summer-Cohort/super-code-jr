export {errorInteractivity}
import { renderCorrectIFrameContent, renderWrongCodeBlock } from "./codeRender.js";

const errorInteractivity = () => {
const answer1 = document.querySelector(".interactive-answer1");
answer1.addEventListener("click", () => {
  alert("you found bad code!");
  renderCorrectIFrameContent();
  renderWrongCodeBlock();
})
}
