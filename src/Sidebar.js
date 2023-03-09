import { Link } from "react-router-dom";


function Sidebar({ notes, addNote, selectedNote, setSelectedNote }) {

  const titleLengthChecker = (title) => {
    if(title.length > 15) {return "..."};
    return "";
  };

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
              <Link to={`/notes/${note.id}`}>
              <div className={`sidebar-note ${note.id === selectedNote && "selected"}`} onClick={ () => setSelectedNote(note.id)}> {/* This is so messed up that I am unable to change the selected note class without clicking, or it breaks everything */}
                <div className="sidebar-note-title" dangerouslySetInnerHTML={{ __html: note.title.substr(0,15) + titleLengthChecker(note.title)}}></div>
                <div className="sidebar-note-metadata">Last modified {new Date(note.lastModified).toLocaleDateString("en-CA")}, {new Date(note.lastModified).toLocaleTimeString("en-CA")}</div> 
                <div className="sidebar-note-contents" dangerouslySetInnerHTML={{ __html: note.body && (`${note.body.substr(0, 25)}...`) || "..."}}></div>
                {/* <div className="sidebar-note-contents" >{(note.body && note.body.substr(0, 100) + "...") || ("...")}</div> */}
                {/* dangerouslySetInnerHTML={{ __html: selectedNote.body}} */}
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