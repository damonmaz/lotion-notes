function Header() {
    function sidebarToggle() {
      let sidebar = document.getElementById("sidebar-to-hide");
      
      if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        } 
        else {
          sidebar.style.display = "none";
        }
      return sidebar.style.display;
    };
    
    return (
    <header id="header">
      <div id="enable-sidebar">
       <button className="button" onClick={sidebarToggle}>≡</button> 
      </div>
      <div id="title-lotion">
        <h1 id="title-lotion-title">Lotion</h1>
        <p id="title-lotion-subtext">Like Notion, but worse</p>
      </div>
      <div id="keep-lotion-center"></div>
    </header>
    );
  };
  
  export default Header;
  