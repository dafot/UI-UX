"use stcrict";

function dropdownActive() {
  const dropdown = document.querySelector(".dropdown");
  const dropdownList = document.querySelector(".dropdown__drop");
  dropdown.addEventListener("click", (e) => {
    dropdownList.classList.toggle("active");
  });
}

function modalWindowSet() {
  const modal = document.querySelector(".modal");
  const button = document.querySelector("[data-modal-trigger]");

  function showModal() {
    button.addEventListener("click", (e) => {
      if (e.target.dataset.modalTrigger == "true") {
        modal.classList.toggle("active");
      }
    });
  }
  function hideModal() {
    const closeTriggerElements =
      document.querySelectorAll("[data-modal-close]");

    closeTriggerElements.forEach((element) => {
      element.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    });
  }
  showModal()
  hideModal()
}
modalWindowSet()
dropdownActive();
