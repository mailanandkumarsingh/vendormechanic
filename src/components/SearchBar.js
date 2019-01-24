import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div>
        <h1 className="ui header">Admin Page</h1>
      </div>
    );
  }
}

export default SearchBar;
