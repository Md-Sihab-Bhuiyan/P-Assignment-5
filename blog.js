
document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-answer');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const answer = this.parentElement.nextElementSibling;
            const icon = this.querySelector('.icon');

            answer.classList.toggle('hidden');
            if (icon.classList.contains('fa-angle-up')) {
                icon.classList.remove('fa-angle-up');
                icon.classList.add('fa-angle-down');
            } else {
                icon.classList.remove('fa-angle-down');
                icon.classList.add('fa-angle-up');
            }
        });
    });
});



// For single blog
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementById('toggle-answer');
//     const answer = document.getElementById('answer');
//     const icon = document.getElementById('icon');

//     toggleButton.addEventListener('click', function() {

//         answer.classList.toggle('hidden');
//         if (icon.classList.contains('fa-angle-up')) {
//             icon.classList.remove('fa-angle-up');
//             icon.classList.add('fa-angle-down');
//         } else {
//             icon.classList.remove('fa-angle-down');
//             icon.classList.add('fa-angle-up');
//         }
//     });
// });


