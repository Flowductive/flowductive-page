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
  card3.style.transform = "translate(-50%, 0%) rotate3d(-1, 1, 0, " + cardRotation3() + "deg) rotate(-15deg)";
}

let speed = 4.0;

function cardRotation1() {
  return 7.5 + speed * window.pageYOffset / 20.0;
}

function cardRotation2() {
  return 7.5 + speed * window.pageYOffset / 15.0;
}

function cardRotation3() {
  return 7.5 + speed * window.pageYOffset / 60.0;
}
