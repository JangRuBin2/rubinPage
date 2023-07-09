// funny.tsx
import { useState } from 'react';
import YouTube from 'react-youtube';
import "../style/jukeBox.css";
import JukeBox from './jukebox';

const Funny = (): JSX.Element => {
  const [currentVideoId, setCurrentVideoId] = useState('OzmF8WZ5QgQ');
  const [mode, setMode] = useState<'theater' | 'jukebox'>('theater');
// 자동 재생
  const opts = {
    height: '400px',
  width: '600px',
    playerVars: {
      autoplay: 1,
    },
  };
  // Props로 받아온 유튜브ID로 새로운 영상 실행
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
