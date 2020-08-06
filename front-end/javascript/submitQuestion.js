const submitButton = document.getElementById("submitButton");
const codeLanguage = document.getElementById("codeLanguage");
const beforeError = document.getElementById("beforeErrorCode");
const errorCode = document.getElementById("errorCode");
const afterError = document.getElementById("afterErrorCode");
const correctedError = document.getElementById("correctedError");
const iframeWrong = document.getElementById("iframeWrong");
const iframeCorrect = document.getElementById("iframeCorrect");
const codeyStartingDialogue = document.getElementById("codeyStartingDialogue");
const codeyEndingDialogue = document.getElementById("codeyEndingDialogue");
const hintText = document.getElementById("hintText");
const groundControlBeginningDialogue = document.getElementById(
  "groundControlBeginningDialogue"
);
const groundControlCompletedDialogue = document.getElementById(
  "groundControlCompletedDialogue"
);

submitButton.addEventListener("click", () => {
  console.log("Hello");
  let data =
    codeLanguage.value +
    "\r\n###\r\n" +
    beforeError.value +
    "\r\n###\r\n" +
    errorCode.value +
    "\r\n###\r\n" +
    afterError.value +
    "\r\n###\r\n" +
    correctedError.value +
    "\r\n###\r\n" +
    iframeWrong.value +
    "\r\n###\r\n" +
    iframeCorrect.value +
    "\r\n###\r\n" +
    codeyStartingDialogue.value +
    "\r\n###\r\n" +
    codeyEndingDialogue.value +
    "\r\n###\r\n" +
    hintText.value +
    "\r\n###\r\n" +
    groundControlBeginningDialogue.value +
    "\r\n###\r\n" +
    groundControlCompletedDialogue.value;

  const textToBlob = new Blob([data], { type: "text/plain" });
  const fileName = "testQuestion.txt";

  let newLink = document.createElement("a");
  newLink.download = fileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBlob);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  newLink.click();
});
