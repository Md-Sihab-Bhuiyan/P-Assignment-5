document.addEventListener('DOMContentLoaded', function () {
    const donateButtons = document.querySelectorAll('.btn-donate');

    const totalAvailableDisplay = document.getElementById('total-donation');
    let totalAvailable = 1000000; 
    totalAvailableDisplay.textContent = totalAvailable + " BDT";

    donateButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            const section = this.closest('section');

            const donationInput = section.querySelector('.donation-amount');
            const addedMoneyDisplay = section.querySelector('.added-money');

            let donationValue = parseFloat(donationInput.value);
            if (isNaN(donationValue) || donationValue <= 0) {
                alert("Please enter a valid donation amount!");
                return;
            }
            let addedAmount = parseFloat(addedMoneyDisplay.textContent) || 0;

            if (donationValue > totalAvailable) {
                alert("You do not have enough balance to donate this amount!");
                return;
            }

            if ((addedAmount + donationValue) > 1000000) {
                alert("The total donations cannot exceed 1 million BDT!");
                return;
            }

            addedAmount += donationValue;
            addedMoneyDisplay.textContent = addedAmount + " BDT";

            totalAvailable -= donationValue;
            totalAvailableDisplay.textContent = totalAvailable + " BDT";

            donationInput.value = "";
        });
    });
});
