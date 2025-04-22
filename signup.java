<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Sign Up</title>
</head>
<body>
    <div class="container">
        <h1>Sign Up</h1>
        <form action=signupaction.jsp method=post>
            <label for="new-username">Username:</label>
            <input type="text" id="new-username" name=un required>

            <label for="new-password">Password:</label>
            <input type="password" id="new-password" name=pw required>
<label for="new-email">Email:</label>
            <input type="email" id="new-email" name=em required>

            <button type="submit">Sign Up</button>
        </form>
    </div>

    <script>
        document.getElementById('signup-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Simulate sign up by storing login state
            localStorage.setItem('isLoggedIn', 'true');

            // Redirect to the movie selection page
            window.location.href = 'index.html';
        });
    </script>
</body>
</html>
