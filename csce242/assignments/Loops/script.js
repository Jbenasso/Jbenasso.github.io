document.getElementById("drawBtn").addEventListener("click", () => {
  const scene = document.getElementById("scene");
  scene.innerHTML = ""; // clear scene first

  // Check time
  const hour = new Date().getHours();
  const isNight = hour >= 18 || hour < 6;
  scene.style.backgroundColor = isNight ? "black" : "lightblue";

  // Add sun or moon
  const celestial = document.createElement("div");
  celestial.className = isNight ? "moon" : "sun";
  scene.appendChild(celestial);

  // Clouds (6 of them)
  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.style.top = "80px";
    cloud.style.left = `${80 + i * 120}px`;
    for (let j = 0; j < 3; j++) {
      const puff = document.createElement("span");
      cloud.appendChild(puff);
    }
    scene.appendChild(cloud);
  }

  // Trees (6 of them)
  for (let i = 0; i < 6; i++) {
    const tree = document.createElement("div");
    tree.className = "tree";
    tree.style.left = `${80 + i * 120}px`;

    const leaves = document.createElement("div");
    leaves.className = "leaves";
    const trunk = document.createElement("div");
    trunk.className = "trunk";

    tree.appendChild(leaves);
    tree.appendChild(trunk);
    scene.appendChild(tree);
  }
});
