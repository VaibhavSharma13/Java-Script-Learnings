export default class notesView{
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}){
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;

        this.root.innerHTML = `
            <div class="app-left-container">
                <button class="add-note-btn">Add Note</button>
                <div class="notes-container"></div>
            </div>

            <div class="app-right-container">
                <input type="text" class="note-title" placeholder="Title">
                <textarea class="note-content" placeholder="Write a note..."></textarea>
            </div>
        `;
    }
}