import React from 'react';
import Player from './Blep';


  class Scoreboard extends React.Component {
    constructor() {
      super();

      this.state = {
        message: "There are no scores yet.",
        players: [
          { name: "Jelle", score: 0},
          { name: "Mario", score: 0 },
          { name: "Marlon", score: 0 },
          { name: "You", score: 0 }
        ]
      };
    }
    onChangeScore(name, score) {
        // create a new list of player by looping over the existing list
        // and replacing the player we want to change the score for
        var oldPlayers = this.state.players;
        var newPlayers = oldPlayers.map(function(player){
          if(player.name === name){
            return {
              name: player.name,
              score: score
            }
          }

            return player;
        });

        this.setState({
            message: name + " scored and has " + score + " points.",
            players: newPlayers
        });
    }

    renderPlayer(player) {
      return <Player
        name={player.name}
        score={player.score}
        onChange={this.onChangeScore.bind(this)}
        />;
    }

      render() {
          return (
            <div>
              <table>
                <thead>
                  <tr>
                    <td><b>Name</b></td>
                    <td><b>Score</b></td>
                  </tr>
                </thead>

                 <tbody>
                    {this.state.players.map(this.renderPlayer.bind(this))}
                 </tbody>

                 <tfoot>
                   <tr>
                      <td colSpan="3">{this.state.message}</td>
                   </tr>
                   <tr>
                   </tr>
                 </tfoot>
             </table>
            </div>
          );
      }
  }

  export default Scoreboard;
