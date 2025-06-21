const images = ["digital-image.jpg", "e:\ connect-min.jpg\ Volunteer-min.jpg", "CLF_9793-min.jpg"]; 
let currentIndex = 0;

const imageElement = document.getElementById("carousel-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateImage() {
  imageElement.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});