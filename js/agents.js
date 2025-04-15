// Sample agent data
const agents = [
    {
        id: 1,
        name: "Dorji Wangdi",
        position: "Senior Real Estate Agent",
        experience: "10+ years",
        specialties: ["Luxury Homes", "Waterfront Properties"],
        phone: "+975-17852645",
        email: "dphuntsho@gmail.com",
        image: "https://thumbs.dreamstime.com/b/bhutanese-buddhist-worshiper-smiling-tshechu-festival-punakha-bhutanese-worshiper-tshechu-festival-342766282.jpg"
    },
    {
        id: 2,
        name: "Tshering Choki",
        position: "Commercial Real Estate Specialist",
        experience: "8 years",
        specialties: ["Office Spaces", "Retail Properties"],
        phone: "+975-77565233",
        email: "Choki@gmail.com",
        image: "https://media.istockphoto.com/id/545793388/photo/bhutanese-woman-paro-kingdom-of-bhutan.jpg?s=612x612&w=0&k=20&c=CeYe58InF1xa5F36jVar3Qwb5pv8-Nk0IHciWJqYG5s="
    },
    {
        id: 2,
        name: "sonam choki",
        position: "Commercial Real Estate manager",
        experience: "13 years",
        specialties: ["Office Spaces", "Retail Properties"],
        phone: "+975-17788756",
        email: "sonam@gmail.com",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5aXPdnrmVX_FXVqKviG1jI5xOW401jiLyXz4Asazyw1NZBDqDSXLjUC5tsonY52KGwY&usqp=CAU"
    },
    // Add more agents
];

// DOM Elements
const agentsContainer = document.getElementById('agents-container');

// Display agents
function displayAgents() {
    agentsContainer.innerHTML = '';
    
    agents.forEach(agent => {
        const agentCard = document.createElement('div');
        agentCard.className = 'agent-card';
        agentCard.innerHTML = `
            <div class="agent-image">
                <img src="${agent.image}" alt="${agent.name}">
            </div>
            <div class="agent-details">
                <h4>${agent.name}</h4>
                <div class="agent-position">${agent.position}</div>
                <p>Experience: ${agent.experience}</p>
                <p>Specialties: ${agent.specialties.join(', ')}</p>
                <div class="agent-contact">
                    <a href="tel:${agent.phone}"><i class="fas fa-phone"></i></a>
                    <a href="mailto:${agent.email}"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        `;
        agentsContainer.appendChild(agentCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayAgents);