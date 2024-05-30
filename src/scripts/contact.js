/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_d9sheya','template_4qqi9mt','#contact-form','gA2JjfyawuTsyw7Ds')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, ()=> {
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)