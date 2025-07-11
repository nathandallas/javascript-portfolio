// MOBILE NAV
const toggle = document.querySelector("#toggle");
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
// Only select anchors within the mobile menu
const menuAnchors = document.querySelectorAll(".menu-links a");

function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add click event to menu anchors
menuAnchors.forEach(anchor => {
  anchor.addEventListener("click", toggleMenu);
});

// Add click event to toggle button
toggle.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent event from bubbling up
  toggleMenu();
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});
