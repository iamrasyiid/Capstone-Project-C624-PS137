const Detail = {
  async render() {
    return `
    <!--==================== DETAIL WISATA ====================-->
    <div class="hero-img-container">
       <img src="./images/danau toba.jpeg" class="img-fluidd" alt="Hero image">
    </div>
    <div class="hero-footer border-bottom"></div>

    <div class="container-fluid bg-content py-5">
       <div class="container">
           <div class="row">
               <div class="col-md-8">
                   <h1 class="display-4 fw-bold">Destination Title</h1><hr class="fw-bold">
               </div>
           </div>

           <div class="row gap-2">
               <div class="col-md-8">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic delectus architecto blanditiis sed fugiat dolorum tempora! Sit adipisci incidunt deserunt repellat magni iste consequuntur rerum aliquid quibusdam saepe itaque, aspernatur temporibus, ipsum reprehenderit mollitia, voluptate error tempora inventore? Possimus corporis tempora sequi nobis fugit, voluptas molestiae temporibus quod est odit rerum distinctio cum nemo tempore? Laboriosam sed explicabo hic repellendus dolore velit, animi sunt illo tempore eos reprehenderit corrupti deserunt odit? Praesentium nemo adipisci facere esse non amet sapiente sunt eius pariatur maiores nostrum, ratione sit commodi nobis ipsa dicta cum optio, suscipit aperiam perspiciatis inventore quidem omnis at. Omnis, voluptatum. Cupiditate eaque voluptatem dolore molestiae nostrum sequi sed saepe, animi quas beatae! Ipsam eaque error, reiciendis assumenda odit sed voluptates eligendi inventore tempora minus similique vel repudiandae doloremque tenetur consectetur laudantium, pariatur fugit esse magnam voluptatem eius iure quae blanditiis amet? Magnam incidunt vel fugit sit accusamus architecto!</p>

                   <div class="img-container my-4">
                       <h4 class="fw-bold">ImageTitle</h4>
                       <img src="./images/danau toba.jpeg" alt="">
                   </div>

                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam id laudantium eius temporibus, illum eveniet, perspiciatis at aliquam, quisquam suscipit quaerat quam cum! Adipisci consequatur nobis veritatis magnam, fuga debitis. Quaerat adipisci omnis cumque! Quia repellendus illum corporis tempore fugit quas cupiditate ullam exercitationem! Omnis iusto temporibus amet aliquid. Doloremque libero ducimus at suscipit possimus voluptates enim distinctio consectetur, provident quibusdam. Natus eaque rem neque quas, optio saepe quidem est necessitatibus unde, id aliquid esse iusto at totam, obcaecati itaque cupiditate! Aliquam itaque dicta quaerat atque esse, repudiandae voluptatem voluptatibus, autem quisquam libero dolor quos ex, provident commodi a in?</p>

                   <div class="video-container my-4">
                       <iframe
                       src="https://www.youtube.com/embed/F-d4b1SMAY4?si=wuBAp5FM4tcCmti0"
                       frameborder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowfullscreen
                     ></iframe>
                   </div>

                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto obcaecati perferendis modi impedit porro excepturi voluptate ullam animi fugit nisi temporibus, dolore nemo deserunt hic, maxime tempore neque ea voluptatum. Necessitatibus dolorem possimus soluta repudiandae nulla, voluptas asperiores tempore sequi id eius sed dolores reprehenderit voluptatem. Quae dolorem optio enim pariatur non delectus assumenda architecto reiciendis quisquam, labore odit illo qui, quibusdam id sint!</p>

               </div>
               <div class= "col-md-3 map-container">
                   <div class="map">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252568.21790801955!2d116.35628307949453!3d-8.4625331672915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc2d800216cccf%3A0x3c03cdbf11d30a1e!2sGn.%20Rinjani!5e0!3m2!1sid!2sid!4v1717048774381!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       
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
                           <h5 class="modal-title" id="exampleModalLabel">Map Title</h5>
                           </div>
                           <div class="modal-body bg-costum">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252568.21790801955!2d116.35628307949453!3d-8.4625331672915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc2d800216cccf%3A0x3c03cdbf11d30a1e!2sGn.%20Rinjani!5e0!3m2!1sid!2sid!4v1717048774381!5m2!1sid!2sid" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           </div>
                           <div class="modal-footer bg-costum">
                           <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                           </div>
                       </div>
                       </div>
                   </div>
               </div>
           </div>

           <div class="row">
               <div class="col-md-8">
                   <h4 class="fw-bold mb-5 other">Other Destination</h4>

                   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="./images/danau toba.jpeg" class="d-block w-100" alt="...">
                          <div class="carousel-caption d-none d-md-block">
                            <h5 class="mb-5">First slide label</h5>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="./images/danau toba.jpeg" class="d-block w-100" alt="...">
                          <div class="carousel-caption d-none d-md-block">
                            <h5 class="mb-5">Second slide label</h5>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="./images/danau toba.jpeg" class="d-block w-100" alt="...">
                          <div class="carousel-caption d-none d-md-block">
                            <h5 class="mb-5">Third slide label</h5>
                          </div>
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
               </div>
           </div>
       </div>
   </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
