window.addEventListener('load', function () {
  scrollRotate();
  parallaxTranslate();
})

window.onscroll = function() {
  scrollRotate();
  parallaxTranslate();
};

var scrollEventHandler = function()
{
  if(window.pageXOffset > 0) {
    window.scroll(0, window.pageYOffset);
  }
}

var resizeEventHandler = function()
{
  parallaxTranslate();
}

window.addEventListener("scroll", scrollEventHandler, false);
window.addEventListener("resize", resizeEventHandler, true);
