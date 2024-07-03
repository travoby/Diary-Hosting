
const form = document.getElementById('diary-form');
const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
let entryCount = 0; // Initialize entry count

entries.forEach(entry => {
  displayEntry(entry);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('message').value;
  const date = document.getElementById('selected_date').value;

  const newEntry = {
    id: `entry-${entryCount}`, // Assign unique ID
    title,
    content,
    date
  };

  entries.push(newEntry);
  localStorage.setItem('diaryEntries', JSON.stringify(entries));

  displayEntry(newEntry);

  form.reset();
  entryCount++; // Increment entry count
});

  function displayEntry(entry) {
    const entryElement = document.createElement('div');
    entryElement.id = entry.id; // Set the ID of the entry element
    entryElement.innerHTML = `
      <div class="card">
        <h1>${entry.title}</h1>
        <p>${entry.date}</p>
        <p>${entry.content}</p>
        <div class="button-arrow">
          <a href="#" onclick="deleteEntry('${entry.id}')"><button>Delete</button></a>
          <a class="arrow-right" href="../pages/viewpage.html?id=${entry.id}&title=${encodeURIComponent(entry.title)}&date=${encodeURIComponent(entry.date)}&content=${encodeURIComponent(entry.content)}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(entryElement);
  }

function deleteEntry(id) {
  const entryElement = document.getElementById(id);
  entryElement.remove();

  const entryIndex = entries.findIndex(entry => entry.id === id);
  if (entryIndex !== -1) {
    entries.splice(entryIndex, 1);
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }

}
