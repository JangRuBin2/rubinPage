import Jukebox from "../images/jukebox.png";
import LeGrandBleu from "../images/leGrandBleu.png";
import LikeThis from "../images/springGang.png";

const JukeBox = () : JSX.Element => {
  class Music {
    constructor(public imageUrl: string, public videoId: string, public title: string) {}
  }
  const playList = [new Music(LikeThis, 'OzmF8WZ5QgQ', 'Like This'),
    new Music(LeGrandBleu, 'dVrqhetFunI', 'Le Grand Bleu'),];
  return (
    <>
    <div className="jukeBox">
      <img src={Jukebox} alt="쥬크박스" />
    </div>
    <div className="playList">
    {playList.map((music, index) => (
          <img
            key={index}
            src={music.imageUrl}
            alt={`${index} 음악`}
            style={{ width: '200px', height: '200px' }}
          />
        ))}
    </div>
    </>
  )
};
export default JukeBox;