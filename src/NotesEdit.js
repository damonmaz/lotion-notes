import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

function NotesEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const propsFromLayout = useOutletContext(); 
    const [notes, setNotes] = [propsFromLayout.notes, propsFromLayout.setNotes]


    var selectedNoteID = propsFromLayout.selectedNote; // The currently selected note. Works perfectly, no changes need
    var selectedNote = notes.find((note) => note.id === id)

    
    const [body, setBody] = useState(selectedNote.body);
    const [date, setDate] = useState(selectedNote.lastModified);
    const [title, setTitle] = useState(selectedNote.title);

    
    const save = () => {
        selectedNote.title = title;
        selectedNote.body = body;
        selectedNote.lastModified = date;
        localStorage.setItem("notes", JSON.stringify(notes))
        navigate(-1);
    }

    // const formatDateForInput = (date) => {
    //     const newDate = new Date(date).toLocaleString("en-CA");
    //         if (newDate === "Invalid Date") {return "";}
    //         return newDate;
    // }

    function fixDatetimeLocal(date) {
        const d = new Date(date);
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        return d.toISOString().slice(0, 16);
    }
    

    console.log(id);
    console.log(date);

    return (
        
        <div id="notes">
            <div id='notes-overview'>
                <div id='notes-title-and-date'>
                    <input type='text' id='notes-title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <input type='datetime-local' id='notes-date' value={fixDatetimeLocal(date)} onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <div id='notes-overview-seperation' ></div>
                <div id='notes-save-and-delete'>
                    <button className='notes-button' onClick={save}>Save</button> {/* As of right now this jsut goes back, but also deleted the notes in the sidebar */}
                    <button className='notes-button' onClick={() => propsFromLayout.deleteNote(selectedNoteID)}>Delete</button>
                </div> 
            </div>
            <div id='notes-editor'>
                <ReactQuill 
                    theme="snow" 
                    placeholder='Your note here'
                    value={body}
                    onChange={setBody}
                />
            </div>
        </div>
              
    );
  };
  
  export default NotesEdit;
  