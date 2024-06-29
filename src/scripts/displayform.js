
// const titleInput = document.getElementById('title');
// const messageInput = document.getElementById('message');
// const selectedDateInput = document.getElementById('selected_date');

// // Function to retrieve data from local storage with error handling
// function getStoredEntries() {
//   try {
//     const storedEntries = JSON.parse(localStorage.getItem('entries'));
//     return storedEntries;
//   } catch (error) {
//     console.error('Error retrieving entries from local storage:', error);
//     return []; // Return empty array in case of parsing error
//   }
// }

// // Retrieve entries and potentially pre-fill the form


// const storedUserDataInLocal = localStorage.getItem('title','massage','selectDate')

// if (storedUserDataInLocal) {
//   const submitButton = JSON.parse(storedUserDataInLocal)
//   // You can use userData here...
// } else {
//   console.log('User data not found in local storage')
// }

function displayStoredFormData() {
  // Retrieve and parse the form data from localStorage
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    // Create a new HTML element to display the form data
    const formDataElement = document.createElement('div');
    formDataElement.classList.add('form-data');

    // Add the form data to the new element
    formDataElement.innerHTML = `
      <p>Image: ${formData.image}</p>
      <p>Title: ${formData.title}</p>
      <p>Message: ${formData.message}</p>
      <p>Date: ${formData.date}</p>
    `;

    // Append the form data element to the document body or a specific container
    document.body.appendChild(formDataElement);
  }
}
