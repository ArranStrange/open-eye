import carouselImage1 from '../assets/carousel/1.png';
import carouselImage2 from '../assets/carousel/2.png';
import carouselImage3 from '../assets/carousel/3.png';
import carouselImage4 from '../assets/carousel/4.png';
import carouselImage5 from '../assets/carousel/5.png';
import carouselImage6 from '../assets/carousel/6.png';
import './style.css';

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <img className="carousel-images" src={carouselImage1} />
      <img className="carousel-images" src={carouselImage2} />
      <img className="carousel-images" src={carouselImage3} />
      <img className="carousel-images" src={carouselImage4} />
      <img className="carousel-images" src={carouselImage5} />
      <img className="carousel-images" src={carouselImage6} />
    </div>
  );
}
export default ImageCarousel;
