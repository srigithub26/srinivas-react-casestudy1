import React, { Component } from "react";

class SearchVehicleComponent extends Component {
  state = {
    query: "",
    data: [],
    searchString: []
  };

  handleInputChange = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        this.filterArray();
      }
    );
  };

  getData = () => {
    fetch(`https://swapi.co/api/vehicles?search=`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: responseData,
          searchString: responseData
        });
      });
  };

  filterArray = () => {
    let searchString = this.state.query;
    let responseData = this.state.data;

    if (searchString.length > 0) {
      // console.log(responseData[i].name);
      responseData = responseData.filter(searchString);
      this.setState({
        responseData
      });
    }
  };

  UNSAFE_componentWillMount() {
    this.getData();
  }
  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            type="text"
            id="filter"
            placeholder="Search"
            onChange={this.handleInputChange}
          />
        </form>
        <div>
          {this.state.responseData.map(i => (
            <p>{i.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchVehicleComponent;
