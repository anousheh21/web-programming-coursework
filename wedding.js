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

function validateHomeSearch() {
    let weddingDateQuery = $("#dateInput").val();
    let locationQuery = $("#homeSearchLocation").val();
    let minPriceQuery = $("#homeSearchMinPrice").val();
    let maxPriceQuery = $("#homeSearchMaxPrice").val();
    let minPriceInt = parseInt(minPriceQuery);
    let maxPriceInt = parseInt(maxPriceQuery);
    let errorMessage = $("#homeSearchErrorMessage");


    if ((weddingDateQuery == "") || (locationQuery == "noSelection") || (minPriceQuery == "") || (maxPriceQuery == "")) {
        errorMessage.html("Please fill in all fields");
        return false;
    } else {
        if (minPriceInt > maxPriceInt) {
            errorMessage.html("Minimum price must be less than maximum price");
            return false;
        } else {
            // sessionStorage.setitem("dateWedding", )
            return true;
        }
    }
}




// $(document).ready(function() {
//     $('#textInput').focus(function() {
//         $(this).hide();
//         $('#dateInput').show().focus();
//     });

//     $('#dateInput').blur(function() {
//         if (!$(this).val()) {
//             $(this).hide();
//             $('#textInput').show();
//         }
//     });
// });
