function parallaxTranslate() {
  let mockup1 = document.getElementById("mockup1");
  let mockup2 = document.getElementById("mockup2");
  mockup1.style.transform = "translate(" + mockupTranslation1X() + "px, " + mockupTranslation1Y() + "px)";
  mockup2.style.transform = "translate(0px, " + mockupTranslation2() + "px)";
}

let transSpeed = -1.0;

function mockupTranslation1X() {
  return window.innerWidth * 0.4 - 550;
}

function mockupTranslation1Y() {
  return transSpeed * window.pageYOffset / 20.0;
}

function mockupTranslation2() {
  return 2.0 * transSpeed * window.pageYOffset / 20.0;
}
