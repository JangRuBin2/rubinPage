// funny.tsx
import { useState } from 'react';
import YouTube from 'react-youtube';
import JukeBox from './jukebox';

const Funny = (): JSX.Element => {
  const [currentVideoId, setCurrentVideoId] = useState('OzmF8WZ5QgQ');

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleVideoChange = (videoId: string) => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className="container">
      <YouTube videoId={currentVideoId} opts={opts} />
      <JukeBox onChangeVideoId={handleVideoChange} />
    </div>
  );
};

export default Funny;
