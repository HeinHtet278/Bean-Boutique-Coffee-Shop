// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get all offer headings
    const offerHeadings = document.querySelectorAll("#special-offers h3");

    // Function to toggle visibility of the offer details
    function toggleOfferDetails() {
        // Find the next sibling element (the <p> tag) and toggle its visibility
        const details = this.nextElementSibling;
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    }

    // Add click event listener to each offer heading
    offerHeadings.forEach(heading => {
        heading.addEventListener("click", toggleOfferDetails);
    });

    // Initially hide all offer details
    offerHeadings.forEach(heading => {
        heading.nextElementSibling.style.display = "none";
    });
});
