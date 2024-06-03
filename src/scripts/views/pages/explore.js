import WisataDbSource from "../../data/wisatadb-source";
import {WisataItemTemplate} from "../templates/template-creator";

const Explore = {
  async render() {
    return `
    <!--==================== EXPLORE ====================-->
    <section class="explore section">
       <h2 class="section__title">
          Jelajahi <br>
          Wisata Indonesia
       </h2>

       <div class="explore__container explore__page container grid"></div>
    </section>
      `;
  },

  async afterRender() {
   const wisatas = await WisataDbSource.daftarWisata();
   const wisatasContainer = document.querySelector('.explore__container');
   wisatas.forEach((wisata) => {
     wisatasContainer.innerHTML += WisataItemTemplate(wisata);
   });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Explore;
