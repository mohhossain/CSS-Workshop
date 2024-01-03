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
