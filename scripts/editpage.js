// the URLSearchParams is used to search for additional parameters
const urlParams = new URLSearchParams(window.location.search);
const entryId = urlParams.get("id");

const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

window.editEntry = function (id) {
  const entry = entries.find((entry) => entry.id === id);
  document.getElementById("title-update").value = entry.title;
  document.getElementById("message-update").value = entry.content;
  document.getElementById("selected-date-update").value = entry.date;
  document.getElementById("entry-id").value = id;
};

window.addEventListener("DOMContentLoaded", (event) => {
  if (entryId) {
    editEntry(entryId);
  }
});

document
  .getElementById("diary-update")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("entry-id").value;
    const title = document.getElementById("title-update").value;
    const message = document.getElementById("message-update").value;
    const date = document.getElementById("selected-date-update").value;

    const index = entries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      entries[index].title = title;
      entries[index].content = message;
      entries[index].date = date;
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
      window.location.href = `../pages/viewpage.html?id=${id}&title=${title}&date=${date}&content=${message}`;
      form.reset();
    }
  });
