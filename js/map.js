document.addEventListener('DOMContentLoaded', (event) => {
    // The location of the coffee shop
    const coffeeShopLocation = [16.821554, 96.126809]; // Replace with actual latitude and longitude
    
    // Create the map and set its view to the coffee shop location
    const map = L.map('map').setView(coffeeShopLocation, 15);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add a marker at the coffee shop location
    L.marker(coffeeShopLocation).addTo(map)
        .bindPopup('<b>Bean Boutique Coffee Shop</b><br>Our location.').openPopup();
});