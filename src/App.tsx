import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
// eslint-disable-next-line import/extensions
import { RecoilRoot } from 'recoil';
import LoginPage from './Login/LoginPage';

const Home = loadable(() => import('pages/Home'));
const MyPage = loadable(() => import('pages/MyPage'));
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
