import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { createPlayer } from '../actions/player'
import superagent from 'superagent'

class Player extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }
  }

  makePlayer = (e) => {
    e.preventDefault()
    const newPlayer = this.state

    this.setState({
      title: ""
    })

    superagent
      .post(
        'https://wheel-of-fortune-server.herokuapp.com/players'
      )
      .send(newPlayer)
      .then(res => console.log('sumbitter', res))
      .catch(console.error)
    console.log('CREATE A NEW USER!!!')

  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  onChange = (e) => {
    console.log('event', e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Create a Player</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Pick a name for the player</h2>
          <button onClick={this.closeModal}>close</button>
          <form action="">
            <input
              type="text"
              placeholder="Player name"
              name="player"
              value={this.onChange} />
            <br />
            <button onClick={this.makePlayer}>save</button>
          </form>
        </Modal>
      </div>
    )
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  createPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)