import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { Link, useParams, useOutletContext, useNavigate } from "react-router-dom";


function NotesView() {
    const propsFromLayout = useOutletContext();
    const { id } = useParams();
    var notes = propsFromLayout.notes; // An array of all of the notes objects. 
    var selectedNoteID = propsFromLayout.selectedNote; // The currently selected note. Works perfectly, no changes need

    const selectedNote = notes.find((note) => note.id === id)

    const locale = 'en-CA';
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };

    const checkTitleLength = () => {
        if (selectedNote.title.length > 30) {
            return {__html: selectedNote.title.substr(0,25) + "..."}
        }
        else {
            return { __html: selectedNote.title}
        }
    }

    const titleLengthChecker = (title) => {
        if(title.length > 30) {return "..."};
        return "";
    };

    //console.log(notes);
    //console.log(notes[0].title)
    //console.log(selectedNote);

    return (
        <div id="notes">
            <div id='notes-overview'>
                <div id='notes-title-and-date'>
                    <div id='notes-title'><p id='p' >{selectedNote.title.substr(0, 30) + titleLengthChecker(selectedNote.title)}</p></div> 
                    {/* <div id='notes-title'><p id='p' dangerouslySetInnerHTML={checkTitleLength}></p></div> */}
                    <div id='notes-date'>{new Date(selectedNote.lastModified).toLocaleDateString(locale, options)}, {new Date(selectedNote.lastModified).toLocaleTimeString("en-CA")}</div>
                </div>
                <div id='notes-overview-seperation' ></div>
                <div id='notes-save-and-delete'>
                    <Link to={`edit`}>
                        <button className='notes-button'>Edit</button>
                    </Link>
                    <button className='notes-button' onClick={() => propsFromLayout.deleteNote(selectedNoteID)}>Delete</button>
                </div> 
            </div>
            <div id='notes-editor' dangerouslySetInnerHTML={{ __html: selectedNote.body}}></div>
        </div>
    );
  };
  
  export default NotesView;
  