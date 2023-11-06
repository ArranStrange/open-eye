import AboutUs from './components/about-us';
import CustomMouse from './components/custom-mouse';
import Footer from './components/footer';
import MainVideo from './components/main-video';
import MeetTheTeam from './components/meet-the-team';
import NavigationBar from './components/navigation-bar';
import OpeningStatement from './components/opening-statement';
import OurWork from './components/our-work';
import './styles.css';

function App() {
  return (
    <div className="app">
      <CustomMouse />
      <NavigationBar />
      <OpeningStatement />
      <MainVideo />
      <AboutUs />
      <OurWork />
      <MeetTheTeam />
      <Footer />
    </div>
  );
}

export default App;
