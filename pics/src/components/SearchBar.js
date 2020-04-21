import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // onInputChange(event) { //event is an object
  //     console.log(event.target.value);
  onFormSubmit = (event) => {
    event.preventDefault(); // prevents the form from attempting to submit itself and thus refreshing the page

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
