import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AddProjects from "./pages/AddProject";
import Secret from "./pages/Secret";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EditProject from "./pages/EditProject";
import Signup from "./pages/Signup";
// import CountryDetail from './pages/CountryDetail';
import EditProfile from "./pages/EditProfile";
import api from "../api";
import logo from "../logo.png";

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
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" exact>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              width="100px"
              height="100px"
            />
          </NavLink>
          <button className="btn btn-outline-primary navbar-brand my-2 my-sm-0 p-4">
            <NavLink to="/projects"> Projects</NavLink>
          </button>

          {/* The NavLink "Add country" is displayed only when the user is connected */}
          {api.isLoggedIn() && (
            <button className="btn btn-outline-primary navbar-brand my-2 my-sm-0 p-4">
              {" "}
              <NavLink to="/add-project">Add project</NavLink>{" "}
            </button>
          )}
          {api.isLoggedIn() && (
            <button className="btn btn-outline-primary navbar-brand my-2 my-sm-0 p-4">
              <NavLink to="/profile">Profile</NavLink>
            </button>
          )}
          {!api.isLoggedIn() && (
            <button className="btn btn-outline-primary navbar-brand my-2 my-sm-0 p-4">
              <NavLink to="/signup">Signup</NavLink>
            </button>
          )}
          {!api.isLoggedIn() && (
            <button className="btn btn-outline-primary navbar-brand my-2 my-sm-0 p-4">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}

          <button className="btn btn-outline-primary navbar-brand my-2 my-sm-0 p-4">
            <NavLink to="/secret">Jobs</NavLink>
          </button>


          {api.isLoggedIn() && (
            <button className="btn btn-outline-primary navbar-brand my-2 my-sm-0 p-4">
              {" "}
              <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                Logout
              </Link>
            </button>
          )}
        </nav>

        <div>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exact path="/countries/:countryId" component={CountryDetail} /> */}
              <Route exact path="/edit-profile" component={EditProfile} />
              <Route exact path="/edit-project" component={EditProject} />
              <Route exact path="/add-project" component={AddProjects} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/secret" component={Secret} />
              <Route render={() => <h2>404</h2>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
