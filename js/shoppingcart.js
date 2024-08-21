// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get all quantity input fields
    const quantityInputs = document.querySelectorAll("input[type='number']");
    
    // Calculate total function
    function calculateTotal() {
        let total = 0;
        quantityInputs.forEach(input => {
            // Get the price of the item
            const price = parseFloat(input.closest('.cart-item').querySelector('p').textContent.replace('£', ''));
            // Calculate total price for this item
            const quantity = parseInt(input.value);
            total += price * quantity;
        });
        
        // Update the total in the cart summary
        document.querySelector('.cart-summary p').textContent = `Total: £${total.toFixed(2)}`;
    }

    // Add event listener to each quantity input field to recalculate total when quantity changes
    quantityInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    // Initial calculation to set the total at page load
    calculateTotal();
});
