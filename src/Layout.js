import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';


function Layout() {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []); // Sets default state (no notes)
    const [selectedNote, setSelectedNote] = useState(false)

    //useEffect(()=>{console.log(notes)},[notes])
    useEffect(()=>{localStorage.setItem("notes", JSON.stringify(notes))}, [notes])
  
    const addNote = () => {
      const newNote = {
        id: uuidv4(),
        title: "Untitled",
        body: "",
        lastModified: Date.now(),
      };

      setNotes((prevNote) => {
        return [newNote, ...prevNote];
      });
      localStorage.setItem("notes", JSON.stringify(notes))

      //navigate(`notes/${newNote.id}/edit`, { replace: true });            //This works (as in it will redirect), but the will not highlight the new note. 
                                                                            //I did some messing around and I will have to rewrite a bunch of Sidebar.js and Layout.js in order
                                                                            //to add highlighting functionality.
                                                                            //Im making it so that you have to select it manually for my own sanity
      //setNotes([newNote, ...notes])

    };

    const getSelectedNote = () => {
        return notes.find((note) => note.id === selectedNote)
    } 

    const deleteNote = (idToRemove) => {
        const question = window.confirm("Are you sure?");
        //console.log(`Delete note: ${question}`)
        //console.log(location)
        //console.log( `/notes/${getSelectedNote().id}/edit`)
        if (question === true) {
            setNotes(notes.filter((note) => note.id !== idToRemove));
            navigate('/notes')
        }
        else if (location.pathname === `/${getSelectedNote().id}/edit`){
            navigate(`/notes/${getSelectedNote().id}/edit`);
        }
        return;
    };
    
    //console.log(id)
    //console.log(getSelectedNote())

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
            <Outlet context={{notes: notes, selectedNote: selectedNote, deleteNote: deleteNote,}}/> 
        </div>
    </>
    )
}

export default Layout;