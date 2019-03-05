import React, { Component } from "react";
import api from "../../api";
import ProfileUsername from './ProfileUsername';

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
        users: users
      });
    });
  }

  onSearch = e => {
    console.log(e.target.value, "DEBUG!!!!!!");

    this.setState({
      search: e.target.value
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
          placeholder="Search..."
          autocomplete="off"
        />

        {this.state.search !== "" && <div className="result-output">
          {filteredUsers.map((user, i) => (
            <div className="result-item">
            <button>

            {user.firstname} 
            {user.lastname} 
            </button>
            </div>
          ))}
        </div> }

        
      </div>
    );
  }
}

export default SearchUser;
