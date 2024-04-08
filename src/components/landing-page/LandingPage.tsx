import AboutUs from './about-us';
import FloatingIcons from './floating-icons-1';
import FloatingIcons2 from './floating-icons-2';
import Footer from './footer';
import IntroGif from './intro-gif';
import MainVideo from './main-video';
import MeetTheTeam from './meet-the-team';
import NavigationBar from './navigation-bar';
import OpeningStatement from './opening-statement';
import OurWork from './our-work';

export default function LandingPage() {
  return (
    <div className="app">
      <IntroGif />
      <FloatingIcons />
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
