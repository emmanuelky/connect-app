import React, { Component } from "react";
import api from '../../api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
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


  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>

        <h2>List of Projects</h2>
        
        <ul>
          {this.state.projects.map(p => (
            <li key={p._id}>
            
              {p.name} 
            </li>
          ))}
        </ul>
       
      </div>
    );
  }
}

export default Home;
