import Notes from './Notes.js';

import AddNote from './AddNote.js';
const NotesList=({notes, handleAddNote, handleDeleteNote})=>{
    return(
        <div className="notes-list">
            {notes.map((note)=> <Notes key={note.id} id={note.id} text={note.text} date={note.date}
            handleDeleteNote={handleDeleteNote}
            />)}

            <AddNote handleAddNote={handleAddNote}/>
        </div>
 
    );
}

export default NotesList;