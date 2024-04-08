import LandingPage from './components/landing-page/LandingPage';
import CursorComponent from './custom-cursor';
import './styles.css';

function App() {
  return (
    <div className="app">
      <CursorComponent />
      <LandingPage />
    </div>
  );
}

export default App;
