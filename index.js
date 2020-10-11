var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
 
  //   var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 
  slides[slideIndex - 1].style.display = "flex";
}

//* nav-menu
var menuIcon = document.querySelectorAll(".nav-menu-icon");
var navMenu = document.querySelectorAll(".nav-menu");
var navMenuCloseIcon = document.querySelectorAll(".nav-menu__close-icon");
var backDrop = document.querySelector(".backdrop");
console.log(navMenu);

console.log(menuIcon);
for (var i = 0; i < menuIcon.length; i++) {
  // console.log(navMenu);
  
  menuIcon[i].addEventListener("click", () => {
    // console.log(i);
    backDrop.classList.toggle("open-sm");

    for (var x = 0; x < navMenu.length; x++) {
      navMenu[x].classList.toggle("open-sm");
    }
  });
}
for (var i = 0; i < menuIcon.length; i++) {
  navMenuCloseIcon[i].addEventListener("click", () => {
    backDrop.classList.toggle("open-sm");

    for (var x = 0; x < navMenu.length; x++) {
      navMenu[x].classList.toggle("open-sm");
    }
  });
}
