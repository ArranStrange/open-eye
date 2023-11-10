import AboutUs from './components/about-us';
import CustomMouse from './components/custom-mouse';
import FloatingIcons from './components/floating-icons-1';
import FloatingIcons2 from './components/floating-icons-2';
import Footer from './components/footer';
import IntroGif from './components/intro-gif';
import MainVideo from './components/main-video';
import MeetTheTeam from './components/meet-the-team';
import NavigationBar from './components/navigation-bar';
import OpeningStatement from './components/opening-statement';
import OurWork from './components/our-work';
import './styles.css';

function App() {
  return (
    <div className="app">
      <IntroGif />
      <FloatingIcons />
      <CustomMouse />
      <NavigationBar />
      <OpeningStatement />
      <MainVideo />
      <FloatingIcons2 />
      <AboutUs />
      <OurWork />
      <MeetTheTeam />
      <Footer />
    </div>
  );
}

export default App;
