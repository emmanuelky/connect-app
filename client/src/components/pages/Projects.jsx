import React, { Component } from "react";
import api from "../../api";
import Search from './Search'
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      nbOfLikes: 0,
      search: 's'
    };
    this.colors = ["blue", "green"];

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      nbOfLikes: prevState.nbOfLikes + 1
    }));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSearch(searchValue) {
    this.setState({
      search: searchValue
    })
  }


  render() {
    let lowerSearch = this.state.search.toLowerCase()
    let colorIndex = this.state.nbOfLikes % this.colors.length;
    return (
      <div>
        <div>
          <h2 className="m-5 p-3 mb-2 bg-dark text-white rounded">
            View All Projects
          </h2>{" "}
          <input
            type="text"
            className="input"
            placeholder="react, vue"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
          />
          <button className="button is-primary">Search by Technology Used</button>
          <hr />
        </div>
        <div className="projects border border-white rounded-left shadow p-3 mb-5 bg-white rounded">
          <ul className="d-flex flex-wrap ">
            {this.state.projects.map((p, i) => (
              <div className=" d-flex flex-wrap">
                <div className="card m-4 shadow-lg p-3 mb-5 bg-white rounded">
                  <li key={i}>
                    <img
                      className="projectImage"
                      src={p.projectimage}
                      width="100px"
                      height="100px"
                    />{" "}
                    <br />
                    <div className="card-body">
                      <h6 className="card-title"> {p.name}</h6>
                      <br />
                      <p className="card-text"> <i> {p.description} </i></p> <br />
                      <p className="card-text"> {p.date}</p> <br />
                      <h5 className="card-title"> {p.username}</h5>

                    </div>
                    <button
                      className="rounded"
                      onClick={this.handleClick}
                      style={{
                        backgroundColor: this.colors[colorIndex],
                        color: "white"
                      }}
                    >
                      {this.state.nbOfLikes} Like
                      {this.state.nbOfLikes !== 1 && "s"}
                    </button>
                  </li>
                </div>
              </div>
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
export default Projects;
