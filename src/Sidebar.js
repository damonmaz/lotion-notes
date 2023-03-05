function Sidebar() {
  return (
    <div id="sidebar">
      <div id="add-notes">
        <div id="add-notes-left">
          <p class="p">Notes</p>
        </div>
        <div id="add-notes-right">
          <button class="button">+</button>
        </div>
      </div>
      <div id="current-notes"> {/* This is where new notes will be created, deleted, and selected */}
      </div>
    </div>
  )
};

export default Sidebar;