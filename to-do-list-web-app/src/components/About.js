// About.js

import React from "react";
import "./About.css"; 

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nolly Alvarado",
      role: "Team Member 1",
      imageUrl: "pusa.jpg", 
    },
    {
      id: 2,
      name: "Edan Raymundo",
      role: "Team Member 2",
      imageUrl: "pusa.jpg", 
    },
    {
      id: 3,
      name: "Jestro de Castro",
      role: "Team Member 3",
      imageUrl: "pusa.jpg", 
    },
  ];

  return (
    <div className="about-container">
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Craving delicious snacks without leaving campus? Dive into
          CampusCraveHub, your one-stop platform for exploring, ordering, and
          enjoying a vibrant marketplace of student-made culinary creations!
        </p>
        <p>
          CampusCraveHub is more than just a food app. It's a platform for
          convenience, connection, and community. Support your peers, explore
          diverse flavors, and fuel your studies - all within the tap of your
          finger.
        </p>
        <p>
          Welcome to CampusCraveHub, the TUP E-canteen where your cravings meet
          student dreams. We invite you to savor the taste of ambition, support
          your fellow students, and experience the future of campus dining.
        </p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.imageUrl} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; Campus Crave Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
