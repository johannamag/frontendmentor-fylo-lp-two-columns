const toggle = document.querySelector(".mobile-nav");
const open = document.querySelector(".fa-plus");
const close = document.querySelector(".fa-minus");
const navItems = document.querySelector(".nav-items");

toggle.addEventListener("click", (e) => {
  e.preventDefault();

  open.classList.toggle("open");
  close.classList.toggle("open");
  navItems.classList.toggle("open");
});
