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




document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector("nav ul");
        
        hamburger.addEventListener("click", function() {
                navMenu.classList.toggle("active");
                hamburger.classList.toggle("active");
        });
});