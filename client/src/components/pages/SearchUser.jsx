import React, { Component } from "react";

class SearchUser extends Component {
  render() {
    return (
      <div className=" d-flex align-items-start ">
      <input
        type="text"
        name="technologyused"
        className="navbar d-flex justify-content-between sticky-top navbar-expand-md navbar-light bg-light col-md-8 mb-4 SearchUser d-flex align-items-start "
        value={this.props.value}
        onChange={e => this.props.onSearch(e.target.value)}
        placeholder="Search..."
        
      />
      </div>
    );
  }
}

export default SearchUser;


