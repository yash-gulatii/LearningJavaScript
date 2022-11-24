// Global Selections and Variables

const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const slider = document.querySelectorAll('.input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let intialColors;

// Functions

// Color Generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    // Add the color to the bg
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;

    // Check for contrast
    checkTextContrast(randomColor, hexText);
  });
}

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
}

randomColors();
