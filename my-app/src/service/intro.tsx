import YouTube from 'react-youtube';
import FlySqr from "../images/me.png";
import '../style/introPage.css';
const Intro = ():JSX.Element => {
  const videoId = 'OzmF8WZ5QgQ';
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
  <div className="container">
    <div className="introBox">
      <img src={FlySqr} alt="이미지 설명" style={{width : '200px', height : '200px'}}/>
        <h2>RuBin</h2>
        <h4>fullstack developer</h4>
        <YouTube videoId={videoId} opts={opts} />
    </div>
  </div>)
}
export default Intro;