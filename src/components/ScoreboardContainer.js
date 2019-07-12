import React from 'react';
import Scoreboard from './Scoreboard';
import {Link} from 'react-router-dom';

class ScoreboardContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Scores  (Please note, this scoreboard doesn't actually do anything, but you can click buttons. First to reach 10 wins!)</h1>
        <Scoreboard/>
        <Link to="/">Back to the homepage</Link>
      </div>
    );
  }
}

export default ScoreboardContainer;
