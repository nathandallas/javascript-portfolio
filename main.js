import "./style.scss";

const toggle = document.querySelector("#toggle")


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

toggle.addEventListener("click", toggleMenu);
