/* ========== menu ========== */
const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/* == menu open == */
btnMenu.addEventListener("click", () => {
  navbarMenu.classList.add("menu-open");
});
/* == menu close == */
btnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("menu-open");
});

/* == remove menu onclick == */
const navbarItem = document.querySelectorAll(".navbar__item");

const linkAction = () => {
  const navbarMenu = document.getElementById("navbar-menu");
  navbarMenu.classList.remove("menu-open");
};
navbarItem.forEach((n) => n.addEventListener("click", linkAction));

/* ========== sticky header ========== */
const stickyHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", stickyHeader);

/* ========== swiper js ========== */
var swiper = new Swiper(".proyek__content", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
