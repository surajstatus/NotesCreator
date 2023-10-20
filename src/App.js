import NotesList from "./Components/NotesList";
import './Style/Notes.css'
import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import Header from "./Components/Header";



export const Container = React.createContext();

function App() {
  const [notes, setNotes] = useState([]);
  const [toogleBtn, setToogleBtn] = useState(true);
  const [searchText, setSearchText] = useState('');;
  const [darkMode, setDarkMode] = useState(false);

  const [noteText, setNoteText] = useState('');
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(
      window.localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(prevNotes => [...prevNotes, ...savedNotes]);
    }
  }, []);

  useEffect(() => {

    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

 

  const editNote = (id) => {
    const newEditNote = notes.find((editnote) => editnote.id === id);
    console.log(newEditNote);
    setToogleBtn(false);
    
    setNoteText(newEditNote.text);
    setIsEditItem(newEditNote.id);
  }
  
  
  const deleteNote = (id) => {
    const deleteNotes = notes.filter((note) => note.id !== id);
    setNotes([...deleteNotes]);
  }

 



  return (
    <>
    <Container.Provider value={{toogleBtn, setToogleBtn, noteText, setNoteText, notes, setNotes, isEditItem, setIsEditItem}}>
    <div className={`${darkMode && 'dark-Mode'}`}>
      
      <div className="container">
        <Header handleToogleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          findNotes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
    </div>
    </Container.Provider>
    </>
  );
}

export default App;
