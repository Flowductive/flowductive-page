window.addEventListener('load', function () {
  scrollRotate();
})

window.onscroll = function() {
  scrollRotate();
};

function scrollRotate() {
  let card1 = document.getElementById("card1");
  card1.style.transform = "translate(-50%,-50%) rotate3d(1, 1, 0, " + cardRotation1() + "deg) rotate(10deg)";
  card2.style.transform = "translate(-50%, 0%) rotate3d(-1, 1, 0, " + cardRotation2() + "deg) rotate(-10deg)";
}

let speed = 7.5;

function cardRotation1() {
  return speed + 10 * window.pageYOffset / 20.0;
}

function cardRotation2() {
  return speed + 10 * window.pageYOffset / 15.0;
}
