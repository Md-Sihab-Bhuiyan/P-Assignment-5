
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

            if (donationValue > totalAvailable) {
                alert("You do not have enough balance to donate this amount!");
                return;
            }

            let addedAmount = parseFloat(addedMoneyDisplay.textContent) || 0;
            addedAmount += donationValue;
            addedMoneyDisplay.textContent = addedAmount + " BDT";
            totalAvailable -= donationValue;
            totalAvailableDisplay.textContent = totalAvailable + " BDT";

            const currentDateTime = new Date();
            const formattedDate = currentDateTime.toLocaleString('en-GB', {
                timeZone: 'Asia/Dhaka',
                timeZoneName: 'short',
            });

            const location = section.querySelector('h1').textContent;

            updateHistory(donationValue, location, formattedDate);

            donationInput.value = "";
        });
    });
});

// Function to append donation history
function updateHistory(amount, location, date) {
    const historyContainer = document.getElementById('history-container');
    const historyEntry = document.createElement('div');
    historyEntry.classList.add('mb-4', 'p-4', 'border', 'border-gray-300', 'rounded');
    historyEntry.innerHTML = `
        <p class="font-bold">${amount} Taka is Donated for ${location}</p>
        <p>Date: ${date}</p>
    `;
    historyContainer.appendChild(historyEntry);
}
