
const titleInput = document.getElementById('title');
const messageInput = document.getElementById('message');
const selectedDateInput = document.getElementById('selected_date');
const submitButton = document.querySelector('form[action="/submit"] input[type="submit"]'); // More specific selector

function storeEntry() {
  const title = titleInput.value; 
  const message = messageInput.value; 
  const selectedDate = selectedDateInput.value;

  if (!title || !message || !selectedDate) {
    alert('Please fill in all required fields (Title, Message, Date).');
    return; //Storing Incompleted
  }

  // Create a new entry object with timestamp for better organization
  const newEntry = {
    title,
    message,
    selectedDate,
    timestamp: Date.now(), // Unique identifier for each entry
  };

  // Retrieve existing entries from local storage (or create an empty array if none exist)
  let entries = JSON.parse(localStorage.getItem('entries')) || [];

  // Add the new entry to the array
  entries.push(newEntry);

  // Store the updated entries array in local storage
  localStorage.setItem('entries', JSON.stringify(entries));

  // Clear the form after summition
  titleInput.value = '';
  messageInput.value = '';
  selectedDateInput.value = '';

  alert('Entry submitted successfully!');
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  storeEntry();
});


