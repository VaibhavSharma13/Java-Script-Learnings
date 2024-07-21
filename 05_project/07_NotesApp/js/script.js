// import notesView from "./notesView.mjs";

class notesView{
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

        const addNoteBtnElement = this.root.querySelector('.add-note-btn');
        const noteTitleElement = this.root.querySelector('.note-title');
        const noteContentElement = this.root.querySelector('.note-content');

        addNoteBtnElement.addEventListener('click', this.onNoteAdd);

        // noteTitleElement.addEventListener('change', (e) => {
        //     this.onNoteEdit(e.target.value, "content not changed");
        // });
        // noteContentElement.addEventListener('change', (e) => {
        //     this.onNoteEdit("Title not changed", e.target.value);
        // });

        // we can use like above but below way is the better one
        [noteTitleElement, noteContentElement].forEach(noteInputField => {
            noteInputField.addEventListener('blur', ()=>{
                const updatedTitle = noteTitleElement.value.trim();
                const updatedContent = noteContentElement.value.trim();

                this.onNoteEdit(updatedTitle, updatedContent);
            });
        });
    }
}


const app = document.querySelector("#app");
const view = new notesView(app, {
    onNoteSelect(){
        console.log("note has been selected");
    },
    onNoteAdd(){
        console.log("Note Added");
    },
    onNoteEdit(newTitle, newCotent){
        console.log("edited note");
        console.log(newTitle);
        console.log(newCotent);
    }
});



// local storage functions

function getNotes(){
    const notes = JSON.parse(localStorage.getItem('notesApp')  || '[]');

    return notes.sort((a,b) => {
        return new Date(a.date) > new Date(b.date) ? -1 : 1;
    });
}

function saveNotes(noteToSave){

    const notes = getNotes();

    noteToSave.id = Math.floor(Math.random() * 10000);
    noteToSave.date = new Date().toUTCString();
    notes.push(noteToSave);
    localStorage.setItem('notesApp', JSON.stringify(notes));
}

function updateNotes(noteToUpdate){
    const notes = getNotes();

    const existingNote = notes.find(note => note.id === noteToUpdate.id);
    existingNote.title = noteToUpdate.title;
    existingNote.content = noteToUpdate.content;
    existingNote.date = new Date().toUTCString();

    localStorage.setItem('notesApp', JSON.stringify(notes));
}

function deleteNote(noteToDelete){
    const notes = getNotes();
    const newNotes = notes.filter(note => note.id !== noteToDelete.id)

    localStorage.setItem('notesApp', JSON.stringify(newNotes));
}

