// case 1
const btnContact = document.getElementById("btnContact");
const modal = document.getElementsByClassName("modal")[0];
btnContact.addEventListener("click", () => {
  modal.classList.add("visible");
});

// case 2
const closeModal = () => {
  modal.classList.remove("visible");
};

// const modal = document.querySelector(".modal");
console.log(modal);
