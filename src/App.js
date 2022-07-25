import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import { Login } from './components';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scope: ' '
      })
    };
    gapi.load('client:auth2', start)
  })
  

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;