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

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    const projectCards = document.querySelectorAll(".project-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.textContent.toLowerCase();

            projectCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (category === "all" || cardCategory === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});


function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var rad = Math.atan2(dy, dx);
    return rad * 180 / Math.PI;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var anchor = document.getElementById('anchor');
    var eyes = document.querySelectorAll('.eye');
  
    function handleMouseMove(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      var rekt = anchor.getBoundingClientRect();
      var anchorX = rekt.left + rekt.width / 2;
      var anchorY = rekt.top + rekt.height / 2;
  
      var angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  
      eyes.forEach(function(eye) {
        eye.style.transform = 'rotate(' + (180 + angleDeg) + 'deg)';
      });
    }
  
    document.addEventListener('mousemove', handleMouseMove);
  
    // Clean up event listener on unmount or leave
    window.addEventListener('beforeunload', function() {
      document.removeEventListener('mousemove', handleMouseMove);
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

