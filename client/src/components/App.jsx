import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AddProjects from "./pages/AddProject";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import EditProject from "./pages/EditProject";
import Signup from "./pages/Signup";
import EditProfile from "./pages/EditProfile";
import api from "../api";
import logo from "../logo.png";
import ProfileUsername from "./pages/ProfileUsername";
import SuccessLogin from "./pages/SuccessLogin";
import SearchUser from "./pages/SearchUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div className="container border-bottom-0 border border-primary rounded">
        <nav className="navbar d-flex justify-content-between sticky-top navbar-expand-md navbar-light bg-light ">
          <NavLink to="/" exact>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              width="150px"
              height="150px"
            />
          </NavLink>

          {/* The NavLink is displayed only when the user is connected */}

          {api.isLoggedIn() && (
            <button className="btn btn-outline-primary  border-bottom-0 navbar-brand my-2 my-sm-0 shadow-lg p-3 mb-5 bg-white rounded">
              <NavLink to="/projects"> Projects</NavLink>
            </button>
          )}

          {api.isLoggedIn() && (
            <button className="btn btn-outline-primary  border-bottom-0 navbar-brand my-2 my-sm-0 shadow-lg p-3 mb-5 bg-white rounded">
              {" "}
              <NavLink to="/add-project">Add project</NavLink>{" "}
            </button>
          )}
          {api.isLoggedIn() && (
            <button className="btn btn-outline-primary   border-bottom-0 navbar-brand my-2 my-sm-0 shadow-lg p-3 mb-5 bg-white rounded">
              <NavLink to="/profile">Profile</NavLink>
            </button>
          )}

          <button className="btn btn-outline-primary  border-bottom-0 navbar-brand my-2 my-sm-0 shadow-lg p-3 mb-5 bg-white rounded">
            <NavLink to="/jobs"> Jobs</NavLink>
          </button>

          {api.isLoggedIn() && <SearchUser />}

          <ul className="nav navbar-nav justify-content-end ml-auto">
            {!api.isLoggedIn() && (
              <button className="btn btn-outline-primary  border-bottom-0 navbar-brand my-2 my-sm-0 shadow-lg p-3 mb-5 bg-white rounded">
                <NavLink to="/signup">
                  <i class="fas fa-user-plus"> Signup</i>
                </NavLink>
              </button>
            )}
            {!api.isLoggedIn() && (
              <button className="btn btn-outline-primary border-bottom-0 navbar-brand my-2 my-sm-0 shadow-lg p-3 mb-5 bg-white rounded">
                <NavLink to="/login">
                  <i className="fas fa-sign-out-alt">Login</i>
                </NavLink>
              </button>
            )}
          </ul>
          <ul className="nav navbar-nav justify-content-end ml-auto">
            {api.isLoggedIn() && (
              <button className="btn btn-outline-primary border-bottom-0 navbar-brand my-2 my-sm-0 d-flex justify-content-end shadow-lg p-3 mb-5 bg-white rounded">
                {" "}
                <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                  Logout <i className="fas fa-sign-out-alt" />
                </Link>
              </button>
            )}
          </ul>
        </nav>

        <div>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/profile" component={Profile} />

              <Route
                exact
                path="/profile/:username"
                component={ProfileUsername}
              />
              <Route exact path="/edit-profile" component={EditProfile} />
              <Route
                exact
                path="/edit-project/:projectId"
                component={EditProject}
              />
              <Route exact path="/add-project" component={AddProjects} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/success-login" component={SuccessLogin} />
              <Route render={() => <h2>404</h2>} />
            </Switch>
            <footer className="container col-md-8 mb-10">
              <div className="row">
                <div className="col">
                  <h4>Contact Us</h4>
                  <br />
                  <h4>About Us</h4>
                  <br />
                  <h4>Connect </h4>
                  <br />
                  <h4>Coding Schools</h4>
                  <br />
                  <p className="text-center">
                    &copy; 2019. All Rights Reserved. Design by{" "}
                    <a href="">Emmanuel & Sinan</a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
