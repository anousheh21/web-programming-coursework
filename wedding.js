let slideIndex = 1;
let slideInterval;

// Call the showSlides function with initial slideIndex
showSlides(slideIndex);

// Start the automatic sliding
startAutoSlide();

// Function to start automatic sliding
function startAutoSlide() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 50000000); // Change slide every 5 seconds (5000 milliseconds)
}

// Function to stop automatic sliding
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Function to handle manual sliding
function plusSlides(n) {
    stopAutoSlide(); // Stop automatic sliding when user manually changes slide
    showSlides(slideIndex += n);
}

// Function to handle dot navigation
function currentSlide(n) {
    stopAutoSlide(); // Stop automatic sliding when user clicks on dot
    showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Restart automatic sliding after manual interaction (after 5 seconds)
    startAutoSlide();
}

$(function() {
    // Additional jQuery code can go here if needed
});


