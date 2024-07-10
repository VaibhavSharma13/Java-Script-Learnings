const notesContainerElement = document.querySelector('#app');
const addNoteButtonElement = document.querySelector('.add-note-btn');

// let notesArray = [];

getNotes().forEach(note => {
    createNote(note);
});


function getNotes(){
    return JSON.parse(localStorage.getItem('sticky-notes') || '[]') ;
}


function saveNotes(notes){
    // notesArray.push(notes);
    localStorage.setItem('sticky-notes', JSON.stringify(notes));
}


addNoteButtonElement.addEventListener('click', addNote);
function addNote(){

    const existingNotes = getNotes();

    const note = {
        id: Math.floor(Math.random() * 10000),
        content: ''
    }
    createNote(note);

    existingNotes.push(note);
    saveNotes(existingNotes);
}


function createNote(note){
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Start a new note';
    textarea.classList.add('note-box');
    textarea.value = note.content;
    notesContainerElement.insertBefore(textarea, addNoteButtonElement);

    textarea.addEventListener('change', (e)=>{
        // console.log(e.target.value);
        note.content = e.target.value;
        updateNote(note);
    });

    textarea.addEventListener('dblclick', ()=>{

        const isDelete = confirm('Are you sure you want to delete');
        if(isDelete){
            deleteNote(note, textarea);
        }
    })
}


function updateNote(newNote){
    const notes = getNotes();

    const targetNote = notes.filter(note => note.id === newNote.id);
    targetNote[0].content = newNote.content;

    saveNotes(notes);
}

function deleteNote(delNote, textarea){

    // console.log(delNote , textarea);

    const notes = getNotes();
    const targetNote = notes.filter(note => note.id !== delNote.id);

    saveNotes(targetNote);
  
    notesContainerElement.removeChild(textarea);
}