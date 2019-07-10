import React, { Component } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import Register from './Register'

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }

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
        <button onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Welcome</h2>
          <button onClick={this.closeModal}>close</button>
          <div>Login </div>
          <form action="">
            <input type="text" placeholder="user name" name="user" />
            <br />
            <input type="text" placeholder="password" name="password" />
            <button>Login</button>
          </form>
          <h4>Not registered yet?... click on "Register"</h4>
          {/* <Link to="/register"> <button>Register</button></Link> */}
          <Register />
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
};