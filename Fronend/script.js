document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");

    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("show-menu");
    });

    const closeButton = document.querySelector(".nav__close");
    closeButton.addEventListener("click", function() {
        menu.classList.remove("show-menu");
    });
});


// function toggleTab(index) {
//     const modalId = `services-modal-${index}`;
//     const modal = document.getElementById(modalId);

//     // Toggle active class on modal
//     if (modal.classList.contains('active__modal')) {
//         modal.classList.remove('active__modal');
//     } else {
//         // Deactivate all modals
//         const allModals = document.querySelectorAll('.services__modal');
//         allModals.forEach(modal => {
//             modal.classList.remove('active__modal');
//         });

//         // Activate the clicked modal
//         modal.classList.add('active__modal');
//     }
// }

function toggleTab(index) {
    var modal = document.getElementById('modal' + index);
    if (modal.classList.contains('active__modal')) {
        modal.classList.remove('active__modal');
    } else {
        // Deactivate all modals
        var allModals = document.querySelectorAll('.services__modal');
        allModals.forEach(function(modal) {
            modal.classList.remove('active__modal');
        });
        // Activate the clicked modal
        modal.classList.add('active__modal');
    }
}

