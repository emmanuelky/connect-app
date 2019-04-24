import React, { Component } from "react";
import api from "../../api";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      university: "",
      institute: "",
      country: "",
      city: "",
      specialization: "",
      status: "",
      age: "",
      gender: "",
      social: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(stateKey, event) {
    this.setState({
      [stateKey]: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault(); // To not not submit the form and redirect the user to another page
    let {
      firstname,
      lastname,
      email,
      university,
      institute,
      country,
      city,
      specialization,
      status,
      age,
      gender,
      social
    } = this.state;

    api
      .editProfile(this.props.match.params.userId, {
        firstname,
        lastname,
        email,
        university,
        institute,
        country,
        city,
        specialization,
        status,
        age,
        gender,
        social
      })
      .then(data => {
        console.log("Yeah!!!!!", data);
        this.setState({
          message: data.message
        });
        // Remove of the message after 3 seconds
        setTimeout(() => {
          this.setState({
            message: "Your profile has been edited"
          });
        }, 2000);
      });
  }
  render() {
    return (
      <div className="container editProfile Signup p-5 m-3">
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          First Name*{" "}<br /><br />
          <input
          placeholder="Enter your firstname"
          size="35"
          className="text-center"
            type="text"
            value={this.state.firstname}
            onChange={e => {
              this.handleInputChange("firstname", e);
            }}
          />{" "}
          <br /><br />
          Last Name*{" "}<br />
          <input
          placeholder="Enter your lastname"
          size="35"
          className="text-center"
            type="text"
            value={this.state.lastname}
            onChange={e => {
              this.handleInputChange("lastname", e);
            }}
          />{" "}
          <br /><br />
          Email*{" "}<br />
          <input
          placeholder="Enter your email"
          size="35"
          className="text-center"
            type="text"
            value={this.state.email}
            onChange={e => {
              this.handleInputChange("email", e);
            }}
          />{" "}
          <br /><br />
          University*{" "}<br />
          <input
          placeholder="e.g BTU "
          size="35"
          className="text-center"
            type="text"
            value={this.state.university}
            onChange={e => {
              this.handleInputChange("university", e);
            }}
          />{" "}
          <br /><br />
          Institute*{" "}<br />
          <input
          placeholder="e.g Ironhack"
          size="35"
          className="text-center"
            type="text"
            value={this.state.institute}
            onChange={e => {
              this.handleInputChange("institute", e);
            }}
          />{" "}
          <br /><br />
          Country*{" "}<br />
          <input
          placeholder=""
          size="35"
          className="text-center"
            type="text"
            value={this.state.country}
            onChange={e => {
              this.handleInputChange("country", e);
            }}
          />{" "}
          <br /><br />
          City*{" "}<br />
          <input
          placeholder=""
          size="35"
          className="text-center"
            type="text"
            value={this.state.city}
            onChange={e => {
              this.handleInputChange("city", e);
            }}
          />{" "}
          <br /><br />
          Specialization*{" "}<br />
          <input
          placeholder="e.g fullstack developer"
          size="35"
          className="text-center"
            type="text"
            value={this.state.specialization}
            onChange={e => {
              this.handleInputChange("specialization", e);
            }}
          />{" "}
          <br /><br />
          Status*{" "}<br />
          <input
          placeholder=""
          size="35"
          className="text-center"
            type="text"
            value={this.state.status}
            onChange={e => {
              this.handleInputChange("status", e);
            }}
          />{" "}
          <br /><br />
          Age*{" "}<br />
          <input
          placeholder=""
          size="35"
          className="text-center"
            type="text"
            value={this.state.age}
            onChange={e => {
              this.handleInputChange("age", e);
            }}
          />{" "}
          <br /><br />
          Social Network Link*{" "}<br />
          <input
          placeholder=""
          size="35"
          className="text-center"
            type="text"
            value={this.state.social}
            onChange={e => {
              this.handleInputChange("social", e);
            }}
          />{" "}
          <br />
          <br />
          <br />
          <h6>
              <i>Fields marked* are required</i>{" "}
            </h6>
            <br />
         
          <button>Edit Profile</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    );
  }
}
