import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import NotesView from './NotesView';
import NotesEdit from './NotesEdit';
import Layout from './Layout';
import Default from './Default';

//https://www.youtube.com/watch?v=ulOKYl5sHGk&ab_channel=JamesGrimshaw
//27:45-31:30 in video starts to go into creating delete function

function App() {
  return (

      <BrowserRouter>
        <Routes>

          <Route element={<Layout/>} >
            <Route path='/' element={<Default />}></Route>
            <Route path='/:id' element={<NotesView />} ></Route>
            {/* <Route path='/:id/view' element={<NotesView/>}></Route> */}
            <Route path='/:id/edit' element={<NotesEdit/>}></Route>
          </Route> 

        </Routes>
      </BrowserRouter>

  );
};

export default App;