const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the "active" class for the navLinks and hamburger
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});



//   slide
const slides = document.getElementById('slides');
const slideImages = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slideImages.length - 1; // Loop to last slide
    } else if (index >= slideImages.length) {
        currentIndex = 0; // Loop to first slide
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

setInterval(() => {
    showSlide(currentIndex + 1);
}, 4000);

//  JavaScript to handle form submission and redirect
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Optionally, you can perform form validation or AJAX requests here
        
        // Redirect to the homepage after form submission
        window.location.href = '#'; // Change '/' to the path of your homepage if needed
    });