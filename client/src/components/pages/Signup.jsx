import React, { Component } from "react";
import api from "../../api";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "hashPass",
      email: "",
      profileimage: "",
      university: "",
      institute: "",
      country: "",
      state: "",
      city: "",
      specialization: "",
      status: "",
      age: "",
      gender: "",
      social: []
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
<<<<<<< HEAD

=======
>>>>>>> 3d50affc9bfac084ac430356dbdb9079e8253676
  }
  // handleInputChange(stateFieldName, event) {
  //   this.setState({
  //     [stateFieldName]: event.target.value
  //   });
  // }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    let data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      profileimage: this.state.profileimage,
      unversity: this.state.university,
      institute: this.state.institute,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      specialization: this.state.specialization,
      status: this.state.status,
      age: this.state.age,
      gender: this.state.gender,
      social: this.state.social
    };
    api
      .signup(data)
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

  isPasswordStrong(){
    return this.state.password.length >= 6
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          First Name:{" "}
          <input
            type="text"
            value={this.state.firstname}
            onChange={e => this.handleInputChange("firstname", e)}
          />{" "}
          <br />
          Last Name:{" "}
          <input
            type="text"
            value={this.state.lastname}
            onChange={e => this.handleInputChange("lastname", e)}
          />{" "}
          <br />
          Username:{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.handleInputChange("username", e)}
          />{" "}
          <br />
          Password:{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.handleInputChange("password", e)}
          />{" "}
          <br />
          Email:{" "}
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.handleInputChange("email", e)}
          />{" "}
          <br />
          Profile Image:{" "}
          <input
            type="text"
            value={this.state.profileimage}
            onChange={e => this.handleInputChange("profileimage", e)}
          />{" "}
          <br />
          University:{" "}
          <input
            type="text"
            value={this.state.university}
            onChange={e => this.handleInputChange("university", e)}
          />{" "}
          <br />
          Institute:{" "}
          <input
            type="text"
            value={this.state.institute}
            onChange={e => this.handleInputChange("institute", e)}
          />{" "}
          <br />
          Country:{" "}
          <input
            type="text"
            value={this.state.country}
            onChange={e => this.handleInputChange("country", e)}
          />{" "}
          <br />
          State:{" "}
          <input
            type="text"
            value={this.state.state}
            onChange={e => this.handleInputChange("state", e)}
          />{" "}
          <br />
          City:{" "}
          <input
            type="text"
            value={this.state.city}
            onChange={e => this.handleInputChange("city", e)}
          />{" "}
          <br />
          Specialization:{" "}
          <input
            type="text"
            value={this.state.specialization}
            onChange={e => this.handleInputChange("specialization", e)}
          />{" "}
          <br />
          Status:{" "}
          <input
            type="text"
            value={this.state.status}
            onChange={e => this.handleInputChange("status", e)}
          />{" "}
          <br />
          Age:{" "}
          <input
            type="text"
            value={this.state.age}
            onChange={e => this.handleInputChange("age", e)}
          />{" "}
          <br />
          Gender:{" "}
          <input
            type="text"
            value={this.state.gender}
            onChange={e => this.handleInputChange("gender", e)}
          />{" "}
          <br />
          Social:{" "}
          <input
            type="text"
            value={this.state.social}
            onChange={e => this.handleInputChange("social", e)}
          />{" "}
          <br />
          <button
          disabled={!this.isEmailCorrect() || !this.isPasswordStrong()} onClick={e => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    );
  }
}

export default Signup;