import WisataDbSource from "../../data/wisatadb-source";
import {
  WisataItemTemplate,
  SearchExplore,
} from "../templates/template-creator";
import searchExploreHandler from "../../utils/search-explore";

const Explore = {
  async render() {
    return `
      <section class="explore section">
        <h2 class="section__title">
          Jelajahi <br>
          Wisata Indonesia
        </h2>

        <div class="container mb-5 search-explore"></div>
        
        <div class="explore__container explore__page container grid"></div>
      </section>
      `;
  },

  async afterRender() {
    const wisatas = await WisataDbSource.daftarWisata();
    const wisatasContainer = document.querySelector(".explore__container");

    const searchExplore = document.querySelector(".search-explore");
    searchExplore.innerHTML += SearchExplore();

    searchExploreHandler(wisatas, wisatasContainer, WisataItemTemplate);

    wisatasContainer.innerHTML = "";
    wisatas.forEach((wisata) => {
      wisatasContainer.innerHTML += WisataItemTemplate(wisata);
    });
  },
};

export default Explore;
