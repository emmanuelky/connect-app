import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
import image1 from "../../image1.jpeg";
import Signup from "./Signup";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: []
    };
  }

  componentDidMount() {
    api
      .getProfile()
      .then(user => {
        console.log(user);
        this.setState({
          profile: user
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container flex-lg-wrap col-md-10 mb-10 Home p-3 mb-2 bg-dark text-white rounded-top ">
        <div className="container1 flex-sm-wrap col-md-12 mb-14 justify-content-sm-center d-flex align-content-center flex-wrap justify-content-between m-2 p-5">
          <h1 className="grow">Are you a Software Developer???</h1> <br />
          <h2 className="grow">Do you have a project to show???</h2> <br />
          <h3 className="grow">Are you into Tech???</h3> <br />
          <h4 className="grow">Do you want Employers to notice you???</h4>{" "}
          <br />
          <h5 className="grow">Do you want your skills known???</h5> <br />
          <br />
          <h6 className="grow">Do you have the imposter symdrone???</h6>
          <hr />
          <h1 className="grow">
            <i className="fas fa-code" />
            Then you are in the right place!!!
            <i className="fas fa-code" />
          </h1>
        </div>
        <div className="container border-bottom-8 border border-primary shadow-lg p-3 mb-8 bg-dark rounded">
          <h1 className="p-5 text-monospace font-weight-bold shadow-lg p-3 mb-5 bg-dark rounded">
            EXPLORE AND CONNECT
          </h1>
          <hr />
          <i>
            {" "}
            <h6 className="text-monospace shadow-lg p-3 mb-5 bg-dark rounded">
              Get discovered by millions of employers all over the World
            </h6>
          </i>
          <i>
            {" "}
            <h4 className="text-monospace shadow-lg p-3 mb-5 bg-dark rounded">
              Top 12 Recent Projects
            </h4>
          </i>
        </div>

        <ul className="d-flex flex-wrap card-group shadow-lg p-3 mb-5 bg-dark rounded">
          {this.state.projects
            .filter((p, i) => i <= 11)
            .map((p, i) => (
              <div className="d-flex flex-wrap p-4 shadow-lg p-3 mb-5 bg-dark rounded">
                <li key={p.i} className="grow">
                  <hr />
                  <img className="projectImage" src={p.projectimage} /> <br />
                  <h6>
                    <i>{p.name} </i>{" "}
                  </h6>
                  <a href={p.projectlink} target="_blank">
                    Demo{" "}
                  </a>{" "}
                  <br />
                  <hr />
                </li>
              </div>
            ))}
        </ul>

        {/* <div className="container home-section-two">second div</div> */}
      </div>
    );
  }
  componentDidMount() {
    api
      .getProjects()
      .then(projects => {
        console.log(projects);
        this.setState({
          projects: projects
        });
      })
      .catch(err => console.log(err));
  }
}
export default Home;

{
  /* <ul>
          {this.state.projects.map(p => <li key={p._id}>
            {p.name}{p.date} 
            <div >
              <img className="projectImage" src={p.projectimage} alt=""/>
            </div>
          {/* </li>)}
        </ul>
        {this.state.message && <div className="info">
        
          {this.state.message} 
        </div>
        
        
        
        
        
        
          <li key={p._id}>
                  

                    <img className="projectImage" src={p.projectimage} />{" "}
                  
                  <br />
                  Project Name: {p.name} <br />
                  Technology Used: {p.technologyused} <br /> Date Added:{" "}
                  {p.date} <br />
                  <br />
                  <br />
                  <br />
                </li>
        
        
        

                {this.state.message && (
              <div className="info">{this.state.message}</div>
            )}
        
        
        
        */
}
