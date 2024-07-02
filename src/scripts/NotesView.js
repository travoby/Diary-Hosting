export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
            <div class="notes__sidebar">
                <button class="diary-add" type="button">Add Dairy</button>
                <div class="diary_list"></div>
            </div>
            <div class="diary_preview">
                <input class="diary_title" type="text" placeholder="New Dairy...">
                <textarea class="diary_message">Input Your Diary...</textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".diary-add");
        const inpTitle = this.root.querySelector(".diary_title");
        const inpBody = this.root.querySelector(".diary_message");

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        this.updateNotePreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="diary_list-item" data-note-id="${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                 </div>
                <div class="notes__small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                </div>
            </div>
        `;
    }

    updateNoteList(notes) {
        const notesListContainer = this.root.querySelector(".diary_list");

        // Empty list
        notesListContainer.innerHTML = "";

        for (const note of notes) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            notesListContainer.insertAdjacentHTML("beforeend", html);
        }

        // Add select/delete events for each list item
        notesListContainer.querySelectorAll(".diary-list-item").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("Are you sure you want to delete this note?");

                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            });
        });
    }

    updateActiveNote(note) {
        this.root.querySelector(".diary_title").value = note.title;
        this.root.querySelector(".diary_message").value = note.body;

        this.root.querySelectorAll(".diary-list-item").forEach(noteListItem => {
            noteListItem.classList.remove("diary-list-item--selected");
        });

        this.root.querySelector(`.diary-list-item[data-note-id="${note.id}"]`).classList.add("diary-list-item--selected");
    }

    updateNotePreviewVisibility(visible) {
        this.root.querySelector(".diary_preview").style.visibility = visible ? "visible" : "hidden";
    }
}