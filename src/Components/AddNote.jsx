import React, { useContext } from 'react'
import '../Style/Notes.css'
import { Container } from '../App';

import { nanoid } from 'nanoid';

const AddNote = ({ handleAddNote }) => {
    const { toogleBtn, setToogleBtn, noteText, setNoteText, notes, setNotes, isEditItem, setIsEditItem } = useContext(Container);
    const characterLimit = 300;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0)
            setNoteText(event.target.value);
    }

    const handleSaveClick = () => {
        if(noteText && !toogleBtn){
            
            setNotes(
                notes.map((swap) => {
                    if (swap.id === isEditItem) {
                        
                        const edit = { ...swap, text: noteText }
                        console.log(edit);
                        return edit;
                    }
                    //  console.log(swap.text);
                    return swap;
                })
            )
            setToogleBtn(true);

            setNoteText('');
            setIsEditItem(null);

        
        }
        else if (noteText.trim().length > 0) {
            addNote(noteText);
            setNoteText('');
        }
        else {
            alert('Please Add Some NOTES');
        }
    }

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
          id: nanoid(),
          text: text,
          date: date.toLocaleDateString('en-GB')
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
      }


    return (
        <div className='note new'>
            <textarea placeholder='Type to add a Note...' cols="12" rows="10" value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                {
                    toogleBtn ? <button className='save' onClick={handleSaveClick}>Save</button> :
                        <button className='save' onClick={handleSaveClick}>Update</button>
                }
            </div>
        </div>
    )
}

export default AddNote
