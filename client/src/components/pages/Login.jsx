import React, { Component } from 'react';
import api from '../../api';
import {Button, Label, Input, Form, FormGroup, Container,FormFeedback } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // username: "",
      email: "",
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    api.login(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  handleLinkedin(){
    // let domain = (process.env.PRODUCTION) ? "" : "localhost/5000"
    // this.props.history.push(domain + "/auth/linkedin")
    api.loginWithLinkedin()
    .then(result => {
      console.log('SUCCESS!')
      this.props.history.push("/") // Redirect to the home page
    })
    .catch(err => this.setState({ message: err.toString() }))
  }
  isEmailCorrect() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }
  isPasswordStrong(){
    return this.state.password.length >= 6
  }

  render() {
    return (
      <div className="Login">
      <Container>
        <Form>
          <FormGroup>
          <Label for="email">Email</Label>
              <Input 
                value={this.state.email} 
                onChange={this.handleInputChange} 
                valid={this.isEmailCorrect()}
                invalid={this.state.email.length > 0 && !this.isEmailCorrect()}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="alice@gmail.com" />
                {/* The feedback is displayed when the input is valid */}
              <FormFeedback valid></FormFeedback>
              {/* The feedback is displayed when the input is invalid */}
              <FormFeedback>This is not a valid email</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input 
                value={this.state.password} 
                onChange={this.handleInputChange} 
                valid={this.isPasswordStrong()}
                invalid={this.state.password.length > 0 && !this.isPasswordStrong()}
                type="password"
                name="password"/>
                {/* The feedback is displayed when the input is valid */}
              <FormFeedback valid></FormFeedback>
              {/* The feedback is displayed when the input is invalid */}
              <FormFeedback>Password is too short</FormFeedback>
          </FormGroup>
          <Button 
                color="primary" 
                disabled={!this.isEmailCorrect() || !this.isPasswordStrong()}
                onClick={(e) => this.handleClick(e)}>
                Login 
              </Button>
              {''} <br/>
              
        </Form>
        <Button color="primary" className="Linkedin-Login mt-2">
         <a href="http://localhost:5000/api/login/linkedin">Login with Linkedin</a>
         </Button>
      </Container>
        {/* <h2>Login</h2>
        <form>
          Username: <input type="text" value={this.state.username} onChange={(e) => this.handleInputChange("username", e)} /> <br />
          Password: <input type="password" value={this.state.password} onChange={(e) => this.handleInputChange("password", e)} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Login</button>
        <br/>
         <a href="http://localhost:5000/api/login/linkedin">Login with Linkedin</a>
        </form> */}
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default Login;
