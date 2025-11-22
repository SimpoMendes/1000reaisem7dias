const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function voceclicounobotao(){
    form.style.left="50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility= ("visible")
}

function clicoumascara(){
    form.style.left="-300px"
    mascara.style.visibility= ("hidden")
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});