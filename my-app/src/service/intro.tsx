import FlySqr from "../images/me.png";
import '../style/introPage.css';
const Intro = ():JSX.Element => {

  return (
  <div className="container">
    <div className="introBox">
      <img src={FlySqr} alt="이미지 설명" style={{width : '200px', height : '200px'}}/>
        <h2>RuBin</h2>
        <h4>fullstack developer</h4>
    </div>
  </div>)
}
export default Intro;