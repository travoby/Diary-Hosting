const form = document.querySelector(".input-form");

// Load form data from localStorage when the page loads
loadFormDataFromLocalStorage();

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
        image: document.querySelector(".image-input").value,
        title: document.querySelector(".title").value,
        message: document.querySelector(".message").value,
        date: document.querySelector(".selected_date").value,

    };
    // Store form data in localStorage
    storeFormDataInLocalStorage(formData);

     //Create a new entry object with timestamp for better organization
    const newEntry = {
        image,
        title,
        message,
        selected_date,
        timestamp: Date.now(), // Unique identifier for each entry
    };

    // Retrieve existing entries from local storage (or create an empty array if none exist)
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Add the new entry to the array
    entries.push(newEntry);

    // Store the updated entries array in local storage
    localStorage.setItem('entries', JSON.stringify(entries));

    //Clear the form after summition Done
    image.value = '';
    title.value = '';
    message.value='';
    selected_date.value ='';
    alert("Done")

    // Optional: Log form data for debugging purposes
    console.log('Form Data:', formData);
});

function loadFormDataFromLocalStorage() {
    // Retrieve and parse the form data from localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        // Populate form fields with the retrieved data if it exists
        document.querySelector(".image-input").value = formData.image || '';
        document.querySelector(".title").value = formData.title || '';
        document.querySelector(".message").value = formData.message || '';
        document.querySelector(".selected_date").value = formData.date || '';

    }
}
function storeFormDataInLocalStorage(formData) {
    // Convert the form data object to a JSON string and store it in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
}
