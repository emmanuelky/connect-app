import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        name="technologyused"
        className="Search input"
        value={this.props.value}
        onChange={e => this.props.onSearch(e.target.value)}
        placeholder="e.g react, vue, graphql"
      />
    );
  }
}

export default Search;
