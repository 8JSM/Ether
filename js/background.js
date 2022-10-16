const images = ["0.jpg",];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
bgImage.src = `img/0.jpg`;

document.body.appendChild(bgImage);

