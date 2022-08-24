import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { RecoilRoot } from 'recoil';
import { Preview } from '@mui/icons-material';

const Home = loadable(() => import('pages/Home'));
const MyPage = loadable(() => import('pages/MyPage'));
const SelectPortfolio = loadable(() => import('pages/SelectPage'));
const AllPortfolio = loadable(() => import('pages/AllPortfolio'));
const DownloadPortfolio = loadable(() => import('pages/EditPortfolio/downloads/DownloadPortfolio'));
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/select" element={<SelectPortfolio />} />
            <Route path="/all" element={<AllPortfolio />} />
            <Route path="/generate" element={<DownloadPortfolio />} /> {/* 포트폴리오 제작 페이지 라우트 */}
            <Route path="/generate/:docId" element={<DownloadPortfolio />} /> {/* 특정 문서 제작 페이지 라우트 */}
            <Route path="/preview" element={<Preview />} /> {/* 포트폴리오 미리보기 페이지 라우트 */}
            <Route path="/preview/:docId" element={<Preview />} /> {/* 특정 문서 미리보기 페이지 라우트 */}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
