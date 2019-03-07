import React, { Component } from "react";
import api from "../../api";
import {
  Button,
  Label,
  Form,
  FormGroup,
  Container,
  FormFeedback
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //username: "",
      email: "",
      password: "",
      message: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLinkedin = this.handleLinkedin.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    api
      .login(this.state.email, this.state.password)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  handleLinkedin() {
    // let domain = (process.env.PRODUCTION) ? "" : "localhost/5000"
    // this.props.history.push(domain + "/auth/linkedin")
    api
      .loginWithLinkedin()
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }));
  }
  isEmailCorrect() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }
  isPasswordStrong() {
    return this.state.password.length >= 6;
  }

  render() {
    return (
      <div className="container Login">
      <h2>Login</h2> <br />
        <Container>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label> <br />
              <input
                value={this.state.email}
                onChange={this.handleInputChange}
                valid={this.isEmailCorrect()}
                invalid={this.state.email.length > 0 && !this.isEmailCorrect()}
                type="email"
                size="65"
                className="text-center"
                name="email"
                id="exampleEmail"
                placeholder="alice@gmail.com"
              />
              {/* The feedback is displayed when the input is valid */}
              <FormFeedback valid />
              {/* The feedback is displayed when the input is invalid */}
              <FormFeedback>This is not a valid email</FormFeedback>
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="password">Password</Label> <br />
              <input

                value={this.state.password}
                onChange={this.handleInputChange}
                valid={this.isPasswordStrong()}
                invalid={
                  this.state.password.length > 0 && !this.isPasswordStrong()
                }
                type="password"
                name="password"
                size="65"
                className="text-center"
              />
              {/* The feedback is displayed when the input is valid */}
              <FormFeedback valid />
              {/* The feedback is displayed when the input is invalid */}
              <FormFeedback>Password is too short</FormFeedback>
            </FormGroup>
            <br />
            <Button
              color="primary"
              disabled={!this.isEmailCorrect() || !this.isPasswordStrong()}
              onClick={e => this.handleClick(e)}
            >
              Login
            </Button>
            {""} <br /><br />or<br /><br />
          </Form>
          <Button color="primary" className="Linkedin-Login mt-2">
            <a href={api.service.defaults.baseURL + "/login/linkedin"}>
              Login with Linkedin
            </a>
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
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    );
  }
}

export default Login;
