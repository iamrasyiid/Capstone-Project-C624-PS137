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
                   
                   <button type="button" class="button-view mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                       View Map
                   </button>
               </div>

               <!-- Button trigger modal -->   
               
               <!-- Modal -->
               <div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div class="modal-dialog modal-dialog-centered modal-lg bg-costum">
                   <div class="modal-content">
                       <div class="modal-header bg-costum text-white">
                       <h5 class="modal-title" id="exampleModalLabel">${wisata.title}</h5>
                       </div>
                       <div class="modal-body bg-costum">
                           <iframe src="https://www.google.com/maps/embed?pb=${wisata.map}" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export { WisataItemTemplate, WisataDetailTemplate };
