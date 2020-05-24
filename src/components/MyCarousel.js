import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
    <div className="container-fluid text-center" id="showcase">
      <Carousel>
        <Carousel.Item>
          <a href="https://www.codechef.com/users/noxious_av">
            <div className="mx-auto bg-dark" id="car">
              <img
                className="d-block img-fluid mx-auto width150"
                src="https://www.codechef.com/sites/all/themes/abessive/logo.png"
                alt="First slide"
              />
            </div>
          </a>
          <Carousel.Caption>
            <h3>Codechef</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="https://www.hackerrank.com/noxious_av">
            <div className="mx-auto bg-dark" id="car">
              <img
                className="d-block img-fluid mx-auto width150"
                src="https://info.hackerrank.com/rs/487-WAY-049/images/Podcast-ChannelCover-Final.jpg"
                alt="Second slide"
              />
            </div>
          </a>
          <Carousel.Caption>
            <h3>Hackerrank</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <a href="http://codeforces.com/profile/noxious_av">
            <div className="mx-auto bg-dark" id="car">
              <img
                className="d-block img-fluid mx-auto width150"
                src="http://st.codeforces.com/s/70853/images/codeforces-logo-with-telegram.png"
                alt="Third slide"
              />
            </div>
          </a>
          <Carousel.Caption>
            <h3>Codeforces</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
