var formButton = document.getElementById("contact-form-button");
var formContent = document.getElementById("form-content");

formButton.addEventListener("click", () => {
  formContent.classList.remove("d-none");
  formButton.classList.add("d-none");
});
