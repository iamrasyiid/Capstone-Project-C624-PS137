function initUpdateTextColor() {
  const textElement = document.querySelector(".nav__logo");
  const currentUrl = window.location.href;

  const isRootDomain =
    currentUrl === window.location.origin + "/" ||
    currentUrl === window.location.origin;

  if (currentUrl.includes("#/beranda") || isRootDomain) {
    textElement.classList.add("beranda");
  } else {
    textElement.classList.remove("beranda");
  }
}

export default initUpdateTextColor;
