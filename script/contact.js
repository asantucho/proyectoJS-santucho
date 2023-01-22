const contactForm = document.querySelector(".form-contact")

contactForm.onsubmit = (event) =>{
    event.preventDefault()
    Swal.fire({
        title: "Sent!",
        text: "Our team will read your message and start working on it ASAP",
        icon: "success",
        button: "Done",
    });
    contactForm.reset()
}