const body = document.querySelector("body");

const addButton = document.querySelector("#addButton");
const submitButton = document.querySelector("#submitButton");

const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const checkboxInput = document.querySelector("#checkBox");

const booksDiv = document.querySelector(".books");

form.style.display = "none";

const books = new Set();

//show/hide form
addButton.addEventListener("click", () => {
  form.style.display = form.style.display === "none" ? "flex" : "none";
});

//add book
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let tmp = Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    checkboxInput.checked
  );

  books.add(tmp);
  booksDiv.appendChild(tmp.getDiv());

  //cleanup
  form.style.display = form.style.display === "none" ? "flex" : "none";
  titleInput.value = "Title";
  authorInput.value = "Title";
  pagesInput.value = "321";
  checkboxInput.checked = false;

  console.log(books.has(tmp));
});

const Book = (title, author, pages, isRead, div) => {
  const createDiv = () => {
    let div = document.createElement("div");

    //text
    let h2Title = document.createElement("h2");
    let h2Author = document.createElement("h2");
    let h2Pages = document.createElement("h2");

    h2Title.textContent = title;
    h2Author.textContent = author;
    h2Pages.textContent = pages;

    //buttons
    let buttonsDiv = document.createElement("div");
    let buttonRead = document.createElement("button");
    let buttonRemove = document.createElement("button");

    buttonsDiv.id = "buttonsDiv";
    buttonRead.id = "buttonRead";
    buttonRemove.id = "buttonRemove";

    buttonRead.textContent = isRead ? "Read" : "Not read";
    buttonRead.style.backgroundColor =
      isRead === true ? "rgb(131, 218, 2)" : "rgb(255, 108, 91)";
    buttonRemove.textContent = "Remove";

    div.appendChild(h2Title);
    div.appendChild(h2Author);
    div.appendChild(h2Pages);

    buttonsDiv.appendChild(buttonRead);
    buttonsDiv.appendChild(buttonRemove);
    div.appendChild(buttonsDiv);

    //button functions
    buttonRead.addEventListener("click", () => {
      isRead = !isRead;
      buttonRead.textContent = !isRead ? "Not read" : "Read";

      buttonRead.style.backgroundColor =
        isRead === true ? "rgb(131, 218, 2)" : "rgb(255, 108, 91)";
    });

    buttonRemove.addEventListener("click", () => {
      booksDiv.removeChild(div);

      console.log(booksDiv);
    });

    return div;
  };

  div = createDiv();

  const printBook = () => {
    console.log(`Title ${title} written by: ${author}`);
  };

  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getIsRead = () => isRead;
  const getDiv = () => div;

  return { getTitle, getAuthor, getPages, getIsRead, getDiv, printBook };
};
