
function displayStoredFormData() {
    // Retrieve and parse the form data from localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));
  
    if (formData) {
      // Create a new HTML element to display the form data
      const formDataElement = document.createElement('div');
      formDataElement.classList.add('form-data');
  
      // Add the form data to the new element
      formDataElement.innerHTML = `
        <div class="card">
            <img src="${formData.image}" alt="">
            <h1>${formData.title}</h1>
            <p>${formData.date}</p>
            <p>${formData.message}</p>
            <div class="button-arrow">
                <a href=""><button>Delete</button></a>
            <a class="arrow-right" href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg></a>
            </div>
        </div>
      `;
  
      // Append the form data element to the document body or a specific container
      document.body.appendChild(formDataElement);
    }
  }










  
//   function createFormDataHTML(formData) {
//     return `
//       <div class="card">
//         <img src="${formData.image}" alt="">
//         <h1>${formData.title}</h1>
//         <p>${formData.date}</p>
//         <p>${formData.message}</p>
//         <div class="button-arrow">
//           <a href="#" onclick="deleteFormData('${formData.id}')"><button>Delete</button></a>
//           <a class="arrow-right" href="#" onclick="viewFormData('${formData.id}')">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
//               <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     `;
//   }
  
//   function displayStoredFormData() {
//     // Retrieve and parse the form data from localStorage
//     const formData = JSON.parse(localStorage.getItem('formData')) || [];
  
//     // Clear the existing form data display
//     document.querySelector('.form-data').innerHTML = '';
  
//     // Generate and append the HTML for each form data entry
//     formData.forEach((entry) => {
//       const formDataHTML = createFormDataHTML(entry);
//       document.querySelector('.form-data').innerHTML += formDataHTML;
//     });
//   }
  
//   function storeFormDataInLocalStorage(formData) {
//     // Assign a unique ID to the form data
//     formData.id = Date.now().toString();
  
//     // Retrieve and parse the existing form data from localStorage
//     const existingFormData = JSON.parse(localStorage.getItem('formData')) || [];
  
//     // Add the new form data to the existing data
//     existingFormData.push(formData);
  
//     // Convert the updated form data array to a JSON string and store it in localStorage
//     localStorage.setItem('formData', JSON.stringify(existingFormData));
//   }
  
//   function deleteFormData(id) {
//     // Retrieve and parse the existing form data from localStorage
//     const formData = JSON.parse(localStorage.getItem('formData')) || [];
  
//     // Filter out the form data with the given ID
//     const updatedFormData = formData.filter((entry) => entry.id !== id);
  
//     // Convert the updated form data array to a JSON string and store it in localStorage
//     localStorage.setItem('formData', JSON.stringify(updatedFormData));
  
//     // Redisplay the updated form data
//     displayStoredFormData();
//   }
  
//   function viewFormData(id) {
//     // Retrieve and parse the existing form data from localStorage
//     const formData = JSON.parse(localStorage.getItem('formData')) || [];
  
//     // Find the form data with the given ID
//     const selectedEntry = formData.find((entry) => entry.id === id);
  
//     // Display the selected form data in a modal or new page
//     // (implementation not shown)
//     displaySelectedFormData(selectedEntry);
//   }