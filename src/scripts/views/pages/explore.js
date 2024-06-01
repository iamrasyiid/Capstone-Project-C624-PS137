const Explore = {
  async render() {
    return `
    <!--==================== EXPLORE ====================-->
    <section class="explore section">
       <h2 class="section__title">
          Jelajahi <br>
          Wisata Indonesia
       </h2>

       <div class="explore__container explore__page container grid">
          <article class="explore__card">
             <a href="#/detail" class="explore__link">
                <img src="./images/mandalika.jpg" alt="" class="explore__img">
                <i class="ri-arrow-right-circle-line explore__icon"></i>
             </a>

             <h2 class="explore__title">Mandalika</h2>
             <span class="explore__subtitle">Kab. Lombok Tengah</span>
          </article>

          <article class="explore__card">
             <a href="#/detail" class="explore__link">
                <img src="./images/mandalika.jpg" alt="" class="explore__img">
                <i class="ri-arrow-right-circle-line explore__icon"></i>
             </a>

             <h2 class="explore__title">Pantai Kuta</h2>
             <span class="explore__subtitle">Kabupaten Badung</span>
          </article>

          <article class="explore__card">
             <a href="#/detail" class="explore__link">
                <img src="./images/mandalika.jpg" alt="" class="explore__img">
                <i class="ri-arrow-right-circle-line explore__icon"></i>
             </a>

             <h2 class="explore__title">Pantai Senggigi</h2>
             <span class="explore__subtitle">Kabupaten Lombok Barat</span>
          </article>

          <article class="explore__card">
             <a href="#/detail" class="explore__link">
                <img src="./images/mandalika.jpg" alt="" class="explore__img">
                <i class="ri-arrow-right-circle-line explore__icon"></i>
             </a>

             <h2 class="explore__title">Danau Toba</h2>
             <span class="explore__subtitle">Kabupaten Samosir</span>
          </article>

          <article class="explore__card">
             <a href="#/detail" class="explore__link">
                <img src="./images/mandalika.jpg" alt="" class="explore__img">
                <i class="ri-arrow-right-circle-line explore__icon"></i>
             </a>

             <h2 class="explore__title">Raja Ampat </h2>
             <span class="explore__subtitle">Kabupaten Raja Ampat</span>
          </article>

          <article class="explore__card">
             <a href="#/detail" class="explore__link">
                <img src="./images/mandalika.jpg" alt="" class="explore__img">
                <i class="ri-arrow-right-circle-line explore__icon"></i>
             </a>

             <h2 class="explore__title">Tana Toraja</h2>
             <span class="explore__subtitle">Toraja Utara</span>
          </article>
       </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Explore;
