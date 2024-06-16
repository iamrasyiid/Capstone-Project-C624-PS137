function initUpdateTextColor() {
  const textElement = document.querySelector(".nav__logo");
  const currentUrl = window.location.href;

  if (currentUrl.includes("#/explore") || currentUrl.includes("#/contact")) {
    textElement.classList.remove("beranda");
  } else {
    textElement.classList.add("beranda");
  }
}

export default initUpdateTextColor;
