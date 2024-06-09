// function toggleNav() {
//   const overlay = document.getElementById("nav-overlay");
//   overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
// }

// function toggleSubMenu(event, submenuId) {
//     event.preventDefault();
//   const submenu = document.getElementById(submenuId);
//   submenu.style.display = submenu.style.display === "block" ? "none" : "block";
// }
function toggleNav() {
  const overlay = document.getElementById("nav-overlay");
  overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
}

function toggleSubMenu(event, submenuId) {
  event.stopPropagation();
  const submenu = document.getElementById(submenuId);
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
