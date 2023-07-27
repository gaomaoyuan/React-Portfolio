import React from 'react';
import './style.css';
import GitHub from './GitHub.jpg';
import LinkedIn from './LinkedIn.jpg';
import StackOverflow from './StackOverflow.jpg';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img className="app" src={GitHub} alt="GitHub"/>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img className="app" src={LinkedIn} alt="LinkedIn"/>
      </a>
      <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
        <img className="app" src={StackOverflow} alt="StackOverflow"/>
      </a>
    </footer>
  );
}

export default Footer;
