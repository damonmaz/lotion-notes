import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Notes from './Notes';


function App() {
  return (
    <>
      <Header />
      <div id='main'>
        <Sidebar />
        <Notes />
      </div>
    </>
  );
};

export default App;
 