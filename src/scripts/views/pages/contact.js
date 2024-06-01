const Contact = {
  async render() {
    return `
    <!--==================== CONTACT ====================-->
    <section class="contact section">
       <h2 class="section__title">
          Mari Berbicara <br>
          Tentang Wisata Di Indonesia
       </h2>

       <div class="contact__page container grid">
          <form action="" class="contact__form grid" id="contact-form">
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
       </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Contact;
