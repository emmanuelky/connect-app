import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        name="technologyused"
        className="Search"
        value={this.props.value}
        onChange={e => this.props.onSearch(e.target.value)}
        placeholder="Search... by technology e.g React, Vue, GraphQL, Python, R, SQL etc..."
        
      />
      
    );
  }
}

export default Search;


