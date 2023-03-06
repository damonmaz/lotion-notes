import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NotesView({ selectedNote }) {

    return (
        
        <div id="notes">
            <div id='notes-overview'>
                <div id='notes-title-and-date'>
                    {/* Put {note.title}, {note.lastModified} here.
                     Add functions to change value of note.title and note.lastModified */}
                    <div id='notes-title'>THIS IS WHERE THE TITLE WILL GO</div>
                    <div id='notes-date'>THIS IS WHERE THE DATE WILL GO</div>
                </div>
                <div id='notes-overview-seperation' ></div>
                <div id='notes-save-and-delete'>
                    <button className='notes-button'>Edit</button>
                    <button className='notes-button'>Delete</button>
                </div> 
            </div>
            <div id='notes-editor'>
                THIS IS WHERE THE VIEW NOTES WILL GO
            </div>
        </div>
              
    );
  };
  
  export default NotesView;
  