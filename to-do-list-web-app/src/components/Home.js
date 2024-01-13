import React, { useState } from "react";
import Calendar from "react-calendar";

const Home = () => {
   const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="app-container">
      <main className="content">
        <div className="box box1">
        </div>
        <div className="box box2">
          <li>
            <p className="text1">
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
          <li className="text3">Calendar</li>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default Home;
