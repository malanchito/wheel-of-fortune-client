import React from 'react';
import {Link} from 'react-router-dom';
// import './Home.css'

class Tutorial extends React.Component {
  render() {
    return (
      <div className="tutorial">
        <h1>Tutorial</h1>
        <p>Make an account, choose your name and log in.</p>
        <p>The game works by spinning the wheel, choosing a category and guessing the word by picking a letter. Choose wisely, or else you will lose your turn.</p>
        <p>Good luck and have fun :)!</p>
        <Link to="/">Back to the homepage</Link>
      </div>
    );
  }
}

export default Tutorial;