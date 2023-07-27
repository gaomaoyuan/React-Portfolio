import React from 'react';
import './style.css';
import './background.jpg';
import aboutme from './aboutme.jpg';

const About = () => (
  <div>
    <h1>About Me</h1>
    <img src={aboutme} alt="About me" className="aboutme-image" /> {/* add class here */}
    <p></p>
I am an innovative and experienced web developer with a background in computer science and over four years of professional experience. My passion lies in crafting efficient and user-friendly interfaces with clean, elegant code. I specialize in modern web technologies, including ReactJS, NodeJS, and MongoDB, and am always eager to explore new technologies and methods to push my boundaries.
 <br /><br />
I am always open to learning new techniques to stay at the forefront of modern web development. My work reflects my attention to detail, my understanding of the user experience, and my commitment to creating highly maintainable code.
  </div>
);

export default About;
