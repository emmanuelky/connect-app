import React, { Component } from "react";
import api from "../../api";
import Search from "./Search";
import { Link } from "react-router-dom";
import { SSL_OP_NO_TLSv1_1 } from "constants";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technologyused: "",
      projects: [],
      nbOfLikes: 0,
      search: ""
    };
    this.colors = ["blue", "green"];

    this.handleClick = this.handleClick.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      nbOfLikes: prevState.nbOfLikes + 1
    }));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value.substr(0,20)
    });
  }

  handleSearch(searchValue) {
    this.setState({
      search: searchValue
    });
  }

  render() {
    let colorIndex = this.state.nbOfLikes % this.colors.length;
    

    let lowerSearch = this.state.search.toLowerCase();
    let filteredProjects = this.state.projects;

    return (
      <div>
        <div>
          <h2 className="m-5 p-3 mb-2 bg-dark text-white rounded">
            View All Projects
          </h2>{" "}
          <Search value={this.state.search} onSearch={this.handleSearch} />
          <hr />
        </div>
        <div className="projects border border-white rounded-left shadow p-3 mb-5 bg-white rounded">
          <ul className="d-flex flex-wrap card-group">
            {filteredProjects
              .filter(project =>
                project.name.toLowerCase().includes(lowerSearch),
                
              )
              .map((p, i) => (
                <div className="d-flex flex-wrap">
                  <div className="card mr-5 m-1 shadow-lg p-3 mb-5 bg-white rounded">
                    <li key={p.i}>
                      <img
                        className=""
                        src={p.projectimage}
                        width="244px"
                        height="180px"
                      />{" "}
                      <br />
                      <div className="card-body">
                        <strong>
                          {" "}
                          <h6 className="card-title"> {p.name}</h6>
                        </strong>
                        <strong> Description: </strong>
                        <p className="card-text">
                          {" "}
                          <i> {p.description} </i>
                        </p>
                        <i> by: </i>{" "}
                        <h5 className="card-title"> {p.username}</h5>
                        <pre>
                          <i>Technology Used: {p.technologyused}</i>{" "}
                        </pre>
                        <pre>
                          <i>
                            {" "}
                            <p className="card-text"> {p.date}</p>{" "}
                          </i>
                        </pre>
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
