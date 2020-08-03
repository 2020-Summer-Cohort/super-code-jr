export { errorInteractivity };
import {
  renderCorrectIFrameContent,
  renderWrongCodeBlock,
} from "./codeRender.js";

const errorInteractivity = (errorText) => {
  errorText.addEventListener("click", () => {
    alert("you found bad code!");
    renderCorrectIFrameContent();
    renderWrongCodeBlock();
  });
};
