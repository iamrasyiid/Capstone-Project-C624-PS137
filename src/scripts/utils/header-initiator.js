function initHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("blur-header");
    header.classList.add("bg-header");
  }else{
    header.classList.remove("blur-header");
    header.classList.remove("bg-header");
  }
}

export default initHeader;
