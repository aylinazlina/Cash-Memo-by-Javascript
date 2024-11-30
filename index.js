function calculateTotal() {
    // Get user inputs
    const price = parseFloat(document.getElementById("price").value);
    const vatPercent = parseFloat(document.getElementById("vat").value);
    const discountPercent = parseFloat(document.getElementById("discount").value);

    // Validate inputs
    if (isNaN(price) || isNaN(vatPercent) || isNaN(discountPercent) || price <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate VAT and Discount
    const vatAmount = (vatPercent / 100) * price;
    const discountAmount = (discountPercent / 100) * price;

    // Final price after discount
    const priceAfterDiscount = price - discountAmount;

    // Total amount to be paid after adding VAT
    const totalAmount = priceAfterDiscount + vatAmount;

    // Display the Cash Memo
    const memo = `
        <strong>Price:</strong> ${price.toFixed(2)}Tk<br>
        <strong>VAT (${vatPercent}%):</strong> ${vatAmount.toFixed(2)}Tk<br>
        <strong>Discount (${discountPercent}%):</strong> ${discountAmount.toFixed(2)}Tk<br>
        <strong>Price After Discount:</strong> ${priceAfterDiscount.toFixed(2)}Tk<br>
        <strong>Total Amount to Pay:</strong> ${totalAmount.toFixed(2)}Tk
    `;
    document.getElementById("memoDetails").innerHTML = memo;
}
