import React, { Component } from "react";
import api from "../../api";
import Search from "./Search";
import { Link } from "react-router-dom";

class SearchProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      search: ""
    };

    this.handleClick = this.handleClick.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({}));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.name
    });
  }

  handleSearch(searchValue) {
    this.setState({
      search: searchValue
    });
  }

  render() {
    let lowerSearch = this.state.search.toLowerCase();
    let uppersearch = this.state.search.toUpperCase();
    let filteredProfiles = this.state.profiles;

    return (
      <div className="container col-md-18 mb-12">
        <div>
          <h2 className="m-5 p-3 mb-2 bg-dark text-white rounded">
            Profile List
          </h2>{" "}
          <Search value={this.state.search} onSearch={this.handleSearch} />
          <hr />
        </div>
        <div className="projects col-md-18 mb-12 border border-white rounded-left shadow p-3 mb-5 bg-white rounded">
          <ul className="d-flex col-md-18 mb-12 flex-wrap card-group">
            {filteredProfiles
              .filter((profile, i) => {
                if (
                  profile.name.toLowerCase().includes(lowerSearch, uppersearch)
                )
                  return true;
                for (let i = 0; i < profile.firstname.length; i++) {
                  if (profile.firstname[i].includes(lowerSearch, uppersearch))
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
                        src={p.profileimage}
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
                          <i> {p.firstname} </i>
                        </pre>
                        <strong className="font-weight-bold">Name:</strong>{" "}
                        <pre>{p.firstname} </pre>
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
                            <p className="card-text"> {p.date}</p>{" "}
                          </i>
                        </pre>
                      </div>
                      <button
                        className="rounded"
                        onClick={this.handleClick}
                        style={{
                          // backgroundColor: this.colors[colorIndex],
                          color: "white"
                        }}
                      />
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
      .getProfiles()
      .then(profiles => {
        console.log(profiles);
        this.setState({
          profiles: profiles
        });
      })
      .catch(err => console.log(err));
  }
}
export default SearchProfile;
