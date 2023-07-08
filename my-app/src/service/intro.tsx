import FlySqr from "../images/me.png";
import '../style/introPage.css';
const Intro = ():JSX.Element => {
  return (
  <div className="container">
    <div className="introBox">
      <img src={FlySqr} alt="이미지 설명" style={{width : '200px', height : '200px'}}/>
        <h3>루빈</h3>
    </div>
  </div>)
}
export default Intro;