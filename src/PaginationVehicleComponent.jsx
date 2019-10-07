import React, { Component } from "react";
import paginate from "paginate-array";

class PaginationVehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      size: 10,
      page: 1,
      currPage: null
    };

    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/vehicles/`)
      .then(response => response.json())
      .then(vehicles => {
        const { page, size } = this.state;

        const currPage = paginate(vehicles, page, size);

        this.setState({
          ...this.state,
          vehicles,
          currPage
        });
      });
  }

  previousPage() {
    const { currPage, page, size, vehicles } = this.state;

    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(vehicles, newPage, size);

      this.setState({
        ...this.state,
        page: newPage,
        currPage: newCurrPage
      });
    }
  }

  nextPage() {
    const { currPage, page, size, vehicles } = this.state;

    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(vehicles, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  render() {
    const { page, size, currPage } = this.state;

    return (
      <div>
        <div>page: {page}</div>
        <div>size: {size}</div>
        {currPage && (
          <ul>
            {currPage.data.map(vehicle => (
              <li key={vehicle.id}>{vehicle.name}</li>
            ))}
          </ul>
        )}
        <button onClick={this.previousPage}>Previous Page</button>
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
}

export default PaginationVehicleList;
