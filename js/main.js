window.addEventListener('load', function () {
  scrollRotate();
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

window.addEventListener("scroll", scrollEventHandler, false);
