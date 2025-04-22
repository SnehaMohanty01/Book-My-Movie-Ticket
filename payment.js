// Automatically insert a slash after the month in expiry date input
const expiryInput = document.getElementById('expiry');

expiryInput.addEventListener('input', function (e) {
    // Get the current value of the input
    const value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters

    // If the value is 2 characters long, add a slash
    if (value.length >= 2) {
        e.target.value = value.slice(0, 2) + '/' + value.slice(2, 4);
    } else {
        e.target.value = value; // Otherwise, just show the digits
    }
});

// Handle form submission
document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission for demo purposes

    // Collect payment information
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Validate form fields (simple validation)
    if (cardNumber === '' || cardName === '' || expiry === '' || cvv === '') {
        alert('Please fill all fields marked with *');
        return;
    }

    // Validate expiry date
	const [month, year] = expiry.split('/').map(Number);
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();  // Get the full current year
	const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1

	// Check if the expiry year is less than the current year
	// Or if the expiry year is the current year but the expiry month is less than the current month
	if (year < currentYear || (year === currentYear && month <= currentMonth)) {
	    alert('Expiry date must be in the future.');
	    return;
	}


    // Log payment info (for demonstration purposes)
    console.log('Payment submitted:');
    console.log(`Card Number: ${cardNumber}`);
    console.log(`Card Name: ${cardName}`);
    console.log(`Expiry Date: ${expiry}`);
    console.log(`CVV: ${cvv}`);

    // Display a confirmation message
    alert('Payment submitted successfully!');

    // Redirect to home page after payment
    window.location.href = 'welcome.html'; // Change 'index.html' to the actual home page filename if different
});
