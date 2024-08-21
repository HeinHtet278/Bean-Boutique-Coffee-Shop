// homestyles.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    initSlideshow();

    // Event listeners for buttons
    initButtonListeners();

    // Search functionality
    initSearchFunctionality();

    // Initialize Google Map
    initGoogleMap();
});

/* ------------------- Slideshow Functionality ------------------- */
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
showSlides(slideIndex);

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
}

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

/* ------------------- Button Event Listeners ------------------- */
function initButtonListeners() {
    // Order Now buttons
    const orderButtons = document.querySelectorAll('.Order');
    orderButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Thank you for your purchase! Your order has been added to the cart.');
            // Here you can add functionality to actually add the item to the shopping cart
        });
    });

    // View Detail buttons
    const viewDetailButtons = document.querySelectorAll('.View');
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const productName = this.closest('.favorite').querySelector('h3').textContent;
            alert(`More details about ${productName} will be available soon.`);
            // Redirect to the product detail page if available
            // window.location.href = 'product-detail-page.html';
        });
    });
}

/* ------------------- Search Functionality ------------------- */
function initSearchFunctionality() {
    const searchInput = document.getElementById('search');
    const favorites = document.querySelectorAll('.favorite');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        favorites.forEach(favorite => {
            const productName = favorite.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(filter)) {
                favorite.style.display = '';
            } else {
                favorite.style.display = 'none';
            }
        });
    });
}

