// Select everything that we need. Store them into variables.

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// Function for Open Modal.
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function for Close Modal.
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// loop through modal buttons, remove the hidden styling on click.
for (i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener("click", openModal);

// Add hidden classes back when Close Modal button is clicked.
btnCloseModal.addEventListener("click", closeModal);

// Add hidden classes back when Overlay is clicked.
overlay.addEventListener("click", closeModal);

//Escape button to close Modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
