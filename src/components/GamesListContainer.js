import React from 'react'
import {loadGames,newGame} from '../actions/game'
import {connect} from 'react-redux'

class GamesListContainer extends React.Component {

  componentDidMount() {
    this.props.newGame(this.props.jwt,this.props.user)
  }

  onChange = (event) => {
    //this.props.joinGame(this.props.user,this.props.jwt)
  }

  onSubmit = (event) => {
    //this.props.startGame(this.props.user,this.props.jwt)
  }

  render() {
    if(!this.props.games){
        return "loading games"
    }else{
      console.log(this.props.games+"aha")
      return "hello"
    }
                  
  }
}

const mapStateToProps = state => ({
  games: state.games
})

const mapDispatchToProps = {loadGames,newGame}

export default connect(mapStateToProps, mapDispatchToProps)(GamesListContainer)
