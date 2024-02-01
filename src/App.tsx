import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home1 from './pages/home/Home1';
import Home2 from './pages/home/Home2';
import Login from './pages/Login/Login';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Layout>
);

export default App;
