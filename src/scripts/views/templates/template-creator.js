const HeroTemplate = () => `
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
`;

const WisataDetailTemplate = (wisata) => `

<!--==================== DETAIL WISATA ====================-->
<div class="hero-img-container">
   <img src="${wisata.hero_img}" class="img-fluidd" alt="Hero image">
</div>
<div class="hero-footer border-bottom"></div>

<div class="container-fluid bg-content py-5">
   <div class="container">
       <div class="row">
           <div class="col-md-8">
               <h1 class="display-4 fw-bold">${wisata.title}</h1><hr class="fw-bold">
           </div>
       </div>

       <div class="row gap-2">
           <div class="col-md-8">
               <p>${wisata.desc_title}</p>

               <div class="img-container my-4">
                   <h4 class="fw-bold text-white">${wisata.img_title}</h4>
                   <img src="${wisata.img_content}" alt="">
               </div>

               <p>${wisata.desc_img}</p>

               <div class="video-container my-4">
                   <iframe
                   src="https://www.youtube.com/embed/${wisata.video}"
                   frameborder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowfullscreen
                 ></iframe>
               </div>

               <p>${wisata.desc_video}</p>

           </div>
           <div class= "col-md-3 map-container">
               <div class="map">
                   <iframe src="https://www.google.com/maps/embed?pb=${wisata.map}}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>

               <!-- Button trigger modal -->   
               <button type="button" class="button-view mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    View Map
               </button>
               
               <!-- Modal -->
               <div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div class="modal-dialog modal-dialog-centered modal-lg">
                   <div class="modal-content">
                       <div class="modal-header bg-costum text-white">
                       <h5 class="modal-title" id="exampleModalLabel">${wisata.title}</h5>
                       </div>
                       <div class="modal-body bg-costum">
                           <iframe src="https://www.google.com/maps/embed?pb=${wisata.map}" class="frame-map"width="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       </div>
                       <div class="modal-footer bg-costum">
                       <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                       </div>
                   </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
`;

const WisataItemTemplate = (wisata) => `
<article class="explore__card">
    <a href="#/detail/${wisata.id}" class="explore__link">
    <img src="${wisata.hero_img}" alt="" class="explore__img">
    <i class="ri-arrow-right-circle-line explore__icon"></i>
    </a>

    <h2 class="explore__title">${wisata.title}</h2>
    <span class="explore__subtitle">${wisata.provinsi}</span>
</article>
`;

const TrendingItemTemplate = (wisata) => `
<article class="populer__card">
    <img src="${wisata.hero_img}" alt="" class="explore__img">
    <div class="populer__modal">
        <div>
            <span class="populer__subtitle">${wisata.provinsi}</span>
            <h3 class="populer__title">${wisata.title}</h3>
            <a href="#/detail/${wisata.id}" class="populer__button button button__small">
                <i class="ri-link"></i>
            </a>
        </div>
    </div>
</article>
`;

const FormTemplate = () => `
    <form action="https://formspree.io/f/myyrrnve" method="POST" class="contact__form grid" id="contact-form">
        <div class="contact__group grid">
        <div class="contact__box">
            <input type="text" name="user_name" id="name" required placeholder="Tulis nama anda" class="contact__input">
            <label for="name" class="contact__label">Nama Lengkap</label>
        </div>

        <div class="contact__box">
            <input type="email" name="user_email" id="email" required placeholder="Tulis email anda" class="contact__input">
            <label for="email" class="contact__label">Alamat Email</label>
        </div>
        </div>

        <div class="contact__box contact__area">
        <textarea name="user_message" id="message" required placeholder="Tulis pesan anda" class="contact__input"></textarea>
        <label for="message" class="contact__label">Pesan</label>
        </div>

        <p class="contact__message" id="contact-message"></p>

        <button type="submit" class="contact__send button">Kirim Pesan</button>
    </form>
`;

export { HeroTemplate, WisataItemTemplate, WisataDetailTemplate, TrendingItemTemplate, FormTemplate };
