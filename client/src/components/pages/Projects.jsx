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
              .filter((project, i) =>
                project.name.toLowerCase().includes(lowerSearch)
              )
              .map((p, i) => (
                <div className="d-flex ">
                  <div className="card flex-md-{grow|shrink}-0 mr-2 m-2 shadow-lg p-3 mb-5 bg-white rounded">
                    <li key={p.i}>
                      <img
                        className=""
                        src={p.projectimage}
                        width="100px"
                        height="100px"
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
                        <pre>
                          <i>Technology Used: {p.technologyused}</i>{" "}
                        </pre>
                        <a href={p.projectlink} target="_blank">
                          Demo Link{" "}
                        </a>
                        <br />
                        <a href={p.githublink} target="_blank">
                          Github
                        </a>
                        <br />
                        <i>
                          {" "}
                          Creator: <h5 className="card-title">
                            {" "}
                            {p.username}
                          </h5>{" "}
                        </i>{" "}
                        <pre>
                          {" "}
                          <Link to={"/profile/" + p.username}>
                            Contact Info
                          </Link>{" "}
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
