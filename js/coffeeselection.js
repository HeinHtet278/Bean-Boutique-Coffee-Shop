document.addEventListener('DOMContentLoaded', () => {
    // Implement search functionality
    const searchBox = document.getElementById('search');
    const coffeeCards = document.querySelectorAll('.card');

    searchBox.addEventListener('keyup', function(event) {
        const searchTerm = event.target.value.toLowerCase();

        coffeeCards.forEach((card) => {
            const coffeeName = card.querySelector('h5').textContent.toLowerCase();
            if (coffeeName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Add hover effect for navigation links
    const navLinks = document.querySelectorAll('#navigation a.hover');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'orange'; // Change color on hover
        });

        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Revert color when not hovering
        });
    });

    // Add functionality to the order buttons
    const orderButtons = document.querySelectorAll('.btn a');

    orderButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You have added ${this.parentElement.parentElement.querySelector('h5').textContent} to your cart.`);
            window.location.href = this.href; // Redirect to Shopping Cart
        });
    });
});
