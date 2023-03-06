import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import NotesView from './NotesView';
import NotesEdit from './NotesEdit';

//https://www.youtube.com/watch?v=ulOKYl5sHGk&ab_channel=JamesGrimshaw
//27:45-31:30 in video starts to go into creating delete function

function App() {

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

  const getSelectedNote = () => {
    //This prints twice for some reason?????/
    return notes.find((note) => note.id === selectedNote)
  }

  return (
    <div>
      {/*
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </BrowserRouter>
    */}
      <Header />
      <div id='main'>
        <Sidebar 
          notes={notes} 
          addNote={addNote} 
          selectedNote={selectedNote} 
          setSelectedNote={setSelectedNote}/>
        
        {/* if(selectedNote = True) open the notes) */}
        <NotesEdit 
          selectedNote = {getSelectedNote}
        />
      </div>
    </div>
  );
};

export default App;