// ========================
// Toggle Menu
// ========================
const arrow = document.getElementById("arrow");
const menuItems = document.getElementById("menu-items");

arrow.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
  arrow.textContent = menuItems.classList.contains("hidden") ? "▼" : "▲";
});

// ========================
// Switch Sections
// ========================
const navItems = document.querySelectorAll("#menu-items li");
const sections = document.querySelectorAll(".content");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    sections.forEach(section => section.classList.add("hidden"));
    document.getElementById(item.dataset.section).classList.remove("hidden");
  });
});

// ========================
// Planting logic
// ========================
const daysSlider = document.getElementById("days");
const daysOutput = document.getElementById("days-output");
const plantMessage = document.getElementById("plant-message");
const plantImage = document.getElementById("plant-image");

function updatePlant() {
  let days = parseInt(daysSlider.value);
  daysOutput.textContent = `It's been ${days} day${days > 1 ? "s" : ""} since watering your plant`;

  if (days >= 1 && days <= 2) {
    plantMessage.textContent = "Your plant is healthy and happy 🌱";
    plantImage.src = "images/plant_healthy.png";  // PNG
  } else if (days >= 3 && days <= 5) {
    plantMessage.textContent = "Your plant needs watering 💧";
    plantImage.src = "images/plant_needs_water.jpg";  // JPG
  } else if (days >= 6 && days <= 9) {
    plantMessage.textContent = "Your plant is wilting 😢";
    plantImage.src = "images/plant_wilted.jpg";  // JPG
  } else {
    plantMessage.textContent = "Your plant has died 💀";
    plantImage.src = "images/plant_dead.jpg";  // JPG
  }
}
daysSlider.addEventListener("input", updatePlant);
updatePlant(); // run once on load

// ========================
// Digital Clock
// ========================
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // convert to 12-hour
  document.getElementById("digital-clock").textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();
