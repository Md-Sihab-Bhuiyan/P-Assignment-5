 document.addEventListener('DOMContentLoaded', function () {
            const donationButton = document.getElementById('donation-button');
            const historyButton = document.getElementById('history-button');
            const donationSection = document.getElementById('donation-section');
            const historySection = document.getElementById('donation-history');

            donationButton.classList.add('active');

            donationButton.addEventListener('click', function () {
                donationButton.classList.add('active');
                historyButton.classList.remove('active');
                donationSection.classList.remove('hidden');
                historySection.classList.add('hidden');
            });

            historyButton.addEventListener('click', function () {
                historyButton.classList.add('active');
                donationButton.classList.remove('active');
                historySection.classList.remove('hidden');
                donationSection.classList.add('hidden');
            });
        });