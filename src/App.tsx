import { motion } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import IntroGif from './components/IntroGif';
import LandingPage from './components/LandingPage/LandingPage';
import Services from './components/Services/Services';
import WorkPage from './components/WorkPage/WorkPage';
import NavigationBar from './components/navigation-bar/Nav';
import CursorComponent from './custom-cursor';
import './styles.css';

function App() {
  return (
    <div className="app">
      <IntroGif />
      <CursorComponent />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourwork" element={<WorkPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
