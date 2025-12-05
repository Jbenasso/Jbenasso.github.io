// Associative arrays (objects)
const beforePics = {
  "Barbie": "images/dog1.jpg",
  "Max": "images/dog2.jpg",
  "Coco": "images/dog3.jpg",
  "Luna": "images/dog4.jpg"
};

const afterPics = {
  "Barbie": "images/dog1_after.jpg",
  "Max": "images/dog2_after.jpg",
  "Coco": "images/dog3_after.jpg",
  "Luna": "images/dog4_after.jpg"
};

// Get gallery container
const gallery = document.getElementById("gallery");

// Loop through dogs and create cards
Object.keys(beforePics).forEach(dog => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = beforePics[dog];
  img.alt = dog;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.textContent = `Please adopt ${dog}`;

  card.appendChild(img);
  card.appendChild(overlay);

  // Click event → popup
  card.addEventListener("click", () => {
    document.getElementById("popup-title").textContent = `${dog} after adoption`;
    document.getElementById("popup-img").src = afterPics[dog];
    document.getElementById("popup").classList.remove("hidden");
  });

  gallery.appendChild(card);
});

// Close popup
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});
