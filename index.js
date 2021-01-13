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

const heroEmail = document.querySelector(".hero-email");
const heroForm = document.querySelector(".hero-form");

heroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailValue = heroEmail.value;
  if (isValid(emailValue)) {
    heroForm.classList.remove("error");
  } else {
    heroForm.classList.add("error");
  }
});

function isValid(heroEmail) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(heroEmail).toLowerCase());
}
