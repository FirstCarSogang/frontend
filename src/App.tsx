import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home1 from './pages/home/Home1';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home1 />} />
    </Routes>
  </Layout>
);

export default App;
