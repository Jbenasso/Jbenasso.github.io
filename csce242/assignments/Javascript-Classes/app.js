// --- Painting class --------------------------------------
class Painting {
  constructor({ id, name, artist, image, framed = false }) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.image = image;          // relative path inside /images
    this.framed = framed;        // boolean
  }

  // returns a <section> string with title + image (card)
  getSection() {
    return `
      <section class="card ${this.framed ? "framed" : ""}" data-id="${this.id}" tabindex="0" role="button" aria-label="Open ${this.name}">
        <img class="card-img" src="${this.image}" alt="${this.name} by ${this.artist}">
        <div class="card-body">
          <h3 class="card-title">${this.name}</h3>
          <p class="card-artist">by ${this.artist}</p>
        </div>
      </section>
    `;
  }

  // returns the inside of the modal for this painting
  getModalInnerHTML() {
    const frameClass = this.framed ? "framed" : "";
    return `
      <figure class="modal-figure">
        <img class="modal-image ${frameClass}" src="${this.image}" alt="${this.name} by ${this.artist}">
        <figcaption class="modal-meta">
          <strong>${this.name}</strong> — by ${this.artist}
          ${this.framed ? " · <em>Framed</em>" : " · <em>Not framed</em>"}
        </figcaption>
      </figure>
    `;
  }
}

// --- Data: at least 5 paintings ---------------------------
const paintings = [
  new Painting({
    id: 1,
    name: "The Bee",
    artist: "RichardsDrawings",
    image: "images/bee.jpg",
    framed: true
  }),
  new Painting({
    id: 2,
    name: "Dream love kitten",
    artist: "CDD20",
    image: "images/dream-kitten.png",
    framed: false
  }),
  new Painting({
    id: 3,
    name: "Flowers and Butterflies",
    artist: "Tanyanka",
    image: "images/yellow-flowers.jpg",
    framed: false
  }),
  new Painting({
    id: 4,
    name: "Forest Animals",
    artist: "Artdream",
    image: "images/forest-animals.jpg",
    framed: false
  }),
  new Painting({
    id: 5,
    name: "Sunflowers in a Vase",
    artist: "Studio Mimi",
    image: "images/sunflowers-vase.jpg",
    framed: true
  })
];

// --- Render cards to the DOM ------------------------------
const gallery = document.getElementById("gallery");
gallery.innerHTML = paintings.map(p => p.getSection()).join("");

// --- Modal logic using a single reusable W3CSS modal ------
const modal = document.getElementById("paintingModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeButtons = modal.querySelectorAll(".modal-close");

function openModalFor(painting) {
  modalTitle.textContent = painting.name;
  modalBody.innerHTML = painting.getModalInnerHTML();
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// open by clicking a card (or pressing Enter/Space)
gallery.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const id = Number(card.dataset.id);
  const painting = paintings.find(p => p.id === id);
  if (painting) openModalFor(painting);
});

gallery.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) {
    e.preventDefault();
    const id = Number(e.target.dataset.id);
    const painting = paintings.find(p => p.id === id);
    if (painting) openModalFor(painting);
  }
});

// close handlers
closeButtons.forEach(btn => btn.addEventListener("click", closeModal));
// click outside content closes
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
// Esc to close
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") closeModal();
});
