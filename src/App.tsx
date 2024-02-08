import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home1 from './pages/home/Home1';
import Home2 from './pages/home/Home2';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import TicketNumber from './pages/SlowTrain/TicketNumber/TicketNumber';
import SlowTrain from './pages/SlowTrain/SlowTrain';
import Matching from './pages/matching/Matching';
import Mypage from './pages/mypage/Mypage';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/slowtrain" element={<SlowTrain />} />
      <Route path="slowtrain/:ticketnumber" element={<TicketNumber />} />
      <Route path="/matching" element={<Matching />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  </Layout>
);

export default App;
