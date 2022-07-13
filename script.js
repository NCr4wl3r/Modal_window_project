"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hiddenModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", hiddenModal);
overlay.addEventListener("click", hiddenModal);

// global event key press
document.addEventListener("keydown", function (ev) {
  console.log(ev);
  if (ev.key === "Escape" && !modal.classList.contains("hidden")) {
    hiddenModal();
  }
});
