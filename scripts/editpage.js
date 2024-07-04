// the URLSearchParams is used to search for additional parameters
const urlParams = new URLSearchParams(window.location.search);
const storeId = urlParams.get("id");
//get the Data from 'diaryStore value
const store = JSON.parse(localStorage.getItem("diaryStore")) || [];
window.addEventListener("DOMContentLoaded", () => {
  if (storeId) {
    editEntry(storeId);
  }
});

//function for take data from exiting to the edit form
window.editEntry = function (id) {
  const searchId = store.find((searchId) => searchId.id === id);
  document.getElementById("title-update").value = searchId.title;
  document.getElementById("message-update").value = searchId.content;
  document.getElementById("selected-date-update").value = searchId.date;
  document.getElementById("entry-id").value = id;
};

//Update new data to local sotrage call 'diary-update'

document.getElementById("diary-update")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("entry-id").value;
    const title = document.getElementById("title-update").value;
    const message = document.getElementById("message-update").value;
    const date = document.getElementById("selected-date-update").value;

    const indexCard = store.findIndex((searchId) => searchId.id === id);
    if (indexCard !== -1) {
      store[indexCard].title = title;
      store[indexCard].content = message;
      store[indexCard].date = date;
      localStorage.setItem("diaryStore", JSON.stringify(store));
      window.location.href = `../pages/viewpage.html?id=${id}&title=${title}&date=${date}&content=${message}`;
      editEntry.reset();
    }
  });


  