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
    <div>
      <h2>About</h2>
        <p className=" text-3">
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
    </div>
  );
};

export default About;
