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
        <div className="projects d-flex flex-wrap card-group shadow-lg p-2 mb-3 bg-light rounded">
          <div className=" row justify-content-center">
            {filteredProjects
              .filter((project, i) => {
                {/* if (
                  project.name.toLowerCase().includes(lowerSearch, uppersearch)
                )
                  return true; */}
                for (let i = 0; i < project.technologyused.length; i++) {
                  if (
                    project.technologyused[i].includes(lowerSearch, uppersearch)
                  )
                    return true;
                }
                return false;
              })
              .map((p, i) => (
                <div className="col-sm-4 justify-content-center card-group">
                  <div className="p-2 shadow-lg p-3 mb-5 bg-light rounded card">
                    <img
                      className="grow card-img-top"
                      src={p.projectimage}
                      // width="10px"
                      // height="100px"
                    />{" "}
                    <div className="card-body ">
                      <strong>
                        {" "}
                        <h6 className="card-text font-weight-bold">
                          {" "}
                          {p.name}
                        </h6>
                      </strong>
                      <strong className="card-text">Brief Description: </strong>
                      <pre className="card-text">
                        {" "}
                        <i> {p.description} </i>
                      </pre>
                      <strong className="font-weight-bold card-text">
                        Technology(s) used:
                      </strong>{" "}
                      <pre className="card-text">{p.technologyused} </pre>
                      <a
                        className="card-text"
                        href={p.projectlink}
                        target="_blank"
                      >
                        Demo Link{" "}
                      </a>
                      <br />
                      <a
                        href={p.githublink}
                        target="_blank"
                        className="grow card-text"
                      >
                        Github
                      </a>
                      <br />
                      <strong className="card-text">Creator:</strong>{" "}
                      <h6 className="card-text"> {p.username}</h6>{" "}
                      <pre className="card-text">
                        {" "}
                        <Link to={"/profile/" + p.username}>About Me</Link>{" "}
                      </pre>
                      <pre className="card-text">
                        <i>
                          {" "}
                          <span className="card-text">
                            {p.date ? p.date.slice(0, 10) : ""}
                          </span>
                        </i>
                      </pre>
                    </div>
                    <i className="card-text">
                      <i class="fas fa-code" /> <i class="fas fa-laptop-code" />{" "}
                      <i class="fas fa-code" />
                    </i>
                  </div>
                </div>
              ))}
          </div>
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
