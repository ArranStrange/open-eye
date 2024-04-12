import { Fade } from 'react-awesome-reveal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import carouselImage1 from '../assets/carousel/1.png';
import carouselImage2 from '../assets/carousel/2.png';
import carouselImage3 from '../assets/carousel/3.png';
import carouselImage4 from '../assets/carousel/4.png';
import carouselImage5 from '../assets/carousel/5.png';
import carouselImage6 from '../assets/carousel/6.png';
import './style.css';

function ImageCarousel() {
  return (
    <Fade direction="right" duration={2000} triggerOnce={true}>
      <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="carousel-images" src={carouselImage1} />
        </div>
        <div>
          <img className="carousel-images" src={carouselImage2} />
        </div>
        <div>
          <img className="carousel-images" src={carouselImage3} />
        </div>
        <div>
          <img className="carousel-images" src={carouselImage4} />
        </div>
        <div>
          <img className="carousel-images" src={carouselImage5} />
        </div>
        <div>
          <img className="carousel-images" src={carouselImage6} />
        </div>
      </Carousel>
    </Fade>
  );
}
export default ImageCarousel;
