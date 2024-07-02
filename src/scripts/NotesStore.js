export default class DiaryStore {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("diary-note") || "[]");
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = DiaryStore.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        // Edit/Update
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.date = noteToSave.date;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 10000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem("diary-note", JSON.stringify(notes));
    } 

    static deleteNote(id) {
        const notes = DiaryStore.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("diary-note", JSON.stringify(newNotes));
    }
}
