import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import NotesView from './NotesView';
import NotesEdit from './NotesEdit';
import Layout from './Layout';
import Default from './Default';

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
/*

  const getSelectedNote = () => {
    //This prints twice for some reason?????/
    return notes.find((note) => note.id === selectedNote)
  };
  */
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Layout/>} >
            <Route path='/' element={<Default />}></Route>
            <Route path='/:id' element={<NotesView/>} ></Route>
            {/* <Route path='/:id/view' element={<NotesView/>}></Route> */}
            <Route path='/:id/edit' element={<NotesEdit/>}></Route>
          </Route> 

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

