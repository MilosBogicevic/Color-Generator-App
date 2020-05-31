const color = document.querySelector(".color");
const button = document.querySelector(".generateColor");

// Add event listeners
color.addEventListener("click", copyColor);
button.addEventListener("click", newColor);

// Functions
function newColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  //   Apply background color
  document.body.style.backgroundColor = randomColor;
  //   Replace h2 text with new color
  color.innerText = randomColor;
}

function copyColor() {
  let text = color.innerText;
  //   Create input element
  let input = document.createElement("input");
  input.setAttribute("value", text);
  //   Append input element
  document.body.appendChild(input);
  //   Select all text in an input field
  input.select();
  //   Replace clipboard's current content
  document.execCommand("copy");
  //   Remove input element
  document.body.removeChild(input);

  alert("Copied!");
}
