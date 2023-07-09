import YouTube from 'react-youtube';
const FunnyPage = ():JSX.Element => {
  const videoId = 'OzmF8WZ5QgQ';
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
  <div className="wrap">
    <YouTube videoId={videoId} opts={opts} />
  </div>
  )
}
export default FunnyPage;