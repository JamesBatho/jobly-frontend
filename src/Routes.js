import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Companies from "./companies/Companies";
import Jobs from "./jobs/Jobs";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CompanyDetail from "./companies/CompanyDetail";

function Routes({ login, signup }) {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetail />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/login">
          <Login login={login} />
        </Route>
        <Route exact path="/signup">
          <Signup signup={signup} />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
