import { FormTemplate } from "../templates/template-creator";
import ContactHandler from "../../utils/contact-handler";

const Contact = {
  async render() {
    return `
    <!--==================== CONTACT ====================-->
    <section class="contact section">
       <h2 class="section__title">
          Mari Berbicara <br>
          Tentang Wisata Di Indonesia
       </h2>

       <div class="contact__page container grid"></div>
    </section>
      `;
  },

  async afterRender() {
    const containerForm = document.querySelector(".contact__page");
    containerForm.innerHTML += FormTemplate();

    ContactHandler();
  },
};

export default Contact;
