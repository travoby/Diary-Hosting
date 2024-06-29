
const titleInput = document.getElementById('title');
const messageInput = document.getElementById('message');
const selectedDateInput = document.getElementById('selected_date');

// Function to retrieve data from local storage with error handling
function getStoredEntries() {
  try {
    const storedEntries = JSON.parse(localStorage.getItem('entries'));
    return storedEntries;
  } catch (error) {
    console.error('Error retrieving entries from local storage:', error);
    return []; // Return empty array in case of parsing error
  }
}

// Retrieve entries and potentially pre-fill the form


// const storedUserDataInLocal = localStorage.getItem('title','massage','selectDate')

// if (storedUserDataInLocal) {
//   const submitButton = JSON.parse(storedUserDataInLocal)
//   // You can use userData here...
// } else {
//   console.log('User data not found in local storage')
// }
