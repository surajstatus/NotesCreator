import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import '../Style/Notes.css'

const Notes = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  return (
    <div className='note'>

      <span style={{ position: 'relative', width: '100%' }}>
        <Icons.Pencil className='iconic' onClick={() => handleEditNote(id)} size={18} style={{ position: 'absolute' }} />
        {text}
      </span>

      <div className='note-footer'>
        <small>{date}</small>
        <Icons.Trash3Fill onClick={() => handleDeleteNote(id)} className='deleteIcon' size={'1.2em'} />
      </div>
    </div>
  )
}

export default Notes
