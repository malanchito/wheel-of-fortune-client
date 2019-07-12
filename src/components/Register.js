import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { createUser } from '../actions/user'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      name: "",
      password: ""
    }
  }

  makePlayer = (e) => {
    e.preventDefault()
    this.setState({
      name: "",
      password: ""
    })
    const user = this.state
    this.props.createUser(user.name, user.password)
    console.log('USER CREATED ')
    this.setState({ modalIsOpen: false })
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
            <input
              name="name"
              type="text"
              placeholder="Select a user name"
              onChange={this.onChange}
              value={this.name}
            />
            <br />
            <input
              name="password"
              type="text"
              placeholder="Select your password"
              onChange={this.onChange}
              value={this.password}
            />
            <button onClick={this.makePlayer}>Register</button>
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