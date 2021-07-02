window.addEventListener('load', function () {
  scrollRotate();
})

window.onscroll = function() {
  scrollRotate();
};

function scrollRotate() {
  let card1 = document.getElementById("card1");
  card1.style.transform = "translate(-50%,-50%) rotate3d(1, 1, 0, " + cardRotation1() + "deg) rotate(10deg)";
}

function cardRotation1() {
  return 7.5 + 10* window.pageYOffset / 20.0;
}
