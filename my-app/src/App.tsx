import AboutMePage from "./pages/aboutMePage";
import FunnyPage from "./pages/funnyPage";
import IntroPage from "./pages/introPage";
import PorfolPage from "./pages/portfolioPage";
// 각 페이지 공용 css
import { useState } from "react";
import { DownBtn, UpBtn } from "./service/mainBtn";
import './style/commonPageSty.css';
function App() {
  // 슬라이드로 관리할 페이지 배열
  const pages = [<IntroPage />, <AboutMePage />, <PorfolPage />, <FunnyPage />];
  // 페이지 상태 관리
  const [currentIndex, setCurrentIndex] = useState(0);
  // 페이지 index 갱신 함수
  const changPage = (direction : string)=> {
    if (direction === 'next') {
      setCurrentIndex((currentIndex + 1)% pages.length);
    } else if (direction === 'prev'){
      setCurrentIndex((currentIndex - 1 + pages.length)%pages.length)
    }
  }
  return (
    <>
      <div onClick={() => changPage("prev")}>
        <UpBtn />
      </div>
      <div>{pages[currentIndex]}</div>
      <div onClick={() => changPage("next")}>
        <DownBtn />
      </div>
    </>
  );
}

export default App;
