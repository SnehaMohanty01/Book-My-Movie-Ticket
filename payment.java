<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Payment Page</title>
</head>
<body>
    <div class="payment-container">
        <h1>Secure Payment</h1>
        <form id="" action=payaction.jsp>
            <label for="card-number">Card Number: <span class="required">*</span></label>
            <input type="tel" name=cn id="card-number" required placeholder="1234 5678 9012 3456" pattern="[0-9]*" inputmode="numeric" maxlength="16">
            
            <label for="card-name">Name on Card: <span class="required">*</span></label>
            <input type="text" name=name id="card-name" required placeholder="John Doe">
            
            <label for="expiry">Expiry Date (MM/YY): <span class="required">*</span></label>
            <input type="text" name=Ed id="expiry" required placeholder="MM/YY" pattern="^(0[1-9]|1[0-2])\/\d{2}$" maxlength="5" title="Please enter a valid date in MM/YY format.">
            
            <label for="cvv">CVV: <span class="required">*</span></label>
            <input type="text" name=CV id="cvv" required placeholder="123" pattern="[0-9]*" inputmode="numeric" maxlength="3">
            
            <button type="submit">Pay Now</button>
        </form>
    </div>
    <script src="payment.js"></script>
</body>
</html>
