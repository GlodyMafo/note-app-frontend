import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'
import {nanoid}from 'nanoid'
import Search from './components/Search'

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text:'Ma note 1',
    date:'25/04/2024'
  },
  {
    id: nanoid(),
    text:'Ma note 2',
    date:'25/04/2024'
  },
  {
    id: nanoid(),
    text:'Ma note 3',
    date:'25/04/2024'
  },
  {
    id: nanoid(),
    text:'Ma note 4',
    date:'25/04/2024'
  },
])

const addNote = (text)=>{
const date = new Date();
const newNote={
  id: nanoid(),
  text:text,
  date: date.toLocaleDateString(),
};
const newNotes= [...notes, newNote ];
setNotes(newNotes);

}

const deleteNote = (id)=>{
const newNotes = notes.filter((note)=>note.id!==id);
setNotes(newNotes);
}

  return (
    <>
   <div className="container">
    <Search/>
    <Notes notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
   </div>
    </>
  )
}

export default App
