import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import api from '../../api';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }
  deleteCountry(countryId){
    api.deleteCountry(countryId)
      .then(data => {
        this.setState({
          countries: this.state.countries.filter(c => c._id !== countryId),
          message: data.message
        })
        // Remove the message after 3 seconds
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 3000)
      })
  }
  render() {
    return (
      <div className="Projects">
        <h2>List of Projects</h2>
        {/* `c` represents the current country */}
        <ul>
          {this.state.projects.map(p => <li key={p._id}>
            {p.name}{p.date}
            {/* <Link to={"/countries/"+c._id}>Detail</Link>{' '}
            <Link to={"/edit-country/"+c._id}>Edit</Link>{' '}
            <button onClick={()=>this.deleteCountry(c._id)}>Delete</button> */}
          </li>)}
        </ul>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
  componentDidMount() {
    api.getProjects()
      .then(projects => {
        console.log(projects)
        this.setState({
          projects: projects
        })
      })
      .catch(err => console.log(err))
  }
}

export default Projects;