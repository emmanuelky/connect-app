import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="container ">
      <input
        type="text"
        name="technologyused"
        className="Search col-md-8 mb-4"
        value={this.props.value}
        onChange={e => this.props.onSearch(e.target.value)}
        placeholder="Search... by technology e.g React, Vue, GraphQL, Python, R, SQL etc..."
        
      />
      </div>
    );
  }
}

export default Search;


