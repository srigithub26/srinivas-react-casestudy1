import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListVehicleComponent from "./ListVehicleComponet";
import SearchVehicleComponent from "./SearchVehicleComponet";
import React from "react";

const AppRouter = () => {
  return (
    <div style={style}>
      <Router>
        <Switch>
          <Route path="/" component={ListVehicleComponent} />
          <Route path="/search" component={SearchVehicleComponent} />
        </Switch>
      </Router>
    </div>
  );
};

const style = {
  marginTop: "20px"
};

export default AppRouter;
