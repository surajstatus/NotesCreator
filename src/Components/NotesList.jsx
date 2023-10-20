import React from 'react'
import Notes from './Notes'
import '../Style/Notes.css'
import AddNote from './AddNote'

const NotesList = ({ findNotes, handleAddNote, handleDeleteNote, handleEditNote}) => {
  return (
    <div className='notes-list'>
      {findNotes.map((note) => (
        <Notes key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList