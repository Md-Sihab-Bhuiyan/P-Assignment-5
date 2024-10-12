


document.addEventListener('DOMContentLoaded', function() {
    const donationInput = document.getElementById('donation-amount');
    const donateButton = document.getElementById('btn-donate');
    const addedMoneyDisplay = document.getElementById('added-money');
    const totalAvailableDisplay = document.getElementById('total-donation');

    const maxDonationLimit = 1000000;

    // Initialize the values in the UI (for demo purposes, setting 0 as starting point)
    addedMoneyDisplay.textContent = "0 BDT";
    totalAvailableDisplay.textContent = "1000000 BDT"; 

    donateButton.addEventListener('click', function() {
        const donationValue = parseFloat(donationInput.value);

        const currentAmount = parseFloat(totalAvailableDisplay.textContent); 
        const addedAmount = parseFloat(addedMoneyDisplay.textContent); 

        if (isNaN(donationValue) || donationValue <= 0) {
            alert("Please enter a valid donation amount!");
            return;
        }

        if (donationValue > currentAmount) {
            alert("You do not have enough balance to donate this amount!");
            return;
        }

        if ((addedAmount + donationValue) > maxDonationLimit) {
            alert("The total donations cannot exceed 1 million BDT!");
            return;
        }

        addedMoneyDisplay.textContent = (addedAmount + donationValue) + " BDT";

        totalAvailableDisplay.textContent = (currentAmount - donationValue) + " BDT";

        donationInput.value = "";
    });
});
