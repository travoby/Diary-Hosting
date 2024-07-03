// Get the diary entry details from the URL parameters
const params = new URLSearchParams(window.location.search);
const entryId = params.get('id');
const entryTitle = decodeURIComponent(params.get('title'));
const entryDate = decodeURIComponent(params.get('date'));
const entryContent = decodeURIComponent(params.get('content'));

// Pre-fill the form with the existing entry details
document.getElementById('title').value = entryTitle;
document.getElementById('message').value = entryContent;
document.getElementById('selected_date').value = entryDate;

// Add an event listener to the form's submit event
const form = document.getElementById('diary-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the updated values from the form
  const updatedTitle = document.getElementById('title').value;
  const updatedContent = document.getElementById('message').value;
  const updatedDate = document.getElementById('selected_date').value;

  // Retrieve the existing diary entries from local storage
  const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

  // Find the index of the entry to be updated
  const entryIndex = entries.findIndex(entry => entry.id === entryId);

  // Update the entry with the new values
  if (entryIndex !== -1) {
    entries[entryIndex] = {
      id: entryId,
      title: updatedTitle,
      content: updatedContent,
      date: updatedDate
    };

    // Save the updated entries to local storage
    localStorage.setItem('diaryEntries', JSON.stringify(entries));

    // Redirect the user back to the main page or display a success message
    window.location.href = '../pages/createnlist.html';
  }
});