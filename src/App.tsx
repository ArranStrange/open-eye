import AboutUs from './components/about-us';
import ContactUs from './components/contact-us';
import ImageCarousel from './components/image-carousel';
import MainVideo from './components/main-video';
import NavigationBar from './components/navigation-bar';
import OpeningStatement from './components/opening-statement';
import OurWork from './components/our-work';
import './styles.css';

function App() {
  return (
    <>
      <NavigationBar />
      <OpeningStatement />
      <MainVideo />
      <AboutUs />
      <ImageCarousel />
      <OurWork />
      <ContactUs />
    </>
  );
}

export default App;
