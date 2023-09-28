import "./styles/style.scss";

// MOBILE NAV

const toggle = document.querySelector("#toggle");
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
let anchors = document.getElementsByTagName("a");

function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", toggleMenu);
}
toggle.addEventListener("click", toggleMenu);

// Close Nav Bar if anywhere is clicked
document.onclick = function (e) {
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
};
