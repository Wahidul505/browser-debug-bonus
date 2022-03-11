const imgId = document.getElementById('slider-img');
let x = 1;
setInterval(() => {
  if (x > 9) {
    x = 1;
  }
  const imgUrl = `images/pic-${x}.jpg`;
  imgId.setAttribute('src', imgUrl);
  x++;
}, 1500)