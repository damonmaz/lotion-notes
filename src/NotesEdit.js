import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useParams, useOutletContext, useNavigate } from "react-router-dom";

function NotesEdit() {
    const navigate = useNavigate();
    const propsFromLayout = useOutletContext();

    var notes = propsFromLayout.notes; // An array of all of the notes objects. 
    var selectedNote = propsFromLayout.selectedNote; // The currently selected note. Works perfectly, no changes need

    const getSelectedNote = () => {
        return notes.find((note) => note.id === selectedNote)
      } 


    return (
        
        <div id="notes">
            <div></div>
            <div id='notes-overview'>
                <div id='notes-title-and-date'>
                    {/* Put {note.title}, {note.lastModified} here.
                     Add functions to change value of note.title and note.lastModified */}
                    <input type='text' id='notes-title' placeholder={getSelectedNote().title}></input>
                    <input type='datetime-local' id='notes-date' ></input>
                </div>
                <div id='notes-overview-seperation' ></div>
                <div id='notes-save-and-delete'>
                    <button className='notes-button' onClick={() => navigate(-1) }>Save</button> {/* As of right now this jsut goes back, but also deleted the notes in the sidebar */}
                    <button className='notes-button' onClick={() => propsFromLayout.deleteNote(selectedNote)}>Delete</button>
                </div> 
            </div>
            <div id='notes-editor'>
                <ReactQuill 
                    theme="snow" 
                    placeholder='Your note here'
                />
            </div>
        </div>
              
    );
  };
  
  export default NotesEdit;
  