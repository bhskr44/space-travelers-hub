import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MissionPage from './components/mission/MissionPage';
import ProfilePage from './components/profile/ProfilePage';
import RocketPage from './components/rocket/RocketPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<RocketPage />} />
          <Route path="/missions" element={<MissionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
