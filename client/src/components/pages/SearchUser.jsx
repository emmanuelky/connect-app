import React, { Component } from "react";
import api from "../../api";
import ProfileUsername from "./ProfileUsername";
import { Link } from "react-router-dom";

class SearchUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      users: []
    };
  }

  componentDidMount() {
    api.getUsers().then(users => {
      console.log(users);
      this.setState({
        users: users,
        isFocused: false
      });
    });
  }

  onSearch = e => {
    console.log(e.target.value, "DEBUG!!!!!!");

    this.setState({
      search: e.target.value
    });
  };

  handleInputFocus = () => {
    this.setState({
      isFocused: true
    });
  };

  handleInputBlur = () => {
    setTimeout(() => {
      this.setState({
        isFocused: false
      });
    }, 1000);
  };

  handleLinkClick = () => {
    this.setState({
      isFocused: false,
      search: ""
    });
  };

  render() {
    let lowerSearch = this.state.search;

    let filteredUsers = this.state.users.filter((user, i) => {
      if (user.firstname && user.firstname.toLowerCase().includes(lowerSearch))
        return true;
      return false;
    });

    console.log("filteredUsers", filteredUsers);

    return (
      <div className=" d-flex align-items-start ">
        <input
          type="text"
          name="technologyused"
          className="navbar d-flex justify-content-between sticky-top navbar-expand-md navbar-light bg-light col-md-8 mb-4 SearchUser d-flex align-items-start "
          value={this.state.search}
          onChange={e => this.onSearch(e)}
          placeholder="Search...."
          autocomplete="off"
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
        />

        {this.state.isFocused && this.state.search !== "" && (
          <div className="result-output">
            {filteredUsers.map((user, i) => (
              <Link
                to={"/profile/" + user.username}
                className="result-item"
                onClick={this.handleLinkClick}
              >
                <img
                  className="round-images"
                  src={user.profileimage}
                  width="50px"
                  height="50px"
                />{" "}
                {user.firstname} {user.lastname}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchUser;
