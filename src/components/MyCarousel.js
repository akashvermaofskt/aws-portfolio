import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
    <div className="container-fluid text-center" id="showcase">
      <h3>My competitive programming profiles</h3>
      <hr width="80%"></hr>
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
            <p>5 star, 2000+ Rating, ~3000 Global Rank, ~1500 Country Rank</p>
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
            <p>Problem solving 6 stars, 1800+ rating in Algorithms</p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <a href="https://codeforces.com/profile/noxious_av">
            <div className="mx-auto bg-dark" id="car">
              <img
                className="d-block img-fluid mx-auto width150"
                src="https://st.codeforces.com/s/70853/images/codeforces-logo-with-telegram.png"
                alt="Third slide"
              />
            </div>
          </a>
          <Carousel.Caption>
            <h3>Codeforces</h3>
            <p>1400+ rating</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
