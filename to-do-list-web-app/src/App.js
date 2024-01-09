import './App.css';

function App() {
  return (
  <div className="app-background">
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li className="navbar-link">
            <a href="/">HOME</a>
          </li>
          <li className="navbar-link">
            <a href="/tasks">TASK</a>
          </li>
          <li className="navbar-link">
            <a href="/contact">CONTACT US</a>
          </li>
          <li className="navbar-link">
            <a href="/about">ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="body-box">
      <h1>Hello World!</h1>
    </div>
    </div>
  );
}

export default App;