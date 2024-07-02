export default class NotesView {
  constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
        <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Dairy</button>
                <div class="notes__list"></div>
             </div>
            <form class="notes__preview"  action="/submit" method="post">
                <label for="title">Enter Title:</label><br>
                <input class="notes__title" type="text" id="title" name="title"><br><br>
               <label for="selected_date">Select Time for This Diary:</label><br>
                <input type="date" id="selected_date" name="selected_date"><br><br>
                <label for="message">Enter Your Dairy Here:</label>
                <textarea class="message" id="message" name="message" rows="25" cols="160"></textarea>
              <input type="submit" value="Add">
            </form>
      `;

    const btnAddNote = this.root.querySelector(".notes__add");
    const inpTitle = this.root.querySelector(".notes__title");
    const inpBody = this.root.querySelector("#message");
    const inpDate = this.root.querySelector("#selected_date");
    const form = this.root.querySelector(".notes__preview");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inpTitle, inpBody, inpDate].forEach(inputField => {
      inputField.addEventListener("blur", () => {
        const updatedTitle = inpTitle.value.trim();
        const updatedBody = inpBody.value.trim();
        const updatedDate = inpDate.value.trim();
        this.onNoteEdit(updatedTitle, updatedBody,updatedDate);
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission

      const title = inpTitle.value.trim();
      const body = inpBody.value.trim();
      const date = inpDate.value;

      // Call the onNoteAdd callback with the form data
      this.onNoteAdd(title, body, date);

      // Reset the form fields
      inpTitle.value = "";
      inpBody.value = "";
      inpDate.value = "";
    });

    this.updateNotePreviewVisibility(false);
  }

  _createListItemHTML(id, title, body, date, updated) {
    const MAX_BODY_LENGTH = 20;
    const MIN_BODY_LENGTH = 10;

    return `        
              <div class="notes__list-item" data-note-id="${id}">
                  <div class="notes__small-title">
                  ${title.substring(0, MIN_BODY_LENGTH)}
                  ${title.length > MIN_BODY_LENGTH ? "..." : ""}
                  </div>
                    <p>${date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p><br> 
                  <div class="notes__small-body">
                  ${body.substring(0, MAX_BODY_LENGTH)}
                  ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div><br>
                  
                  <div class="button-arrow">
                      <button >  Double Click to Delete</button>
                          <a class="arrow-right" href="../pages/viewpage.html"?noteId=${id}>View Detail</a>
                  </div>
                </div>
                `;
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector(".notes__list");

    // Empty list
    notesListContainer.innerHTML = "";

    for (const note of notes) {
      const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

      notesListContainer.insertAdjacentHTML("beforeend", html);
    }

    // Add select/delete events for each list item
    notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
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
    this.root.querySelector(".notes__title").value = note.title;
    this.root.querySelector(".message").value = note.body;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Check for yyyy-mm-dd format
    if (dateRegex.test(note.date)) {
      // Set the value only if it matches the format
      this.root.querySelector(".selected_date").value = new Date(note.date).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }

    this.root.querySelectorAll(".notes__list-item").forEach(noteListItem => {
      noteListItem.classList.remove("notes__list-item--selected");
    });

    this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
  }

  updateNotePreviewVisibility(visible) {
    this.root.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
  }
}


