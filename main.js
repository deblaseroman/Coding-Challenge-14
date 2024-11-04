const loadingElement = document.getElementById('loading');
const errorContainer = document.getElementById('error-container');
const ticketsContainer = document.getElementById('tickets-container');

// Function to show error message
const showError = (message) => {
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
};

// Function to hide error message
const hideError = () => {
    errorContainer.style.display = 'none';
};

// Function to show loading indicator
const showLoading = () => {
    loadingElement.style.display = 'block';
};

// Function to hide loading indicator
const hideLoading = () => {
    loadingElement.style.display = 'none';
};

// Fetch tickets from API
const fetchTickets = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const tickets = await response.json();
        
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available.');
        }
        
        return tickets;
    } catch (error) {
        throw new Error(`Failed to fetch tickets: ${error.message}`);
    }
};