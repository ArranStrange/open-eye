import carouselImage1 from '../assets/carousel/1.png';
import carouselImage2 from '../assets/carousel/2.png';
import carouselImage3 from '../assets/carousel/3.png';
import carouselImage4 from '../assets/carousel/4.png';
import './style.css';

function ImageCarousel() {
  return (
    <div>
      <img className="carousel-images" src={carouselImage1} />
    </div>
  );
}
export default ImageCarousel;
