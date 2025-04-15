// Sample property data (in a real app, you might fetch this from an API)
const properties = [
    {
        id: 1,
        title: "Modern Apartment",
        price: 350000,
        address: "Thimphu",
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        yearBuilt: 2018,
        description: "This stunning modern apartment in the heart of downtown offers luxury living with high-end finishes, open floor plan, and amazing city views. The building features a rooftop terrace, fitness center, and 24/7 concierge service.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5RqX8JI1Dbpw8DrRP_RqACNvbIr4wme9AO0_bepXWq5l9e943W4cgHpvGIYmRQp19Wg_LEGmfQU4BuiRSDwdGoT_DemFYc3LAPkEPUn6FWD3sEK7N7Xjn0LIeHFEbNoooLMKg7AvS_kU/s1600/IMG_1742.JPG",
        features: ["Central AC", "Parking", "Laundry", "Balcony"]
    },
    {
        id: 2,
        title: "Classic Bhutanese House",
        price: 475000,
        address: "Paro",
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2400,
        yearBuilt: 2012,
        description: "Perfect for growing families, this spacious home features a large backyard, open kitchen, and finished basement. Located in a quiet neighborhood with excellent schools and parks nearby.",
        image: "https://www.hlimg.com/images/things2do/738X538/ttd_1515153220m3.jpg",
        features: ["Garage", "Backyard", "Fireplace", "Hardwood Floors"]
    },
    {
        id: 3,
        title: "Luxury Villa",
        price: 1200000,
        address: "Gelephu",
        type: "villa",
        bedrooms: 5,
        bathrooms: 4.5,
        sqft: 3800,
        yearBuilt: 2020,
        description: "Experience luxury living in this stunning villa with private beach access, infinity pool, and smart home technology. The property includes a chef's kitchen, home theater, and boat dock.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/232146864.jpg?k=b31a2b824d3758749ba9b502f65423898ae8e55d0399493caf29cf9c76aa8417&o=&hp=1",
        features: ["Pool", "Waterfront", "Smart Home", "Dock"]
    },
    {
        id: 4,
        title: "Penthouse",
        price: 275000,
        address: "Thimphu",
        type: "condo",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 850,
        yearBuilt: 2015,
        description: "Perfect for urban professionals, this cozy condo offers low-maintenance living in a vibrant neighborhood. The building features a shared rooftop garden and is close to restaurants, shops, and public transit.",
        image: "https://traveltobhutan.travel/wp-content/uploads/2021/09/six-senses.jpg",
        features: ["Walk-in Closet", "Gym Access", "Pet Friendly", "Secure Entry"]
    },
    {
        id: 5,
        title: "Lux House",
        price: 650000,
        address: "Phuentsholing",
        type: "house",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 2200,
        yearBuilt: 1925,
        description: "Charm meets modern convenience in this beautifully restored historic townhouse. Original hardwood floors, crown molding, and a chef's kitchen blend seamlessly with updated systems and smart home features.",
        image: "https://images.mrandmrssmith.com/images/1482x988/4774366-bhutan-spirit-sanctuary-hotel-paro-bhutan.jpg",
        features: ["Historic", "Renovated", "Patio", "Walkable Location"]
    },
    {
        id: 6,
        title: "Town Heart",
        price: 890000,
        address: "Paro",
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3100,
        yearBuilt: 2017,
        description: "Escape to this stunning mountain retreat with panoramic views, spacious decks, and a hot tub. The property features a gourmet kitchen, home office, and is minutes from hiking trails and ski resorts.",
        image: "https://etimg.etb2bimg.com/photo/111568852.cms",
        features: ["Town Views", "Hot Tub", "Fireplace", "Garage"]
    }
];

// DOM Elements
const propertiesContainer = document.getElementById('properties-container');
const typeFilter = document.getElementById('type');
const priceFilter = document.getElementById('price');
const bedroomsFilter = document.getElementById('bedrooms');
const applyFiltersBtn = document.getElementById('apply-filters');
const resetFiltersBtn = document.getElementById('reset-filters');
const modal = document.getElementById('property-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const calculateBtn = document.getElementById('calculate');
const homePriceInput = document.getElementById('home-price');
const downPaymentInput = document.getElementById('down-payment');
const loanTermInput = document.getElementById('loan-term');
const interestRateInput = document.getElementById('interest-rate');
const monthlyPaymentEl = document.getElementById('monthly-payment');
const loanAmountEl = document.getElementById('loan-amount');
const totalInterestEl = document.getElementById('total-interest');
const totalPaymentEl = document.getElementById('total-payment');

// Display properties on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProperties(properties);
});

