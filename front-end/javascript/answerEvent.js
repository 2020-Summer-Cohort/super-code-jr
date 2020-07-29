import { renderContent } from "./codeRender.js";
const renderDisplay = document.querySelector(".iframe-display");

const answer1 = document.querySelector(".interactive-answer1");
answer1.addEventListener("click", () => {
  alert("you found bad code!");
  renderContent();
});
const answer2 = document.querySelector(".interactive-answer2");
answer2.addEventListener("click", () => {
  alert("you found bad code!");
  renderContent();
});
const answer3 = document.querySelector(".interactive-answer3");
answer3.addEventListener("click", () => {
  alert("you found bad code!");
  renderContent();
});
const answer4 = document.querySelector(".interactive-answer4");
answer4.addEventListener("click", () => {
  alert("you found bad code!");
  renderContent();
});
