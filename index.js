let dropdownButton = document.querySelectorAll(".dropdown-button");

dropdownButton.forEach((button) => {
  button.addEventListener("click", function () {
    // select the parent element of the dropdown button
    let dropdownMenu = button.parentElement;
    // select the next sibling of the dropdown button
    let content = dropdownMenu.nextElementSibling;
    //   toggle the class of the content
    content.classList.toggle("visible");

    button.textContent = button.textContent === "➡️" ? "⬇️" : "➡️";
  });
});

let flexButton = document.querySelector(".flex-button");
let flexContainer = document.querySelector(".items");
let flexPractice = document.querySelector(".flex-practice");
flexButton.addEventListener("click", function () {
  flexContainer.classList.toggle("visible");
  gridContainer.classList.remove("visible");
  flexButton.classList.toggle("active");
  gridButton.classList.remove("active");
  flexPractice.classList.toggle("hidden");
});

let gridButton = document.querySelector(".grid-button");
let gridContainer = document.querySelector(".wrapper");
gridButton.addEventListener("click", function () {
  flexContainer.classList.remove("visible");
  gridContainer.classList.toggle("visible");
  gridButton.classList.toggle("active");
  flexButton.classList.remove("active");
});
