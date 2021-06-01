const menuBtn = document.querySelector(".menu-btn");
const menuBackground = document.querySelector("#all-body");
const menu = document.querySelector("#sidebar")

// menuBtn.addEventListener("click", () => {
//   if(!menuOpen) {
//     menuBackground.classList.add("menu-opened")
//     menuBackground.classList.remove("menu-closed")
//     menu.classList.add("sidebar-opened")
//     menu.classList.remove("sidebar-closed")
//     menuOpen = true;
//   }else {
//     menuBackground.classList.remove("menu-opened")
//     menuBackground.classList.add("menu-closed")
//     menu.classList.remove("sidebar-opened")
//     menu.classList.add("sidebar-closed")
//     menuOpen = false;
//   }
// });

// menuBackground.addEventListener("click", () => {
//   if(!menuOpen) { 
//   }else {
//     menuBackground.classList.remove("menu-opened")
//     menuBackground.classList.add("menu-closed")
//     menu.classList.remove("sidebar-opened")
//     menu.classList.add("sidebar-closed")
//     menuOpen = false;
//   }
// });

menuBtn.addEventListener("click", () => {
  menuBackground.classList.add("menu-opened")
  menu.classList.add("sidebar-opened")
});

menuBackground.addEventListener("click", (event) => {
  if(event.target.classList.contains("menu-opened"))
  menuBackground.classList.remove("menu-opened")
  menuBackground.classList.add("menu-closed")
  menu.classList.remove("sidebar-opened")
  menu.classList.add("sidebar-closed")
});