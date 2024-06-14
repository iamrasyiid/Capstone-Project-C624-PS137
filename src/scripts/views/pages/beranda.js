import WisataDbSource from "../../data/wisatadb-source";
import {
  HeroTemplate,
  WisataItemTemplate,
  TrendingItemTemplate,
} from "../templates/template-creator";

const Beranda = {
  async render() {
    return `
    <!--==================== HOME ====================-->
    <section class="home section"></section>

    <!--==================== POPULER ====================-->
    <section class="populer section">
       <h2 class="section__title">
          Wisata yang <br>
          Sedang Trending
       </h2>

       <div class="populer__container container grid"></div>
    </section>
    
    <!--==================== EXPLORE ====================-->
    <section class="explore section">
       <h2 class="section__title">
          Highlights <br>
          Wisata
       </h2>

       <div class="explore__container container grid"></div>
    </section>

    <!--==================== CONTACT ====================-->
    <section class="contact section">
       <div class="contact__container container grid">
          <h2 class="section__title">
             Mari Jelajahi <br>
             Wisata Favorit Anda.
          </h2>

          <a href="#/explore" class="home__button button">Explore Wisata</a>
       </div>
    </section>
      `;
  },

  async afterRender() {
    const heroContainer = document.querySelector(".home");
    heroContainer.innerHTML += HeroTemplate();

    const trendings = await WisataDbSource.trendingWisata();
    const trendingsContainer = document.querySelector(".populer__container");

    const wisatas = await WisataDbSource.berandaWisata();
    const wisatasContainer = document.querySelector(".explore__container");
    
    wisatas.forEach((wisata) => {
      wisatasContainer.innerHTML += WisataItemTemplate(wisata);
    });

    trendings.forEach((trending) => {
      trendingsContainer.innerHTML += TrendingItemTemplate(trending);
    });
  },
};

export default Beranda;
