import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Login />
      <Link to='/game'>Try your luck</Link>
      </div>
    )
  }
}
