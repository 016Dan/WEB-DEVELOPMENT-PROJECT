// About.js
import React from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa"; // Import Font Awesome icons
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nolly Alvarado",
      role: "Team Member 1",
      imageUrl: "member-1.jpg",
      facebook: "https://www.facebook.com/dino0o0.saur",
      email: "nolly.alvarado17@gmail.com",
    },
    {
      id: 2,
      name: "Edan Raymundo",
      role: "Team Member 2",
      imageUrl: "member-2.jpg",
      facebook: "https://www.facebook.com/edanfher.raymundo",
      email: "edanraymundo@gmail.com",
    },
    {
      id: 3,
      name: "Jestro de Castro",
      role: "Team Member 3",
      imageUrl: "member-3.jpg",
      facebook: "https://www.facebook.com/JmDC1923/",
      email: "jm.decastro38@gmail.com",
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
              <div className="social-icons">

                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope />
                  </a>
                )}
              </div>
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
