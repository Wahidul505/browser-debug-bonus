const images = [
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg",
  "images/pic-5.jpg",
  "images/pic-6.jpg",
  "images/pic-7.jpg",
  "images/pic-8.jpg",
  "images/pic-9.jpg"
]
const imgId = document.getElementById('slider-img');
let index = 0;
setInterval(() => {
  if (index >= images.length) {
    index = 0;
  }
  const imgUrl = images[index];
  imgId.setAttribute('src', imgUrl);
  index++;
}, 1500)