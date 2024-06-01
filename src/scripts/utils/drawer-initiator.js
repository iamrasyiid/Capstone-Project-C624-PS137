const DrawerInitiator = {
  init({ button, close, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    close.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("show-menu");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("show-menu");
  },
};

export default DrawerInitiator;
