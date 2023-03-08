import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';


function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
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
      navigate(`${getSelectedNote().id}`)
    };

    const getSelectedNote = () => {
        return notes.find((note) => note.id === selectedNote)
    } 

    const deleteNote = (idToRemove) => {
        const question = window.confirm("Are you sure?");
        console.log(`Delete note: ${question}`)
        console.log(location)
        console.log( `/${getSelectedNote().id}/edit`)
        if (question === true) {
            setNotes(notes.filter((note) => note.id !== idToRemove));
            navigate('/')
        }
        else if (location.pathname === `/${getSelectedNote().id}/edit`){
            navigate(`/${getSelectedNote().id}/edit`);
        }
        return;
    };
  
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
            <Outlet context={{notes: notes, selectedNote: selectedNote, deleteNote: deleteNote}}/> 
        </div>
    </>
    )
}

export default Layout;