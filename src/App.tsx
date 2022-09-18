import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import { RecoilRoot } from 'recoil';

const Home = loadable(() => import('pages/Home'));
const SearchPage = loadable(() => import('./pages/Search/index'));
const SignUp = loadable(() => import('pages/Signup'));
const Login = loadable(() => import('pages/Login/LoginPage'));
const MyPage = loadable(() => import('pages/MyPage/studentMyPage'));
const SelectPortfolio = loadable(() => import('pages/SelectPage'));
const AllPortfolio = loadable(() => import('pages/AllPortfolio'));
const DownloadPortfolio = loadable(() => import('pages/EditPortfolio/downloads/DownloadPortfolio'));
const Preview = loadable(() => import('pages/EditPortfolio/preview'));
const AllPositionPortfolio = loadable(() => import('pages/AllPositionPortfolio'));
const JopPosting = loadable(() => import('pages/jopPostingPage/index'));

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/all" element={<AllPortfolio />} />
            <Route path="/select" element={<SelectPortfolio />} />
            <Route path="/generate" element={<DownloadPortfolio />} /> {/* 포트폴리오 제작 페이지 라우트 */}
            <Route path="/generate/:docId" element={<DownloadPortfolio />} /> {/* 특정 문서 제작 페이지 라우트 */}
            <Route path="/preview" element={<Preview />} /> {/* 포트폴리오 미리보기 페이지 라우트 */}
            <Route path="/preview/:docId" element={<Preview />} /> {/* 특정 문서 미리보기 페이지 라우트 */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/allPositionpage" element={<AllPositionPortfolio />} /> {/* 전체 구인 포지션 페이지 라우트 */}
            <Route path="/posting" element={<JopPosting />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