// Display properties function
function displayProperties(propertiesToDisplay) {
    propertiesContainer.innerHTML = '';
    
    if (propertiesToDisplay.length === 0) {
        propertiesContainer.innerHTML = '<p class="no-results">No properties match your search criteria.</p>';
        return;
    }
    
    propertiesToDisplay.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
            </div>
            <div class="property-details">
                <h4>${property.title}</h4>
                <div class="property-price">Nu.${property.price.toLocaleString()}</div>
                <p class="property-address">${property.address}</p>
                <div class="property-features">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sqft</span>
                </div>
                <button class="view-details" data-id="${property.id}">View Details</button>
            </div>
        `;
        propertiesContainer.appendChild(propertyCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const propertyId = parseInt(e.target.getAttribute('data-id'));
            showPropertyDetails(propertyId);
        });
    });
}

// Filter properties function
function filterProperties() {
    const typeValue = typeFilter.value;
    const priceValue = priceFilter.value;
    const bedroomsValue = bedroomsFilter.value;
    
    let filtered = [...properties];
    
    if (typeValue !== 'all') {
        filtered = filtered.filter(property => property.type === typeValue);
    }
    
    if (priceValue !== 'all') {
        filtered = filtered.filter(property => property.price <= parseInt(priceValue));
    }
    
    if (bedroomsValue !== 'all') {
        filtered = filtered.filter(property => property.bedrooms >= parseInt(bedroomsValue));
    }
    
    displayProperties(filtered);
}

// Show property details in modal
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    
    if (!property) return;
    
    modalBody.innerHTML = `
        <div class="modal-property-image">
            <img src="${property.image}" alt="${property.title}">
        </div>
        <div class="modal-property-details">
            <h3>${property.title}</h3>
            <div class="modal-property-price">$${property.price.toLocaleString()}</div>
            <p class="modal-property-address"><i class="fas fa-map-marker-alt"></i> ${property.address}</p>
            <p class="modal-property-description">${property.description}</p>
            
            <div class="modal-property-features">
                <div class="feature-item">
                    <i class="fas fa-home"></i>
                    <span>Type: ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-bed"></i>
                    <span>Bedrooms: ${property.bedrooms}</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-bath"></i>
                    <span>Bathrooms: ${property.bathrooms}</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-ruler-combined"></i>
                    <span>Area: ${property.sqft} sqft</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Year Built: ${property.yearBuilt}</span>
                </div>
            </div>
            
            <h4>Features</h4>
            <ul class="property-features-list">
                ${property.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            
            <button class="contact-agent"><i class="fas fa-phone"></i> Contact Agent</button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add event listener to contact agent button
    document.querySelector('.contact-agent').addEventListener('click', () => {
        alert('An agent will contact you shortly about this property.');
    });
}

// Mortgage calculator function
function calculateMortgage() {
    const homePrice = parseFloat(homePriceInput.value) || 0;
    const downPayment = parseFloat(downPaymentInput.value) || 0;
    const loanTerm = parseInt(loanTermInput.value) || 30;
    const interestRate = parseFloat(interestRateInput.value) || 0;
    
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const payments = loanTerm * 12;
    
    // Calculate monthly payment
    const x = Math.pow(1 + monthlyRate, payments);
    const monthlyPayment = (loanAmount * x * monthlyRate) / (x - 1);
    
    // Calculate totals
    const totalPayment = monthlyPayment * payments;
    const totalInterest = totalPayment - loanAmount;
    
    // Update DOM
    monthlyPaymentEl.textContent = `Nu.${monthlyPayment.toFixed(2)}`;
    loanAmountEl.textContent = `Nu.${loanAmount.toLocaleString()}`;
    totalInterestEl.textContent = `Nu.${totalInterest.toLocaleString()}`;
    totalPaymentEl.textContent = `Nu.${totalPayment.toLocaleString()}`;
}

// Event Listeners
applyFiltersBtn.addEventListener('click', filterProperties);
resetFiltersBtn.addEventListener('click', () => {
    typeFilter.value = 'all';
    priceFilter.value = 'all';
    bedroomsFilter.value = 'all';
    displayProperties(properties);
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

calculateBtn.addEventListener('click', calculateMortgage);

// Initialize calculator with default values
homePriceInput.value = 300000;
downPaymentInput.value = 60000;
interestRateInput.value = 5.5;
calculateMortgage();