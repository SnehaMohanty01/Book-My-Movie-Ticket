// Sample movie data with titles and prices
const movies = [
    { title: "Venom: The Last Dance", price: 700 },
    { title: "The Wild Robot", price: 600 },
    { title: "Smile 2", price: 600 },
    { title: "Alien: Romulus", price: 500 },
    { title: "Tim Burton’s The Nightmare Before Christmas", price: 400 },
];

// Sample locations
const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

// Elements
const movieSelect = document.getElementById("movie-select");
const seatsContainer = document.querySelector(".seats-container");
const totalCostElement = document.getElementById("total-cost");
const selectedMovieElement = document.getElementById("selected-movie");
const ticketPriceElement = document.getElementById("ticket-price");
const bookButton = document.getElementById("book-button");
const locationSelect = document.getElementById("location-select"); // New location dropdown

// State variables
let selectedSeats = [];
let ticketPrice = 0;

// Function to check if the user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Initialize location and movie selection if user is logged in
function initializeMovieSelection() {
    if (isUserLoggedIn()) {
        // Enable location and movie selection
        locationSelect.disabled = false;
        movieSelect.disabled = false;

        // Populate movie selection dropdown
        movies.forEach((movie, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = movie.title;
            movieSelect.appendChild(option);
        });

        // Populate location dropdown
        locations.forEach((location) => {
            const option = document.createElement("option");
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        });
    } else {
        alert("You must be logged in to select a movie.");
        window.location.href = 'login.html'; // Redirect to login page if not logged in
    }
}

// Function to update the total cost display
function updateTotalCost() {
    const total = selectedSeats.length * ticketPrice;
    totalCostElement.textContent = `Total Cost: ₹${total}`;
    bookButton.style.display = selectedSeats.length > 0 ? "block" : "none";
}

// Function to clear selected seats
function clearSeatSelection() {
    selectedSeats = [];
    const seats = document.querySelectorAll(".seat");
    seats.forEach((seat) => {
        seat.classList.remove("selected");
    });
    updateTotalCost();
}

// Event listener for movie selection change
movieSelect.addEventListener("change", function () {
    const selectedMovieIndex = this.value;
    ticketPrice = movies[selectedMovieIndex].price;

    selectedMovieElement.textContent = `Selected Movie: ${movies[selectedMovieIndex].title}`;
    ticketPriceElement.textContent = `Ticket Price: ₹${ticketPrice}`;

    clearSeatSelection();
    updateTotalCost();
});

// Event listener for seat selection
seatsContainer.addEventListener("click", function (event) {
    const targetSeat = event.target;
    if (targetSeat.classList.contains("seat") && !targetSeat.classList.contains("occupied")) {
        const seatIndex = Array.from(seatsContainer.children).indexOf(targetSeat.parentElement);
        const actualSeatIndex = seatIndex * 10 + Array.from(targetSeat.parentElement.children).indexOf(targetSeat);

        if (selectedSeats.includes(actualSeatIndex)) {
            selectedSeats.splice(selectedSeats.indexOf(actualSeatIndex), 1);
            targetSeat.classList.remove("selected");
        } else {
            selectedSeats.push(actualSeatIndex);
            targetSeat.classList.add("selected");
        }
        updateTotalCost();
    }
});

// Initialize seat layout function
function createSeats() {
    const rows = 5;
    const seatsPerRow = 10;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < seatsPerRow; j++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");
            if (Math.random() < 0.3) { // Randomly mark some seats as occupied
                seat.classList.add("occupied");
            }
            row.appendChild(seat);
        }
        seatsContainer.appendChild(row);
    }
}

// Function to handle booking
function handleBooking() {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
        alert("You must be logged in to book tickets.");
        window.location.href = 'login.html'; // Redirect to login page if not logged in
        return;
    }

    // Check if location is selected
    if (!locationSelect.value) {
        alert("Please select a location.");
        return;
    }

    // Check if at least one seat is selected
    if (selectedSeats.length > 0) {
        const selectedMovie = movies[movieSelect.value].title;
        const numberOfSeats = selectedSeats.length;
        const totalCost = selectedSeats.length * ticketPrice;

		// Assuming the payment process is completed successfully.
		function handlePaymentSuccess() {
		    // Redirect to confirmation page after payment success
		    window.location.href = "confirmation.html";
		}

		// Simulating payment success (e.g., after an API call or payment gateway response)
		setTimeout(handlePaymentSuccess, 2000); // Redirect after 2 seconds (simulating a successful payment response)

        alert("Booking successful! Redirecting to payment page.");
        window.location.href = 'payment.html'; // Redirect to payment page
    } else {
        alert("Please select at least one seat to book.");
    }
}

// Add event listener for booking
bookButton.addEventListener("click", handleBooking);

// Call function to create seats on page load
createSeats();
initializeMovieSelection(); // Initialize movie selection based on login status
