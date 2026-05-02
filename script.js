const button = document.getElementById("free-quote-btn");

button.addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView( { behavior: "smooth" } );
})


const contactForm =  document.getElementById("contact-form");
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
        });