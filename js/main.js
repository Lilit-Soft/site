//slide//
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function slideTo(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-button");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-button-active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " slide-button-active";
}


(function () {
      //fancybox//
      $(document).ready(function() {
          $(".fancybox-button").fancybox({
            prevEffect    : 'none',
            nextEffect    : 'none',
           
            helpers   : {
              title : { type : 'inside' },
              buttons : {}
            }
          });
      });
})();

