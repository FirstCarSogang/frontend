import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home1 from './pages/home/Home1';
import Home2 from './pages/home/Home2';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Train from './pages/Train/Train';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/train" element={<Train />} />
    </Routes>
  </Layout>
);

export default App;
