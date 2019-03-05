import React, { Component } from "react";
import api from "../../api";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "hashPass",
      profileimage: null,
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }
  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.firstname, this.state.description);

    // let data = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   username: this.state.username,
    //   password: this.state.password,
    //   email: this.state.email,
    //   profileimage: this.state.profileimage,
    //   university: this.state.university,
    //   institute: this.state.institute,
    //   country: this.state.country,
    //   state: this.state.state,
    //   city: this.state.city,
    //   specialization: this.state.specialization,
    //   status: this.state.status,
    //   age: this.state.age,
    //   gender: this.state.gender,
    //   social: this.state.social
    // };
    let formData = new FormData();
    formData.append("firstname", this.state.firstname);
    formData.append("lastname", this.state.lastname);
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    formData.append("email", this.state.email);
    formData.append("profileimage", this.state.profileimage);
    formData.append("university", this.state.university);
    formData.append("institute", this.state.institute);
    formData.append("country", this.state.country);
    formData.append("state", this.state.state);
    formData.append("city", this.state.city);
    formData.append("specialization", this.state.specialization);
    formData.append("status", this.state.status);
    formData.append("age", this.state.age);
    formData.append("gender", this.state.gender);
    formData.append("social", this.state.social);
    api
      .signup(formData)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
        this.setState({
          firstname: "",
          lastname: "",
          username: "",
          password: "",
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
          social: "",
          message: `Your profile '${this.state.username}' has been created`
        });
        setTimeout(() => {
          this.setState({
            message: null
          });
        }, 2000);
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  handleFileChange(e) {
    // takes care of image preview
    var selectedFile = e.target.files[0];
    var reader = new FileReader();
    var imgtag = document.getElementById("myimage");
    imgtag.title = selectedFile.name;
    reader.onload = function(e) {
      imgtag.src = e.target.result;
    };
    reader.readAsDataURL(selectedFile);
    // end of preview function
    this.setState({
      profileimage: e.target.files[0]
    });
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
      <div className="Signup">
        <h2>Signup</h2>
        <img
          id="myimage"
          src={
            this.state.test ||
            "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
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
            type="email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleInputChange("email", e)}
            valid={this.isEmailCorrect()}
            invalid={this.state.email.length > 0 && !this.isEmailCorrect()}
          />{" "}
          <br />
          Profile Image:{"/profile/"}
          <input type="file" onChange={e => this.handleFileChange(e)} /> <br />
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
            disabled={!this.isEmailCorrect() || !this.isPasswordStrong()}
            onClick={e => this.handleClick(e)}
          >
            Signup
          </button>
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    );
  }
}

export default Signup;
