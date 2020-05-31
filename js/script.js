const color = document.querySelector(".color");
const button = document.querySelector(".generateColor");

// Add event listeners
color.addEventListener("click", copyColor);
button.addEventListener("click", newColor);

// Functions
function newColor() {
  let randomColor = "#" + Math.floor(Math.random() * 10000000).toString(16);
  //   Apply background color
  document.body.style.backgroundColor = randomColor;
  //   Replace h2 text with new color
  color.innerText = randomColor;
}
