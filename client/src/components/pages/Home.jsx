import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: []
    };
  }

  componentDidMount() {
    api
      .getProfile()
      .then(user => {
        console.log(user);
        this.setState({
          profile: user
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Home">
        <h2>Top 10 Recent Projects</h2>
        <div>
          <ul>
            {this.state.projects.map(p => (
              <li key={p._id}>
                <Link to="/projects">
                  {" "}
                  <img className="projectImage" src={p.projectimage} />{" "}
                </Link>{" "}
                <br />
                Project Name: {p.name} <br />
                Technology Used: {p.technologyused} <br /> Date Added: {p.date}{" "}
                <br />
                <br />
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
        {this.state.message && <div className="info">{this.state.message}</div>}
        {/* <ul>
          {this.state.projects.map(p => <li key={p._id}>
            {p.name}{p.date} 
            <div >
              <img className="projectImage" src={p.projectimage} alt=""/>
            </div>
          {/* </li>)}
        </ul>
        {this.state.message && <div className="info">
        
          {this.state.message} 
        </div>*/}
      </div>
    );
  }
  componentDidMount() {
    api
      .getProjects()
      .then(projects => {
        console.log(projects);
        this.setState({
          projects: projects
        });
      })
      .catch(err => console.log(err));
  }
}
export default Home;
