// jukebox.tsx
import React from 'react';
import LeGrandBleu from '../images/leGrandBleu.png';
import LikeThis from '../images/springGang.png';
interface JukeBoxProps {
  onChangeVideoId: (videoId: string) => void;
}

class Music {
  constructor(public imageUrl: string, public videoId: string, public title: string) {}
}

const JukeBox: React.FC<JukeBoxProps> = ({ onChangeVideoId }) => {
  const playList = [
    new Music(LikeThis, 'OzmF8WZ5QgQ', 'Like This'),
    new Music(LeGrandBleu, 'dVrqhetFunI', 'Le Grand Bleu'),
  ];

  return (
    <>
      {/* <div className="jukeBox">
        <img src={JukeboxImage} alt="쥬크박스" style={{width:'400px', height:'500px'}}/>
      </div> */}
      <div className="playList">
        {playList.map((music, index) => (
          <img
            key={index}
            src={music.imageUrl}
            alt={`${index} 음악`}
            style={{ width: '150px', height: '150px' }}
            onClick={() => onChangeVideoId(music.videoId)}
          />
        ))}
      </div>
    </>
  );
};

export default JukeBox;
