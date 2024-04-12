import AboutUs from './about-us';
import FloatingIcons from './floating-icons-1';
import FloatingIcons2 from './floating-icons-2';
import MainVideo from './main-video';
import MeetTheTeam from './meet-the-team';
import OpeningStatement from './opening-statement';
import OurWork from './our-work';

export default function LandingPage() {
  return (
    <div className="app">
      <FloatingIcons />
      <OpeningStatement />
      <MainVideo />
      <FloatingIcons2 />
      <AboutUs />
      <OurWork />
      <MeetTheTeam />
    </div>
  );
}
