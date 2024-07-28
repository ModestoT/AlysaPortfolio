import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav-bar">
      <a href="/" className="home-btn">
        <h1>Alysa Punjwani</h1>
      </a>
      <div className="flex">
        <a href="/" className="nav-bar-item">
          <p>EXPERIENCE</p>
        </a>
        <a href="/" className="nav-bar-item">
          <p>EDUCATION</p>
        </a>
        <a href="/" className="nav-bar-item">
          <p>CERTIFICATIONS</p>
        </a>
        <a href="/" className="nav-bar-item">
          <p>SOFTWARE</p>
        </a>
        <a href="/" className="nav-bar-item">
          <p>CONTACT</p>
        </a>
        <a href="/" className="nav-bar-item">
          <p>PORTFOLIO</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
