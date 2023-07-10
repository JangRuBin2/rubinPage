import { ReactElement, ReactNode } from 'react';
import CloseBtn from "../images/closeBtn.png";
import Github from '../images/github.png';
import Notion from "../images/notion.png";
import PokeDigi from '../images/pokeDigi.png';
import '../style/modal.css';
import PortfolioContent from './modalClass';
interface StockTogetherModalProps {
  handleClose: () => void;
  children?: ReactNode;
}

const portfolioContent = new PortfolioContent(
  'https://github.com/NewDevs2/pokeXdigi',
  'https://www.notion.so/NewDevs-b2c55037fd684db3ab87b139c703eab6',
  PokeDigi
);

const StockTogetherModal = ({ handleClose }: StockTogetherModalProps): ReactElement => {
  const openLinkInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="portfolioModal">
        <div className='modaltitle'>
          <img src={portfolioContent.imgUrl} alt="프로젝트 이미지" />
        </div>
        <div className='modalContent'>
          <h1>포케 x 디지</h1>
          <h3>포켓몬과 디지몬 캐릭터를 선택해 다른 사람과 대화하는 서비스입니다.<br/>
              회원가입을 해야 이용가능하게 구현했습니다.<br/>
              필드로 입장하면 랜덤으로 캐릭터가 선택되고, 다른 사람과 채팅이 가능합니다.
          </h3>
          <div className='linkList'>
          <span onClick={() => openLinkInNewTab(portfolioContent.githubLink)}>
            <img src={Github} alt="" />
          </span>
          <span onClick={() => openLinkInNewTab(portfolioContent.notionLink)}>
            <img src={Notion} alt="" />
          </span>
          </div>
        </div>
        <div onClick={handleClose}>
          <img src={CloseBtn} alt="포폴 모달" className='close-btn'/>
        </div>
      </div>
    </>
  )
};

export default StockTogetherModal;
