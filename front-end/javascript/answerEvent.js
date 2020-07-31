import { renderCorrectIFrameContent, renderWrongCodeBlock } from "./codeRender.js";
const renderDisplay = document.querySelector(".iframe-display");

const answer1 = document.querySelector(".interactive-answer1");
answer1.addEventListener("click", () => {
  alert("you found bad code!");
  renderCorrectIFrameContent();
  renderWrongCodeBlock();
});
