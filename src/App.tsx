import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing, Home, Leaderboards, History, Friends, Stats, Settings, Lobby } from './pages';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="leaderboards" element={<Leaderboards />} />
          <Route path="history" element={<History />} />
          <Route path="friends" element={<Friends />} />
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
          <Route path="lobby" element={<Lobby />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;