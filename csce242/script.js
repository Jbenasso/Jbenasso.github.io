// script.js
// Calm interactive features for meadow haven aesthetic

// 🌙 Theme Toggle
const body = document.body;
const themeBtn = document.createElement("button");
themeBtn.textContent = "🌙 Toggle Theme";
themeBtn.style.marginTop = "15px";
themeBtn.style.padding = "6px 12px";
themeBtn.style.border = "1px solid #d8e3d3";
themeBtn.style.borderRadius = "8px";
themeBtn.style.background = "#fdfdfb";
themeBtn.style.cursor = "pointer";
themeBtn.style.fontFamily = "Georgia, serif";
themeBtn.style.fontSize = "0.9rem";
themeBtn.style.color = "#3e523d";

document.querySelector("header").appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    themeBtn.textContent = "☀️ Light Theme";
  } else {
    themeBtn.textContent = "🌙 Dark Theme";
  }
});

// Dark Theme Styles (matches CSS palette)
const style = document.createElement("style");
style.textContent = `
  .dark-theme {
    background: #2e2e2e url("images/background.jpg") no-repeat center center fixed;
    background-size: cover;
    color: #f4f4f4;
  }
  .dark-theme header,
  .dark-theme footer,
  .dark-theme .card {
    background: rgba(46, 46, 46, 0.85);
    color: #f4f4f4;
    border-color: #555;
  }
  .dark-theme h1, .dark-theme h2, .dark-theme h3 {
    color: #d8e3d3;
  }
`;
document.head.appendChild(style);

// 🌸 Affirmations Button
const footer = document.querySelector("footer");
const affirmationBtn = document.createElement("button");
affirmationBtn.textContent = "✨ Daily Affirmation";
affirmationBtn.style.marginTop = "10px";
affirmationBtn.style.padding = "6px 12px";
affirmationBtn.style.border = "1px solid #d8e3d3";
affirmationBtn.style.borderRadius = "8px";
affirmationBtn.style.background = "#fdfdfb";
affirmationBtn.style.cursor = "pointer";
affirmationBtn.style.fontFamily = "Georgia, serif";
affirmationBtn.style.fontSize = "0.9rem";
affirmationBtn.style.color = "#3e523d";

footer.appendChild(affirmationBtn);

const affirmationText = document.createElement("p");
affirmationText.style.marginTop = "12px";
affirmationText.style.fontStyle = "italic";
affirmationText.style.color = "#395b44";
footer.appendChild(affirmationText);

const affirmations = [
  "I am growing gently, like a meadow in spring 🌱",
  "Calm and steady, I move toward my goals 🌿",
  "I deserve rest, joy, and balance 🌸",
  "Every day brings small growth 🌞",
  "I am patient with myself and others 🌼"
];

affirmationBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * affirmations.length);
  affirmationText.textContent = affirmations[random];
});
