import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../image1.jpeg";
import image2 from "../../image2.jpeg";
import image3 from "../../image3.jpeg";
import image4 from "../../image4.jpeg";

class ControlledCarousel extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (


<div></div>
    
    
  




















      // <Carousel
      //   activeIndex={index}
      //   direction={direction}
      //   onSelect={this.handleSelect}
      // >
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={image1}
      //       alt=""
      //       style={{
      //         width: "100vw",
      //         height: "100vh"
      //       }}
      //     />
      //     <Carousel.Caption>
      //       <h3>First slide label</h3>
      //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={image2}
      //       alt=""
      //       style={{
      //         width: "100vw",
      //         height: "100vh"
      //       }}
      //     />
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={image3}
      //       alt=""
      //       style={{
      //         width: "100vw",
      //         height: "100vh"
      //       }}
      //     />
      //   </Carousel.Item>
      // </Carousel>
    );
  }
}

export default ControlledCarousel;
