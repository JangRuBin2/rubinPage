import AboutMePage from "./pages/aboutMePage";
import FunnyPage from "./pages/funnyPage";
import IntroPage from "./pages/introPage";
import PorfolPage from "./pages/portfolioPage";
// 각 페이지 공용 css
import './style/commonPageSty.css';
function App() {
  window.addEventListener('scroll', function(){
    console.log(window.scrollY)
  });
  return (
    <>
      <IntroPage/>
      <AboutMePage />
      <PorfolPage/>
      <FunnyPage />
    </>
  );
}

export default App;
