//  Nav Bar Code

document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });




// Slider functionality
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        const newTranslateX = -index * 100;
        document.querySelector(".slides").style.transform = `translateX(${newTranslateX}vw)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(index);
        });
    });

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000);
});



// 

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    function handleScroll() {
        const scrollTop = window.scrollY;
        const scrollPercentage = (scrollTop / documentHeight) * 100;

        if (scrollTop > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }

        backToTopButton.style.background = `conic-gradient(#f39c12 ${scrollPercentage}%, transparent ${scrollPercentage}%)`;
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    backToTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
});
