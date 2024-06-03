import UrlParser from "../../routes/url-parser";
import WisataDbSource from "../../data/wisatadb-source";
import {WisataDetailTemplate} from "../templates/template-creator";

const Detail = {
  async render() {
    return `
<div class="detailwisata"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const wisata = await WisataDbSource.detailWisata(url.id);
    const wisataContainer = document.querySelector('.detailwisata');
    wisataContainer.innerHTML = WisataDetailTemplate(wisata);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
