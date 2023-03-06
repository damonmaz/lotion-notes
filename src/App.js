import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Sidebar from './Sidebar';
import Notes from './Notes';


function App() {

  const [notes, setNotes] = useState([]); // Sets default state (no notes)

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes])
  };

  return (
    <div>
      <Header />
      <div id='main'>
        <Sidebar notes={notes} addNote={addNote}/>
        <Notes />
      </div>
    </div>
  );
};

export default App;
 