const menu = document.querySelector("mobile_menu");
const navlinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menu.classList.toggle("active");
});
