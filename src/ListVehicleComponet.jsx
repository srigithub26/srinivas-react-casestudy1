import React, { Component } from "react";
import ApiService from "./ApiService";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class ListVehicleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      message: null
    };

    this.reloadVehicleList = this.reloadVehicleList.bind(this);
  }

  componentDidMount() {
    this.reloadVehicleList();
  }

  reloadVehicleList() {
    ApiService.fetchVehicles().then(res => {
      this.setState({ vehicles: res.data.result });
    });
  }
  render() {
    return (
      <div>
        <h2 align="center">Vehicles</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Cost in credits</TableCell>
              <TableCell align="right">Length</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.vehicles.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.cost_in_credits}</TableCell>
                <TableCell align="right">{row.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>{" "}
      </div>
    );
  }
}


export default ListVehicleComponent;
