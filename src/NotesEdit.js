import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NotesEdit({ selectedNote }) {

    return (
        
        <div id="notes">
            <div></div>
            <div id='notes-overview'>
                <div id='notes-title-and-date'>
                    {/* Put {note.title}, {note.lastModified} here.
                     Add functions to change value of note.title and note.lastModified */}
                    <input type='text' id='notes-title'></input>
                    <div id='notes-date'></div>
                </div>
                <div id='notes-overview-seperation' ></div>
                <div id='notes-save-and-delete'>
                    <button className='notes-button'>Save</button>
                    <button className='notes-button'>Delete</button>
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
  