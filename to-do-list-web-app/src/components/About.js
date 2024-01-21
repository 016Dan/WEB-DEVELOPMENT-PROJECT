import React from "react";
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      name: "Edan Raymundo",
      image: "john.jpg",
      description: "BSIT-NS-3A",
    },
    {
      name: "Nolly Alvarado",
      image: "jane.jpg",
      description: "BSIT-NS-3A",
    },
    {
      name: "Jestro de Castro",
      image: "jane.jpg",
      description: "BSIT-NS-3A",
    },
  ];

  return (
    <div>
      <h2>About</h2>
      <p className="text-3"> 
      <br />
        Craving delicious snacks without leaving campus? Dive into
        CampusCraveHub, your one-stop platform for exploring, ordering, and
        enjoying a vibrant marketplace of student-made culinary creations!
        <br />
        Here's where TUP students become micro-entrepreneurs, unleashing their
        inner chefs and sharing their passion for food. Discover homemade
        delights, baked goods with love, and quick bites that fuel your day.
        <br />
        CampusCraveHub is more than just a food app. It's a platform for
        convenience, connection, and community. Support your peers, explore
        diverse flavors, and fuel your studies - all within the tap of your
        finger.
        <br />
        Welcome to CampusCraveHub, the TUP E-canteen where your cravings meet
        student dreams. We invite you to savor the taste of ambition, support
        your fellow students, and experience the future of campus dining.
        <br />
        #CampusCraveHub #TUPEats #Tupians #CommunityEats
        </p>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-photo"
              />
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p className="team-member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;