import React from 'react';

  class Player extends React.Component {
    constructor(){
        super();
    }

      plusOne() {
        this.props.onChange(this.props.name,  this.props.score + 1);
      }

      renderPrize() {
        if(this.props.score >= 10) {
          return <img src="http://goo.gl/u1KKqp" />
        }
        return null;
      }

      render() {
        return (
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.score} {this.renderPrize()}</td>
            <td>
                <button onClick={this.plusOne.bind(this)}>+1</button>
            </td>
          </tr>
        );
      }
  }

  export default Player;