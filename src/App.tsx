import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import CursorComponent from './custom-cursor';
import './styles.css';

function App() {
  return (
    <div className="app">
      <CursorComponent />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
