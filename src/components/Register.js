import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { createUser } from '../actions/user'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
  }

  componentDidMount() {
    this.props.createUSer()
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

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Register</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>enter your credentials please</h2>
          <button onClick={this.closeModal}>close</button>
          <form action="">
            <input type="text" placeholder="user name" name="user" />
            <br />
            <input type="text" placeholder="password" name="password" />
            <button>Register</button>
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

const mapDistatchToProps = { createUser }
export default connect(mapStateToProps, mapDistatchToProps)(Register)