import PopulateSidebar from "./PopulateSidebar";

function Sidebar() {
  return (
    <div id="sidebar-to-hide">
      <div id="sidebar">
        <div id="add-notes">
          <div id="add-notes-left">
            <p class="p">Notes</p>
          </div>
          <div id="add-notes-right">
            <button class="button" onClick={PopulateSidebar}>+</button>
          </div>
        </div>
        <div id="current-notes"> {/* This is where new notes will be created, deleted, and selected */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;