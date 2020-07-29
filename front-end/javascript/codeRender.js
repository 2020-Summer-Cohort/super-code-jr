export { renderContent };

// const renderContainer = document.querySelector(".rendered-code-container");

const renderContent = () => {
  const renderContainer = document.querySelector(".rendered-code-container");
  const content = document.createElement("p");
  content.innerHTML = "HELLO I FUNCTION PROPERLY";
  renderContainer.append(content);
};
