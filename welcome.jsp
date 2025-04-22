<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <link rel="stylesheet" href="styles.css">
    <title>Movie Ticket Booking</title>

</head>
<body>
 <div class="container">
        <h1>Book My Movie Ticket</h1>
        <h2>Welcome <%=request.getParameter("un") %></h2>
        
        <!-- Navigation Links for Login and Sign Up -->
        <div class="auth-links">
            <a href="login.html">Login</a>
            <a href="signup.html">Sign Up</a>
        </div>

        <label for="movie-select">Choose a movie:</label>
        <select id="movie-select" disabled>
            <option value="" disabled selected>Select a Movie</option>
            <!-- Options will be populated by JavaScript -->
        </select>

        <div class="movie-details">
            <h2 id="selected-movie">Selected Movie: None</h2>
            <h3 id="ticket-price">Ticket Price: ₹0</h3>
        </div>

        <div class="screen">Screen</div>

        <div class="seats-container">
            <!-- Seats will be populated by JavaScript -->
        </div>

        <div class="cost-display">
            <h2 id="total-cost">Total Cost: ₹0</h2>
            <button id="book-button" style="display: none;">Book Now</button>
        </div>
    </div>

    <script src="script.js"></script>

</body>
</html>
