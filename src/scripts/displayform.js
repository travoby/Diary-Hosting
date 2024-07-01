
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

// function displayStoredFormData() {
//   // Retrieve and parse the form data from localStorage
//   const formData = JSON.parse(localStorage.getItem('formData'));

//   if (formData) {
//     // Create a new HTML element to display the form data
//     const formDataElement = document.createElement('div');
//     formDataElement.classList.add('form-data');

//     // Add the form data to the new element
//     formDataElement.innerHTML = `
//       <p>Image: ${formData.image}</p>
//       <p>Title: ${formData.title}</p>
//       <p>Message: ${formData.message}</p>
//       <p>Date: ${formData.date}</p>
//     `;

//     // Append the form data element to the document body or a specific container
//     document.body.appendChild(formDataElement);
//   }
// }

class FormDataComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
      const template = `
        <style>
          .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 20px;
            text-align: center;
          }
          .card img {
            max-width: 100%;
            height: auto;
          }

        </style>
        <div class="card">
          <img src="${formData.image}" alt="">
          <h1>${formData.title}</h1>
          <p>${formData.date}</p>
          <p>${formData.message}</p>
          <div class="button-arrow">
            <a href="../pages/createpage.html"><button> Make An Edit </button></a>
          </div>
        </div>
      `;
      this.shadowRoot.innerHTML = template;
    }
  }
}

customElements.define('form-component', FormDataComponent);
