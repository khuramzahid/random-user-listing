import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/profile/:uuid" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
