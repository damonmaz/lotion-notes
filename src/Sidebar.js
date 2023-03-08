import { Link } from "react-router-dom";


function Sidebar({ notes, addNote, selectedNote, setSelectedNote }) {

  return (
    <div id="sidebar-to-hide"> {/* Might have to replace this in the future, keeping for now. Hides the sidebar using same method as assignment 5 */}
      <div id="sidebar">
        <div id="add-notes">
          <div id="add-notes-left">
            <p className="p">Notes</p>
          </div>
          <div id="add-notes-right">
            <button className="button" onClick={addNote}>+</button>
          </div>
        </div>

        <div id="current-notes"> {/* This is where new notes will be created, deleted, and selected */}
          {notes.map((note) => ( 
            <div key={note.id}> {/* Put this here so I dont get an annoying error in console */}
              <Link to={`${note.id}`}>
              <div className={`sidebar-note ${note.id === selectedNote && "selected"}`} onClick={ () => setSelectedNote(note.id)}> {/* Div for actual note */}
                <div className="sidebar-note-title"><strong>{note.title}</strong></div>
                <div className="sidebar-note-metadata">Last modified {new Date(note.lastModified).toLocaleDateString("en-CA")}, {new Date(note.lastModified).toLocaleTimeString("en-CA")}</div> {/* This should until the note is updated */}
                <div className="sidebar-note-contents">{(note.body && note.body.substr(0, 100) + "...") || ("...")}</div>
              </div>
              </Link>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Sidebar; 