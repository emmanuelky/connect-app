import React, { Component } from 'react'
import api from '../../api';

export default class SuccessLogin extends Component {
  render() {
    return (
      <div>
        <h1>Success!!!</h1>
        <h2>Welcome Back</h2>
        <p>You will be redirected to your profile in 5 seconds</p>
      </div>
    )
  }
  componentDidMount() { 
    api.getConnectedProfile()
      .then(user => {
        setTimeout(() => {
          // Redirect the user the "/profile"
          this.props.history.push('/profile')
        }, 3000)
      })
  }
}