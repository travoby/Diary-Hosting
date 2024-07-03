const form = document.getElementById("diary-form");
const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
let countId = 0; // Initialize input count

// AddEvenListener to the Form
form.addEventListener("submit", (event) => {
  // avoid the refreshing of the webpage
  event.preventDefault();

  // get data from the form of html
  const title = document.getElementById("title").value;
  const content = document.getElementById("message").value;
  const date = document.getElementById("selected_date").value;

  const newInput = {
    id: `input-${countId}`, // Assign unique ID to each card
    title,
    content,
    date,
  };

  // add new obj to the local storage
  entries.push(newInput);

  // set the new array to the local storage
  localStorage.setItem("diaryEntries", JSON.stringify(entries));

  //Display All new Inputs
  displayInput(newInput);

  //reset the form after summited
  form.reset();
  countId++; // Increment input count when user input other note
});

// loop to display all the entries from local storage
entries.forEach((input) => {
  // render all the entries according to the current amount of input
  displayInput(input);
});

// the diary note layout
function displayInput(input) {
  const inputElement = document.createElement("div");
  inputElement.id = input.id; // Set the ID of the input element to easy search
  inputElement.innerHTML = `
  <div class="all-card">    
    <div class="card">
          <h1>${input.title}</h1>
          <p>${input.date}</p>
          <p>${input.content.slice(0, 100)}${
    input.content.length > 100 ? "..." : ""
  }</p>
          <div class="button-arrow">
            <a href="#" onclick="deleteInput('${
              input.id
            }')"><button>Delete</button></a>
            <a class="arrow-right" href="../pages/viewpage.html?id=${
              input.id
            }&title=${input.title}&date=${input.date}&content=${input.content}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  document.body.appendChild(inputElement);
}

//Create Function Delete to Delete card
function deleteInput(id) {
  //
  const inputElement = document.getElementById(id);
  inputElement.remove();

  // Access to the id to be deleted
  const inputIndex = entries.findIndex((input) => input.id === id);
  if (inputIndex !== -1) {
    entries.splice(inputIndex, 1);
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }
}
