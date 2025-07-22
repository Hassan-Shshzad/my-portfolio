document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
});

// Typing animation
const texts = ["Hassan", "a Python Developer", "a UI/UX Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 120);
  }
}
type();
