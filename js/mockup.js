function parallaxTranslate() {
  let mockup1 = document.getElementById("mockup1");
  mockup1.style.transform = "translate(1000px, 1000px)";
}

let speed = 1.0;

function mockupTranslation1() {
  return 7.5 + speed * window.pageYOffset / 20.0;
}
