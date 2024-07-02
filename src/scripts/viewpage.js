// Get the note ID from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get('id');

// Fetch the note data from the DiaryStore
const notes = DiaryStore.getAllNotes();
const note = notes.find(n => n.id == noteId);

// Populate the HTML elements with the note data
document.getElementById('note-title').textContent = note.title;
document.getElementById('note-date').textContent = note.date;
document.getElementById('note-body').textContent = note.body;