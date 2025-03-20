// Modern.js - JS for the modern template
$(document).ready(function() {
    // Menu toggle functionality for mobile
    $('.menu-toggle').click(function() {
        $('.main-nav').toggleClass('active');
        $('.menu-toggle i').toggleClass('fa-bars fa-times');
    });

    // Close menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.main-nav, .menu-toggle').length) {
            $('.main-nav').removeClass('active');
            $('.menu-toggle').removeClass('active');
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Scroll header effect
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.fixed-header').addClass('scrolled');
        } else {
            $('.fixed-header').removeClass('scrolled');
        }
    });

    // Animation on scroll (optional)
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.publication-item, .news-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    };

    // Initial check on page load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 