import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home1 from './pages/home/Home1';
import Home2 from './pages/home/Home2';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import SlowTicketNumber from './pages/SlowTrain/TicketNumber/TicketNumber';
import SlowTrain from './pages/SlowTrain/SlowTrain';
import Matching from './pages/matching/Matching';
import Mypage from './pages/mypage/Mypage';
import ForgetPassword1 from './pages/forgetPassword/ForgetPassword1';
import ForgetPassword2 from './pages/forgetPassword/ForgetPassword2';
import ForgetPassword3 from './pages/forgetPassword/ForgetPassword3';
import ChangePassword from './pages/mypage/ChangePassword';
import ChangeKakaotalkID from './pages/mypage/ChangeKakaotalkID';
import Guide from './pages/home/Guide';
import FastTrain from './pages/FastTrain/FastTrain';
import FastTicketNumber from './pages/FastTrain/TicketNumber/TicketNumber';
import Accpeted from './pages/FastTrain/TicketNumber/Accpeted';
import NotFound from './pages/NotFound/NotFound';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/home/guide" element={<Guide />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/slowtrain" element={<SlowTrain />} />
      <Route path="/fasttrain" element={<FastTrain />} />
      <Route path="slowtrain/:ticketnumber" element={<SlowTicketNumber />} />
      <Route path="fasttrain/:ticketnumber" element={<FastTicketNumber />} />
      <Route path="fasttrain/:ticketnumber/accepted" element={<Accpeted />} />
      <Route path="/matching" element={<Matching />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/forgetpassword1" element={<ForgetPassword1 />} />
      <Route path="/forgetpassword2" element={<ForgetPassword2 />} />
      <Route path="/forgetpassword3" element={<ForgetPassword3 />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/changekakaotalkid" element={<ChangeKakaotalkID />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default App;
