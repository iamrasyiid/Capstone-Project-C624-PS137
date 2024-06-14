function initScrollUp() {
  const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    window.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  };
  window.addEventListener("scroll", scrollUp);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  document.getElementById("scroll-up").addEventListener("click", scrollToTop);
}

export default initScrollUp;
