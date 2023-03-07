import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';


function Layout() {

    const [notes, setNotes] = useState([]); // Sets default state (no notes)
    const [selectedNote, setSelectedNote] = useState(false)
  
    const addNote = () => {
      const newNote = {
        id: uuidv4(),
        title: "Untitled",
        body: "",
        lastModified: Date.now(),
      };
  
      setNotes([newNote, ...notes])
    };

/*
  
    const getSelectedNote = () => {
      //This prints twice for some reason?????/
      return notes.find((note) => note.id === selectedNote)
    }
*/
    return (
    <>
        <Header />
        <div id='main'>
            <Sidebar 
                notes={notes} 
                addNote={addNote} 
                selectedNote={selectedNote} 
                setSelectedNote={setSelectedNote}
            />
            <Outlet context={notes}/> {/* Depending on page url, will render component of that url */}
        </div>
    </>
    )
}

export default Layout;