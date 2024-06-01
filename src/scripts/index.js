import "regenerator-runtime";
import "../styles/styles.css";
import "../styles/responsive.css";

console.log("Hello bang");
import App from "./views/app";

const app = new App({
  button: document.querySelector("#nav-toggle"),
  close: document.querySelector("#nav-close"),
  drawer: document.querySelector("#nav-menu"),
  content: document.querySelector(".main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

// Awal index
/*=============== POPULAR MODAL ===============*/
const modal = document.querySelectorAll(".populer__modal"),
  modalButton = document.querySelectorAll(".populer__button"),
  modalClose = document.querySelectorAll(".populer__modal-close");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    activeModal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
// akhir index

// Awal main
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
// akhir main
