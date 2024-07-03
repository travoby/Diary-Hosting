// Retrieve the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const entryId = urlParams.get("id");

// Display the view details
document.getElementById("entry-title").textContent = urlParams.get("title");
document.getElementById("entry-date").textContent = urlParams.get("date");
document.getElementById("entry-content").textContent = urlParams.get("content");


const editButton = document.getElementById("editButton");
editButton.addEventListener("click", goToEditPage);

function goToEditPage() {
  window.location.href = `../pages/editpage.html?id=${entryId}`;
}