import React, { Component } from 'react'
import api from '../../api';

export default class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      profileimage: "",
      university: "",
      institute: "",
      country: "",
      city: "",
      specialization: "",
      status: "",
      age: "",
      gender: "",
      social: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(stateKey, event){
    this.setState({
      [stateKey]: event.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault() // To not not submit the form and redirect the user to another page

    api.editProfile(this.props.match.params.profileId, {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      profileimage: this.state.profileimage,
      university: this.state.university,
      institute: this.state.institute,
      country: this.state.country,
      city: this.state.city,
      specialization: this.state.specialization,
      status: this.state.status,
      age: this.state.age,
      gender: this.state.gender,
      social: this.state.social
    })
      .then(data => {
        console.log("Yeah!!!!!", data)
        this.setState({
          message: data.message
        })
        // Remove of the message after 3 seconds
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 3000)
      })
  }
  render() {
    return (
      <div className="editProfile">
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          First Name: <input type="text" value={this.state.firstname} onChange={(e) => { this.handleInputChange("firstname", e) }} /> <br />
          Last Name: <input type="text" value={this.state.lastname} onChange={(e) => { this.handleInputChange("lastname", e) }} /> <br />
          Email: <input type="text" value={this.state.email} onChange={(e) => { this.handleInputChange("email", e) }} /> <br />
          Profile Image: <input type="text" value={this.state.profileimage} onChange={(e) => { this.handleInputChange("profileimage", e) }} /> <br />
          University: <input type="text" value={this.state.university} onChange={(e) => { this.handleInputChange("university", e) }} /> <br />
          Institute: <input type="text" value={this.state.institute} onChange={(e) => { this.handleInputChange("institute", e) }} /> <br />
          Country: <input type="text" value={this.state.country} onChange={(e) => { this.handleInputChange("country", e) }} /> <br />
          City: <input type="text" value={this.state.city} onChange={(e) => { this.handleInputChange("city", e) }} /> <br />
          Specialization: <input type="text" value={this.state.specialization} onChange={(e) => { this.handleInputChange("specialization", e) }} /> <br />
          Status: <input type="text" value={this.state.status} onChange={(e) => { this.handleInputChange("status", e) }} /> <br />
          Age: <input type="text" value={this.state.age} onChange={(e) => { this.handleInputChange("age", e) }} /> <br />
          Gender: <input type="text" value={this.state.gender} onChange={(e) => { this.handleInputChange("gender", e) }} /> <br />
          Social: <input type="text" value={this.state.social} onChange={(e) => { this.handleInputChange("social", e) }} /> <br /> 
          
          <button>Edit Profile</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    )
  }
//   componentDidMount(){
//     api.getCountryDetail(this.props.match.params.countryId)
//       .then(country => {
//         this.setState({
//           name: country.name,
//           capitals: country.capitals,
//           area: country.area,
//           description: country.description,
//         })
//       })
//   }
}
