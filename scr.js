var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide
//  var slideIndex = 0;
//  showSlides();
//  function showSlides() {
//      var i;
//      var slides = document.getElementsByClassName("mySlides");
//      for (i = 0; i < slides.length; i++) {
//          slides[i].style.display = "none";
//      }
//      slideIndex++;
//      if (slideIndex > slides.length) { slideIndex = 1 }
//      slides[slideIndex - 1].style.display = "block";
//      setTimeout(showSlides, 2000);
// }

// window.addEventListener("scroll", function() {
//     var navbar = document.getElementById("navbar");
//     if (window.scrollY > 0) {
//       navbar.style.background = "linear-gradient(rgba(0, 0, 0, 1) 0%,rgba(22, 26, 29 ,0) 100%)";
//       navbar.style.margin = "0";
//       navbar.style.padding = "5px 30px";
//       navbar.style.paddingRight = "50px"
//     } else {
//       navbar.style.backgroundColor = "transparent";
//     }
//   });

navbar.style.background = "linear-gradient(rgba(0, 0, 0, 1) 0%,rgba(22, 26, 29 ,0) 100%)"
navbar.style.margin = "0";
navbar.style.padding = "5px 30px";
navbar.style.paddingRight = "80px"

  window.addEventListener("scroll", function() {
    var backToTopButton = document.getElementById("backToTopButton");
    if (window.scrollY > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  