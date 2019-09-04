import React, { Component } from 'react'
import Modal from 'react-modal'
import Register from './Register'
import { connect } from 'react-redux'
import { userLogin } from '../actions/user'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      name: "",
      password: ""
    }
  }
  
  playerLogin = (e) => {
    e.preventDefault()
    const user = this.state
    console.log(user,"login?")
    this.props.userLogin(user.name, user.password)
    this.setState({
      name: "",
      password: "",
      modalIsOpen: false
    })
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
  if(!this.props.user.message){
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
            <input 
              type="text" 
              placeholder="user name" 
              name="name" 
              onChange={this.onChange}
              value={this.name}
            />
            <br />
            <input 
              type="text" 
              placeholder="password" 
              name="password" 
              onChange={this.onChange}
              value={this.password}
            />
            <button onClick={this.playerLogin}>Login</button>
          </form>
          <h4>Not registered yet?... click on "Register"</h4>
          {/* <Link to="/register"> <button>Register</button></Link> */}
          <Register />
        </Modal>
      </div>
    )
  }else{
    return <div>{this.props.user.message}</div>
  }
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDistatchToProps = { userLogin }

export default connect(mapStateToProps, mapDistatchToProps)(Login)