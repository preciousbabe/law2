document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.querySelector("nav");
    const logo = document.querySelector(".logo");
    const logo2 = document.querySelector(".logo2");
    const contactBtn = document.querySelector(".mobile-contact .btn"); // Select the Contact Us button

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        menuBtn.innerHTML = navLinks.classList.contains("show")
            ? '<i class="ri-close-line"></i>'  // Change to 'X' icon when opened
            : '<i class="ri-menu-line"></i>';    // Show menu icon when closed
    });

    // Close the menu when a link or the contact button is clicked
    document.querySelectorAll(".nav__links a").forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            menuBtn.innerHTML = '<i class="ri-menu-line"></i>'; // Reset icon
        });
    });

    contactBtn.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.innerHTML = '<i class="ri-menu-line"></i>'; // Reset icon
    });

    // Change navbar color and logo visibility on scroll
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add("scrolled");
            logo.style.display = "none";  // Hide the first logo
            logo2.style.display = "block"; // Show the second logo
        } else {
            navbar.classList.remove("scrolled");
            logo.style.display = "block";  // Show the first logo
            logo2.style.display = "none";   // Hide the second logo
        }
    });
});





const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero-write-up h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".section-title", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".hero-write-up p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".testimonial-item", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".hero-img", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".about-image", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about-text", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".post-image", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".related-post-item", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".post-content", {
  ...scrollRevealOption,
  delay: 300,
});




 // Initialize Swiper.js
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,      // 3 slides per view on desktop
    slidesPerGroup: 3,     // Move 3 slides on next/prev button click
    spaceBetween: 30,       // Space between slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true,      // Allow clicking to navigate
    },
    navigation: {
      nextEl: '.swiper-button-next',  // Next button selector
      prevEl: '.swiper-button-prev',  // Prev button selector
    },
    breakpoints: {
      768: {
        slidesPerView: 3,  // 3 slides per view on desktop
        slidesPerGroup: 3, // Move 3 slides at a time
      },
      480: {
        slidesPerView: 1,  // 1 slide per view on mobile
        slidesPerGroup: 1, // Move 1 slide at a time
      },
      // Ensure that 1 slide is shown on smaller devices
      320: {
        slidesPerView: 1,  // 1 slide per view for small devices
        slidesPerGroup: 1, // Move 1 slide at a time
      },
    },
  });
  
  
  
  



  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const whatsappUrl = 'https://wa.me/+2349037711141?text=';

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
      
      // Get user inputs
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Create a message to send to WhatsApp
      const textMessage = `Hello, I am ${name}. My email is ${email}. I would like to get legal assistance. Message: ${message}`;

      // Encode the message to fit the URL format
      const encodedMessage = encodeURIComponent(textMessage);

      // Create the WhatsApp link
      const whatsappLink = whatsappUrl + encodedMessage;

      // Redirect the user to WhatsApp
      window.open(whatsappLink, '_blank');
    });
  });





