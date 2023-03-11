function changeImage() {
  var image = document.getElementById("myimage");
  if (image.src.match("white.jpg")) {
    image.src = "yellow.jpg";
  } else {
    image.src = "white.jpg";
  }
}
