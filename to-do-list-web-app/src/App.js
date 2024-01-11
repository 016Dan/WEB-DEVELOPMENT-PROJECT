import React, {useState} from 'react';
import Calendar  from 'react-calendar';
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="app-container">
      <header className="header"></header>
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
      <main className="content">
        <div className="box box1">
          <li className="text1">current task:</li>
        </div>
        <div className="box box2">
          <li>
            <p className="text2">
              <h2>Spark your Ikigai: Welcome to Inkigai</h2>
              <br />
              Make use of your Ikigai. Inkigai is purpose fuel, not just tasks.
              Focus with flow, identify what's important, and relish the moment.
              Experience the delight of well-done job.
              <br /> Forget about overwhelming complicated & never-ending tasks.
              Consider joy, simplicity, and focus. With the support of Inkigai,
              you may discover what is important, set deliberate priorities, and
              relish the sense of achievement.
              <br /> A All set for igniting your Ikigai? Come and be a part of
              an environment of aspirational, proactive, & purpose-driven people
              who are creating meaningful, fulfilling lives. Discover how to
              work with Inkigai such that it seems like playing in the future
              than a chore <br />
              Begin your journey through lkigai now. It's necessary to achieve
              important objectives instead of simply completing them.
            </p>
          </li>
        </div>
        <div className="calendar-container">
          <li className="text1">Calendar</li>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
