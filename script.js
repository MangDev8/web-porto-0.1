console.log('Hello World!');

document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll("nav ul li a");
        links.forEach(link => {
                link.addEventListener("click", function(e) {
                        e.preventDefault();
                        document.querySelector(this.getAttribute("href")).scrollIntoView({
                                behavior: "smooth"
                        });
                });
        });
});