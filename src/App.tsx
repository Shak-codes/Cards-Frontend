import './App.scss';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing, Home, Leaderboards, History, Friends, Stats, Settings, Lobby } from './pages';
import Layout from './components/Layout/Layout';

const socket = io("http://localhost:3001")

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