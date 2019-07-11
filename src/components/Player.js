import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { createPlayer } from '../actions/player'

class Player extends Component {
  state = {
    modalIsOpen: false,
    name: ""
  }

  makePlayer = (e) => {
    e.preventDefault()
    this.setState({
      name: ""
    })
    this.props.createPlayer(this.state.name)
    console.log('PLAYER CREATED ')
    this.setState({ modalIsOpen: false });
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
              name="name"
              type="text"
              placeholder="Player name"
              onChange={this.onChange}
              value={this.name} />
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
    user: state.user,
    player: state.player
  }
}

const mapDispatchToProps = {
  createPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)