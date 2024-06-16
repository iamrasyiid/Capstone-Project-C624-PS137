import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "regenerator-runtime";
import "../styles/styles.css";
import "../styles/responsive.css";

import App from "./views/app";
import initHeader from "./utils/header-initiator";
import toggleTheme from "./utils/toggle-theme";
import initScrollUp from "./utils/scroll-up";
import initUpdateTextColor from "./utils/update-text-color";

const app = new App({
  button: document.querySelector("#nav-toggle"),
  close: document.querySelector("#nav-close"),
  drawer: document.querySelector("#nav-menu"),
  content: document.querySelector(".main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
  initUpdateTextColor();
});

window.addEventListener("load", () => {
  app.renderPage();
  initHeader();
  toggleTheme();
  initUpdateTextColor();
  initScrollUp();
});

window.addEventListener("scroll", () => {
  initHeader();
});