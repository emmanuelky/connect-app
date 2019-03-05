import React, { Component } from "react";
import api from "../../api";
import Search from "./Search";
import { Link } from "react-router-dom";

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

  deleteProject(_creator) {
    api.deleteProject(_creator).then(data => {
      this.setState({
        _creator: this.state._creator.filter(c => c._id !== _creator),
        message: data.message
      });
      // Remove the message after 3 seconds
      setTimeout(() => {
        this.setState({
          message: null
        });
      }, 3000);
    });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value.substr(0, 20)
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
    let uppersearch = this.state.search.toUpperCase();
    let filteredProjects = this.state.projects;

    return (
      <div className="container col-md-18 mb-12">
        <div>
          <h2 className="m-5 p-3 mb-2 bg-dark text-white rounded">
            View All Projects
          </h2>{" "}
          <Search value={this.state.search} onSearch={this.handleSearch} />
          <hr />
        </div>
        <div className="projects col-md-18 mb-12 border border-white rounded-left shadow p-3 mb-5 bg-white rounded">
          <ul className="d-flex col-md-18 mb-12 flex-wrap card-group">
            {filteredProjects
              .filter((project, i) => {
                if (
                  project.name.toLowerCase().includes(lowerSearch, uppersearch)
                )
                  return true;
                for (let i = 0; i < project.technologyused.length; i++) {
                  if (
                    project.technologyused[i].includes(lowerSearch, uppersearch)
                  )
                    return true;
                }
                return false;
              })
              .map((p, i) => (
                <div className="d-flex ">
                  <div className="card mr-2 m-2 shadow-lg p-3 mb-5 bg-white rounded">
                    <li key={p.i} className="">
                      <img
                        className="grow"
                        src={p.projectimage}
                        width="100px"
                        height="100px"
                      />{" "}
                      <br />
                      <div className="card-body">
                        <strong>
                          {" "}
                          <h6 className="card-title font-weight-bold">
                            {" "}
                            {p.name}
                          </h6>
                        </strong>
                        <strong> Description: </strong>
                        <pre className="card-text">
                          {" "}
                          <i> {p.description} </i>
                        </pre>
                        <strong className="font-weight-bold">
                          Technology(s) used:
                        </strong>{" "}
                        <pre>{p.technologyused} </pre>
                        <a href={p.projectlink} target="_blank">
                          Demo Link{" "}
                        </a>
                        <br />
                        <a href={p.githublink} target="_blank" className="grow">
                          Github
                        </a>
                        <br />
                        <strong>Creator:</strong>{" "}
                        <h6 className="card-title"> {p.username}</h6>{" "}
                        <pre>
                          {" "}
                          <Link to={"/profile/" + p.username}>
                            About Me
                          </Link>{" "}
                        </pre>
                        <pre>
                          <i>
                            {" "}
                            <span className="card-text"> {p.date}</span>{" "}
                          </i>
                        </pre>
                      </div>
                      <i class="fas fa-code" /> <i class="fas fa-laptop-code" />
                      
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
