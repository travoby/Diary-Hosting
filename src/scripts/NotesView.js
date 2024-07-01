export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `

        <form class="image-input" action="/upload" method="post" enctype="multipart/form-data">
            <label for="image">Select Image:</label><br>

            <input type="file" id="image" name="image" accept="image/*"><br><br>
            <input type="submit" class="image-summit" value="Upload">

            <label for="title">Enter Title:</label><br>
            <input class="title" type="text" id="title" name="title"><br><br>

            <label for="message">Enter Your Dairy Here:</label><br>
            <textarea class="message" id="message" name="message" rows="25" cols="160"></textarea><br>

            <label for="selected_date">Select Date:</label>
            <input class="selected_date" type="date" id="selected_date" name="selected_date">
            <input type="submit" class="submit" value="Submit">
         </form>
        `;

        const image = this.root.querySelector(".image-input");
        const Title = this.root.querySelector(".title");
        const message = this.root.querySelector(".message");
        const date = this.root.querySelector(".selected_date");
        const summit = this.root.querySelector(".submit");

        summit.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [image, Title,message,date ].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedImage= inpImage.value();
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();
                const updatedDate = inpDate.value();

                this.onNoteEdit(updatedImage,updatedTitle, updatedBody,updatedDate);
            });
        });

        this.updateNotePreviewVisibility(false);
    }

    _createListItemHTML(id,image, title,date, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
           
            <div class="card" data-note-id="${id}">
          <img src="${image}" alt="">
          <h1>${title}</h1>
          <p>${date}</p>
          <p>${message}</p>
          <div class="button-arrow">
            <a href=""><button>Delete</button></a>
            <a class="arrow-right" href="../pages/viewpage.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg></a>
          </div>
        </div>
        `;
    }

    updateNoteList(notes) {
        const notesListContainer = this.root.querySelector(".submit");

        // Empty list
        notesListContainer.innerHTML = "";

        for (const note of notes) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            notesListContainer.insertAdjacentHTML("beforeend", html);
        }

        // Add select/delete events for each list item
        notesListContainer.querySelectorAll(".card").forEach(noteListItem => {
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
        this.root.querySelector(".title").value = note.title;
        this.root.querySelector(".message").value = note.body;

        this.root.querySelectorAll(".card").forEach(noteListItem => {
            noteListItem.classList.remove("notes__list-item--selected");
        });

        this.root.querySelector(`.card[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
    }
}
