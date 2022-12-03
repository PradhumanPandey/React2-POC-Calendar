import React from "react";
import { Route } from "react-router-dom";
import Description from "./description";
import App from "./App";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Route path="/src/App" component={App} />
      <Route path="/src/description" component={Description} />
    </div>
  );
};

export default Dashboard;
