import AddNote from "./AddNote";
import Note from "./Note";

function Notes({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note id={note.id} date={note.date} text={note.text} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
}

export default Notes;
