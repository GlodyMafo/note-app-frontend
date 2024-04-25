import { useState } from "react";


function AddNote({handleAddNote}) {
const [noteText, setNoteText]=useState('')

const caracterLimit=200;

const handleChange = (event)=>{
    if(caracterLimit-event.target.value.length>=0){
        setNoteText(event.target.value);
    }

}

const handleClick =()=>{
    if (noteText.trim().length>0){
        handleAddNote(noteText);
        setNoteText("")
    }

}
  return (
    <div className="note newnote">
      <textarea
        cols="10"
        rows="8"
        placeholder="Ajoutez une note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{caracterLimit-noteText.length} Remaining</small>
        <button className="save" onClick={handleClick}>Save</button>
      </div>
    </div>
  );
}
export default AddNote
