import AboutUs from './components/about-us';
import ContactUs from './components/contact-us';
import ImageCarousel from './components/image-carousel';
import MainVideo from './components/main-video';
import './styles.css';

function App() {
  return (
    <>
      <div>
        <MainVideo />
      </div>
      <div>
        <AboutUs />
      </div>
      <ImageCarousel />
      <div>
        <ContactUs />
      </div>
    </>
  );
}

export default App;
