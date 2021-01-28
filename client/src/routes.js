import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/layout";

import Maps from "./components/maps/maps";
import Home from "./components/home";
import Login from "./components/admin/login";
import Auth from "./hoc/auth";
import Logout from "./components/admin/logout";
import Book from "./components/booking/book";
import Reservation from "./components/booking/reservation";
import Register from "./components/register/register";
import User from "./components/admin/user";
import Auth1 from "./owner/hoc/auth1";
import Login1 from "./owner/components/home/admin/login";
import OwnerProfile from "./owner/components/home/admin/owner_profilee";
import Logout2 from "./owner/components/home/admin/logout";
import Register2 from "./owner/components/home/admin/register";
import Dashboard from "./owner/components/home/admin/Dashboard";
import NotFound from "./404";

class Routes extends Component {
  render() {
    return (
      <body>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/maps" exact component={Auth(Maps, true)} />
            <Route path="/login" exact component={Auth(Login, false)} />

            <Route path="/user" exact component={Auth(User, true)} />
            <Route path="/register" exact component={Auth(Register, null)} />
            <Route path="/dashboard" exact component={Auth1(Dashboard, true)} />
            <Route
              path="/register_resturant"
              exact
              component={Auth1(Register2, null)}
            />
            <Route path="/login_owner" exact component={Auth1(Login1, false)} />
            <Route
              path="/owner_profile"
              exact
              component={Auth1(OwnerProfile, true)}
            />

            {/* <Route path="/edit_resturant" exact component={Auth1(Edit, true)} /> */}
            <Route path="/book/:id" exact component={Auth(Book, true)} />
            <Route
              path="/reservations"
              exact
              component={Auth(Reservation, true)}
            />
            <Route path="/logout" exact component={Auth(Logout, true)} />
            <Route
              path="/logout_owner"
              exact
              component={Auth1(Logout2, true)}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </body>
    );
  }
}

export default Routes;
