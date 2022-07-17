import 'bootstrap/dist/css/bootstrap.css';
import React from "react"

import Carousel from 'react-bootstrap/Carousel';

function Carouselcomponent() {
  
  
  return (
    
    
    <Carousel >
      <Carousel.Item>
        <img style={{height : "800px"}}
          className="d-block w-100"
          src="https://sneakernews.com/wp-content/uploads/2021/07/fragment-travis-scott-air-jordan-1-retro-high-DH3227-105-6-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Travis-jordan-Fragment</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height : "800px"}}
          src="https://sneakers-magazine.com/wp-content/uploads/2017/12/sean-wotherspoon-x-nike-air-max-1-97-collectors-dream-aj4219-400-on-feet.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sean-wotherspoon</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height : "800px"}}
          className="d-block w-100"
          src="https://spy.com/wp-content/uploads/2019/12/best-adidas-sneakers.jpg?w=840"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Adidas stan smith</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Carouselcomponent;