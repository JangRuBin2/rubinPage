import AboutMePage from "./pages/aboutMePage";
import FunnyPage from "./pages/funnyPage";
import IntroPage from "./pages/introPage";
import PortfolPage from "./pages/portfolioPage";
// 각 페이지 공용 css
import { useState } from "react";
import { DownBtn, UpBtn } from "./service/mainBtn";
import './style/commonPageSty.css';
function App() {
  // 슬라이드로 관리할 페이지 배열
  const pages = [<IntroPage />, <AboutMePage />, <PortfolPage />, <FunnyPage />];
  // 페이지 상태 관리
  const [currentIndex, setCurrentIndex] = useState(0);
  // 애니메이션 상태 관리
  const [animationClassName, setAnimationClassName] = useState("slide-down-fade-in");
  // 페이지 index 갱신 함수
  const changPage = (direction : string)=> {
    // 애니메이션 클래스 제거
    setAnimationClassName("");
    if (direction === 'up') {
      setCurrentIndex((currentIndex - 1 + pages.length)%pages.length)
    } else if (direction === 'down'){
      setCurrentIndex((currentIndex + 1)% pages.length);
    }

    setTimeout(() => {
      setAnimationClassName(direction === "up" ? "slide-up-fade-in" : "slide-down-fade-in"); // 애니메이션 클래스를 다시 적용합니다.
    }, 50);
  }
  return (
    <>
      <div style={{display:"flex", justifyContent : 'center', zIndex : 1}} onClick={() => changPage("up")}>
        <UpBtn />
      </div>
      <div className={animationClassName}>{pages[currentIndex]}</div>
      <div style={{display:"flex", justifyContent : 'center', zIndex :1}} onClick={() => changPage("down")}>
        <DownBtn />
      </div>
    </>
  );
}

export default App;
