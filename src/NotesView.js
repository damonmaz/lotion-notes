import 'react-quill/dist/quill.snow.css';
import { Link, useParams, useOutletContext, useNavigate } from "react-router-dom";


function NotesView() {
    const propsFromLayout = useOutletContext();

    var notes = propsFromLayout.notes; // An array of all of the notes objects. 
    var selectedNote = propsFromLayout.selectedNote; // The currently selected note. Works perfectly, no changes need

    const getSelectedNote = () => {
        return notes.find((note) => note.id === selectedNote)
    } 

    const locale = 'en-CA';

    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };

    //console.log(notes);
    //console.log(notes[0].title)
    //console.log(selectedNote);

    return (
        <div id="notes">
            <div id='notes-overview'>
                <div id='notes-title-and-date'>
                    <div id='notes-title'><p id='p'>{getSelectedNote().title}</p></div>
                    <div id='notes-date'>{new Date(getSelectedNote().lastModified).toLocaleDateString(locale, options)}, {new Date(getSelectedNote().lastModified).toLocaleTimeString("en-CA")}</div>
                </div>
                <div id='notes-overview-seperation' ></div>
                <div id='notes-save-and-delete'>

                    <Link to={`edit`}>
                        <button className='notes-button'>Edit</button>
                    </Link>

                    <button className='notes-button' onClick={() => propsFromLayout.deleteNote(selectedNote)}>Delete</button>

                </div> 
            </div>
            <div id='notes-editor'>
                {getSelectedNote().body}
            </div>
        </div>
    );
  };
  
  export default NotesView;
  