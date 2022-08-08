import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { RecoilRoot } from 'recoil';

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
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
