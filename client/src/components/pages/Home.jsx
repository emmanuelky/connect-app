import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

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
      <div className="Home p-3 mb-2 bg-dark text-white rounded-top ">
        
        <div className="carousel">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="../../image2.jpeg"
                  alt="First slide"
                  width= "800px"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div>
          <h1 className="p-5">EXPLORE AND CONNECT</h1>
          <h3>Top 10 Recent Projects</h3>
        </div>

        <ul className="d-flex flex-wrap card-group">
          {this.state.projects
            .filter((p, i) => i <= 9)
            .map((p, i) => (
              <div className="d-flex flex-wrap p-4">
                <li key={p.i}>
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
