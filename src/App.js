// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MonstersListPage from './pages/MonsterListPage';
import MonsterDetailPage from './pages/MonsterDetailPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/monsters" element={<MonstersListPage />} />
          <Route path="/monsters/:index" element={<MonsterDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
