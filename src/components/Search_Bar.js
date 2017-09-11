import React, { Component } from 'react';

class SearchBar extends Component {
  //  initialize state, all js classes have a constructor function - called automatically when a new instance of the class is created
  constructor(props) {
    super(props);

    //  initialize state by creating a new object and assign it to this.state, the object we pass will contain props we want to record on state -- in this case the prop 'term' for search term in the search bar
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder='Search...'
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)} />
        {/* Value of the input: {this.state.term} */}
      </div>
    )
    }
    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
