const menuIcons = document.querySelector(".menu_icons");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.querySelector(".close_menu");
const openMenu = document.querySelector(".open_menu");
const hamburguer = document.getElementById("hamburguer");

menuIcons.addEventListener("click", () => {
  menuIcons.classList.toggle("menu_closed");
  navMenu.classList.toggle("active");
  hamburguer.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuIcons.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuIcons.classList.toggle("menu_opened");
    menuIcons.classList.toggle("menu_closed");
  })
);

const scrollInicial = 0;
const navHeader = document.getElementById("nav-header");

document.addEventListener(
  "scroll",
  debounce(() => {
    if (document.documentElement.scrollTop !== scrollInicial) {
      navHeader.style.backgroundColor = "rgba(1, 20, 32, 1)";
    } else {
      navHeader.style.backgroundColor = "rgba(1, 20, 32, 0.5)";
    }
  }, 250)
);
