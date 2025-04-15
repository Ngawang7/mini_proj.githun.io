// Sample data for rental properties
const rentalProperties = [
    {
        id: 101,
        title: "Downtown Luxury Apartment",
        price: 2500,
        address: "123 Urban St, City Center",
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1100,
        description: "Modern apartment with great amenities",
        image: "images/rental1.jpg"
    },
    // Add more rental properties
];

// DOM Elements
const propertiesContainer = document.getElementById('properties-container');
// ... rest of your original script.js code

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProperties(rentalProperties);
    
    // Hide mortgage calculator on rental page
    document.querySelector('.mortgage-calculator').style.display = 'none';
});