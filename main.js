import "./styles/style.scss";

// MOBILE NAV

const toggle = document.querySelector("#toggle");
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");

function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

toggle.addEventListener("click", toggleMenu);

document.onclick = function (e) {
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
};
