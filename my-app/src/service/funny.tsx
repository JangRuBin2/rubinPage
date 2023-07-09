import YouTube from 'react-youtube';
import JukeBox from "./jukebox";
const Funny = ():JSX.Element => {
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
    <YouTube videoId={videoId} opts={opts} />
    <JukeBox />
  </div>
  )
}
export default Funny;