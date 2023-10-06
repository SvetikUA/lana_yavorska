const menuBtn = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navList.classList.toggle("active");
  header.classList.toggle("open");

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("active");
      header.classList.remove("open");
    });
  });
}

// Slider
$('.slider').slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerPadding: '0',
  arrows: false,
  responsive: [
    
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        infinite: false,
        centerPadding: '30px',
      }
    }
  ]
});