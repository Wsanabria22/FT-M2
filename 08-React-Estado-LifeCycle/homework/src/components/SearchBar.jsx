import React, { useState } from "react";

 class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleChange = (e)=>{
    this.setState({city: e.target.value })
  }

  render() {
    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onSearch(this.state.city);
        }} className="form-inline">
        <input type="text" placeholder="Ciudad..." className="form-control mr-sm-2" onChange={this.handleChange}/>
        <input type="submit" value="Agregar" className="btn btn-outline-success my-2 my-sm-0" />
      </form>
    );
  }
}

export default SearchBar;