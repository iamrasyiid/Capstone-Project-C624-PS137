function searchExploreHandler(wisatas, wisatasContainer, WisataItemTemplate) {
  const searchInput = document.getElementById("explore__search-input");
  const searchButton = document.getElementById("explore__search-button");
  const notFoundMessage = document.querySelector(".explore__not-found-message");

  let filteredWisatas = wisatas;

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    filteredWisatas = wisatas.filter((wisata) =>
      wisata.title.toLowerCase().includes(searchTerm)
    );

    wisatasContainer.innerHTML = "";

    if (filteredWisatas.length === 0) {
      notFoundMessage.textContent = "Tidak ada wisata yang ditemukan";
      notFoundMessage.hidden = false;
    } else {
      notFoundMessage.textContent = "";
      notFoundMessage.hidden = true;

      filteredWisatas.forEach((wisata) => {
        wisatasContainer.innerHTML += WisataItemTemplate(wisata);
      });
    }
  });
}

export default searchExploreHandler;