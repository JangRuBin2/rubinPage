// jukebox.tsx
import React from 'react';
import BeautifulPeople from '../images/beautifulPeople.png';
import Christan from '../images/christian.png';
import Dive from '../images/dive.jpg';
import GhostTown from '../images/ghostTown.png';
import LeGrandBleu from '../images/leGrandBleu.png';
import Mood from '../images/mood.png';
import MySelf from '../images/mySelf.png';
import Perfect from '../images/perfect.jpg';
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
    new Music(Christan, 'Sqv5h2jT4No', 'Christian'),
    new Music(MySelf, 'WiE_PJAglac', 'MySelf'),
    new Music(Mood, 'O53n-OrzVAU', 'Mood'),
    new Music(Perfect, 'cNGjD0VG4R8', 'Perfect'),
    new Music(Dive, 'Wv2rLZmbPMA', 'Dive'),
    new Music(BeautifulPeople, '74yb9E3WY1I', 'BeautifulPeople'),
    new Music(GhostTown, 'prYbXj3zPfs', 'GhostTown'),
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
