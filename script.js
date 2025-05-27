const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("theme-toggle");
const sound = document.getElementById("click-sound");

let currentInput = "";

function playClick() {
  sound.currentTime = 0;
  sound.play();
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playClick();
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput.replace(/√/g, "Math.sqrt").replace(/x²/g, "**2")).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "√") {
      currentInput += "√(";
    } else if (value === "x²") {
      currentInput += "**2";
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
