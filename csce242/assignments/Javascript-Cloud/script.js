// script.js
// Using arrow functions and const as required in class

// --- Sunny Times ---
const sunnyCard = document.getElementById("sunnyCard");
const lyrics = document.getElementById("lyrics");

sunnyCard.addEventListener("click", () => {
  lyrics.textContent = `Here comes the sun
  Sun
  Sun
  Sun
Here it comes`;
});

// --- Color Picker ---
const colorPicker = document.getElementById("colorPicker");
const colorText = document.getElementById("colorText");

colorPicker.addEventListener("input", () => {
  const color = colorPicker.value;
  colorText.style.color = color;
  colorText.textContent = `You picked: ${color}`;
});

// --- Image Change ---
const weatherImage = document.getElementById("weatherImage");
const cloudyImg = "images/cloudy.png";  // Now inside images folder
const sunnyImg = "images/sunny.png";    // Now inside images folder

weatherImage.addEventListener("click", () => {
  weatherImage.src = weatherImage.src.includes("cloudy.png") ? sunnyImg : cloudyImg;
});
