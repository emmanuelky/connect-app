import React, { Component } from "react";
import api from "../../api";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

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
    // image preview
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
      <div className=" container Signup p-5">
        <h2>Signup</h2>
        <br />
        <br />
        <img
          className="rounded-circle"
          id="myimage"
          src={
            this.state.test ||
            "https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg"
          }
          width="150px"
          height="150px"
        />{" "}
        <br />
        <i>upload your picture</i>
        <br />
        <br />
        <div className="container justify-content-center">
          <Form>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="profileimage">Profile Image*</Label>
                  <input type="file" onChange={e => this.handleFileChange(e)} />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="firstname">First Name* </Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    type="text"
                    value={this.state.firstname}
                    onChange={e => this.handleInputChange("firstname", e)}
                  />{" "}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="lastname">Last Name* </Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    type="text"
                    value={this.state.lastname}
                    onChange={e => this.handleInputChange("lastname", e)}
                  />{" "}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email* </Label> <br />
                  <input
                    className="text-center form-control"
                    type="email"
                    name="email"
                    size="55"
                    value={this.state.email}
                    onChange={e => this.handleInputChange("email", e)}
                    valid={this.isEmailCorrect()}
                    invalid={
                      this.state.email.length > 0 && !this.isEmailCorrect()
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            {/* <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup> */}
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="username">Username*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    type="text"
                    value={this.state.username}
                    onChange={e => this.handleInputChange("username", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="password">Password*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    type="password"
                    value={this.state.password}
                    onChange={e => this.handleInputChange("password", e)}
                  />{" "}
                  <br />(<i>atleast 6 characters</i>)
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="university">University</Label>
                  <input
                    className="text-center form-control"
                    placeholder="BTU cottbus"
                    size="25"
                    type="text"
                    value={this.state.university}
                    onChange={e => this.handleInputChange("university", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="email">Institute</Label>
                  <br />
                  <input
                    className="text-center form-control"
                    size="25"
                    placeholder="e.g ironhack"
                    type="text"
                    value={this.state.institute}
                    onChange={e => this.handleInputChange("institute", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="Specialization">Specialization*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    placeholder="Frontend Developer"
                    type="text"
                    value={this.state.specialization}
                    onChange={e => this.handleInputChange("specialization", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="status">Current Status*</Label> <br />
                  <select
                    className="form-control"
                    onChange={e => this.handleInputChange("status", e)}
                  >
                    <option value="alumni">Alumni</option>
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="country">Country*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    type="text"
                    value={this.state.country}
                    onChange={e => this.handleInputChange("country", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="state">State*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    type="text"
                    value={this.state.state}
                    onChange={e => this.handleInputChange("state", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="city">City*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    type="text"
                    value={this.state.city}
                    onChange={e => this.handleInputChange("city", e)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="age">Age</Label> <br />
                  <input
                    className="text-center form-control"
                    size="15"
                    type="number"
                    value={this.state.age}
                    onChange={e => this.handleInputChange("age", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="Gender">Gender*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    placeholder="male or female"
                    type="text"
                    value={this.state.gender}
                    onChange={e => this.handleInputChange("gender", e)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="social">Social Network*</Label>
                  <input
                    className="text-center form-control"
                    size="25"
                    placeholder="linkedin or xing"
                    type="text"
                    value={this.state.social}
                    onChange={e => this.handleInputChange("social", e)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <h6>
              <i>Fields marked* are required</i>{" "}
            </h6>
            <br />
            <br />
            <Button
              disabled={!this.isEmailCorrect() || !this.isPasswordStrong()}
              onClick={e => this.handleClick(e)}
            >
              Signup
            </Button>

            {this.state.message && (
              <button className="info info-danger">{this.state.message}</button>
            )}
          </Form>

          {/* <form>
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
        )} */}
        </div>
      </div>
    );
  }
}

export default Signup;
