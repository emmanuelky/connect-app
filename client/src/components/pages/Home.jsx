import React, { Component } from "react";
import api from "../../api";
// import { Link } from "react-router-dom";
// import image1 from "../../image1.jpeg";
// import Signup from "./Signup";

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
      <div className="container justify-content-center col-md-8 mb-14 Home p-3 mb-2 bg-dark text-white rounded-top ">
        <div className="container1 flex-sm-wrap col-md-12 mb-14 justify-content-sm-center d-flex align-content-center flex-wrap justify-content-between m-2 p-5">
          <h1 className="grow text-center text-sm-left">
            Are you a Software Developer???
          </h1>
          <h2 className="grow text-center text-sm-left">
            Do you have a project to show???
          </h2>
          <h3 className="grow text-center text-sm-left">
            Are you into Tech???
          </h3>
          <h4 className="grow text-center" text-sm-left>
            Do you want Employers to notice you???
          </h4>{" "}
          <h5 className="grow text-center text-sm-left">
            Do you want your skills known???
          </h5>
          <h6 className="grow text-center text-sm-left">
            Do you have the imposter symdrone???
          </h6>
        </div>
        <div className="container border-bottom-8 border border-primary shadow-lg p-3 mb-8 bg-dark rounded">
          <h1 className="p-5 text-monospace glow font-weight-bold shadow-lg p-3 mb-5 bg-dark rounded">
             EXPLORE 
             <br /> & <br />CONNECT{" "}
            
          </h1>
          <hr />
          <i>
            {" "}
            <h6 className="text-monospace shadow-lg p-3 mb-5 bg-dark rounded">
              Get discovered by millions of employers around the World
            </h6>
          </i>
          <i>
            {" "}
            <h4 className="text-monospace shadow-lg p-3 mb-5 bg-dark rounded">
              View Recent Projects below...
            </h4>
          </i>
        </div>

        <div className="d-flex flex-wrap card-group shadow-lg p-2 mb-3 bg-dark rounded">
          <div className="row justify-content-center">
            {this.state.projects
              .filter((p, i) => i <= 8)
              .map((p, i) => (
                <div className="col-sm-4 justify-content-center">
                  <div className="  p-4 shadow-lg p-3 mb-5 bg-dark rounded card">
                    <hr />
                    <img
                      className="projectImage grow justify-content-center card-img-top"
                      // width="100px"
                      // height="100px"
                      src={p.projectimage}
                    />{" "}
                    <div className="card-body">
                    <h6 className="card-text">
                      <i>creator: {p.username} </i>{" "}
                    </h6>
                    <hr />
                    <a href={p.projectlink} target="_blank" className="card-text">
                      Demo{" "}
                    </a>{" "}
                    <hr />
                    
                    <pre>
                      <i>
                        <pre className="text-light card-text">{p.date.toString().substring(0, 10)}</pre>
                      </i>
                    </pre>
                    <hr />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

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
                  
                  <hr />
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
