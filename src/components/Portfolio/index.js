import React from 'react';
import './style.css';
import ledWall from './LED WALL.jpeg';
import calculator from './calculator.jpeg';
import pastelPuzzle from './pastel puzzle.jpeg';
import runBuddy from './run buddy.png';

const Portfolio = () => (
  <div className="portfolio-grid">
    <h1>My Portfolio</h1>
    <p></p>
    <img className="portfolio-image" src={ledWall} alt="LED Wall" />
    <img className="portfolio-image" src={calculator} alt="Calculator" />
    <img className="portfolio-image" src={pastelPuzzle} alt="Pastel Puzzle" />
    <img className="portfolio-image" src={runBuddy} alt="Run Buddy" />
  </div>
);

export default Portfolio;
