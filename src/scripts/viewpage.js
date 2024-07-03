
// Retrieve the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const entryId = urlParams.get('id');
const entryTitle = decodeURIComponent(urlParams.get('title'));
const entryDate = decodeURIComponent(urlParams.get('date'));
const entryContent = decodeURIComponent(urlParams.get('content'));

// Display the entry details
document.getElementById('title').textContent = entryTitle;
document.getElementById('date').textContent = entryDate;
document.getElementById('content').textContent = entryContent;


const editButton = document.getElementById('editButton');
editButton.addEventListener('click', goToEditPage);

function goToEditPage() {
  window.location.href = '../pages/editpage.html';
}