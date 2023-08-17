const body = document.querySelector("body");

const addButton = document.querySelector("#addButton");
const submitButton = document.querySelector("#submitButton");

const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");

form.style.display = "none";

//show/hide form
addButton.addEventListener("click", () => {
  console.log(form.style.display);
  form.style.display = form.style.display === "none" ? "flex" : "none";
  console.log(form.style.display);
});

//add book
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(titleInput.value);
  console.log(authorInput.value);
  console.log(pagesInput.value);
});
