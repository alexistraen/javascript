const textBold = document.getElementById("textBold");
const textColor = document.getElementById("textColor");
const textBig = document.getElementById("textBig");
const text = document.getElementById("text");

function bold() {
  text.classList.toggle("textBold");
}

function color() {
  text.classList.toggle("textColor");
}

function big() {
  text.classList.toggle("textSize");
}

textBold.onclick = bold;
textColor.onclick = color;
textBig.onclick = big;