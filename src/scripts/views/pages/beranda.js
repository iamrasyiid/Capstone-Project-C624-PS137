const Beranda = {
  async render() {
    return `
    <!--==================== HOME ====================-->
    <section class="home section">
       <div class="home__rectangle"></div>

       <div class="home__container container grid">
          <div class="home__perfil perfil">
             <div class="perfil__content">
                <img src="./images/profile.png" alt="image" class="perfil__img">
             </div>
          </div>

          <div class="home__content grid">
             <div class="home__data grid">
                <h1 class="home__name">B.B.L</h1>

                <h2 class="home__profession">Bumi Budaya Lestari</h2>

                <p class="about__description">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. <b>Halaman Web</b> Rerum doloremque quia velit doloribus? Inventore, quo dolorum! Fugiat facere dolores quas illo ex tempora labore. Rem ducimus esse culpa qui praesentium! 
                </p>

                <div class="home__social">
                   <a href="https://github.com/iamrasyiid" target="_blank" class="home__social-link">
                      <i class="ri-github-fill"></i>
                   </a>

                   <a href="https://www.linkedin.com/in/abd-rasyid-30a64a221/" target="_blank" class="home__social-link">
                      <i class="ri-linkedin-box-fill"></i>
                   </a>

                   <a href="https://dribbble.com/iamrasyiid" target="_blank" class="home__social-link">
                      <i class="ri-dribbble-line"></i>
                   </a>
                </div>
             </div>

             <a href="#/explore" class="home__button button">Explore Wisata</a>
          </div>
       </div>
    </section>

    <!--==================== POPULER ====================-->
    <section class="populer section">
       <h2 class="section__title">
          Wisata yang <br>
          Sedang Trending
       </h2>

       <div class="populer__container container grid">
          <article class="populer__card">
             <img src="./images/rajaampat.jpg" alt="" class="explore__img">
             <div class="populer__modal">
                <div>
                    <span class="populer__subtitle">Kab. Raja Ampat</span>
                    <h3 class="populer__title">Raja Ampat</h3>
                    <a href="#/detail" class="populer__button button button__small">
                        <i class="ri-link"></i>
                    </a>
                </div>
            </div>
          </article>

          <article class="populer__card">
             <img src="./images/rajaampat.jpg" alt="" class="explore__img">
             <div class="populer__modal">
                <div>
                    <span class="populer__subtitle">Kab. Raja Ampat</span>
                    <h3 class="populer__title">Raja Ampat</h3>
                    <a href="#/detail" class="populer__button button button__small">
                        <i class="ri-link"></i>
                    </a>
                </div>
            </div>
          </article>

          <article class="populer__card">
             <img src="./images/rajaampat.jpg" alt="" class="explore__img">
             <div class="populer__modal">
                <div>
                    <span class="populer__subtitle">Kab. Raja Ampat</span>
                    <h3 class="populer__title">Raja Ampat</h3>
                    <a href="#/detail" class="populer__button button button__small">
                        <i class="ri-link"></i>
                    </a>
                </div>
            </div>
          </article>
       </div>
    </section>
    
    <!--==================== EXPLORE ====================-->
    <section class="explore section">
       <h2 class="section__title">
          Highlights <br>
          Wisata
       </h2>

       <div class="explore__container container grid">
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

    <!--==================== CONTACT ====================-->
    <section class="contact section">
       <div class="contact__container container grid">
          <h2 class="section__title">
             Mari Jelajahi <br>
             Wisata Favorit Anda.
          </h2>

          <a href="#/explore" class="home__button button">Explore Wisata</a>
       </section>
       </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Beranda;
