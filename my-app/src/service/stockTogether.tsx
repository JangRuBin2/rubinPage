import { ReactElement, ReactNode } from 'react';
import CloseBtn from "../images/closeBtn.png";
import Github from '../images/github.png';
import Notion from "../images/notion.png";
import Stock from '../images/stockT.png';
import '../style/modal.css';
import PortfolioContent from './modalClass';
interface StockTogetherModalProps {
  handleClose: () => void;
  children?: ReactNode;
}

const portfolioContent = new PortfolioContent(
  'https://github.com/JangRuBin2/stockTogether',
  'https://www.notion.so/Project-A-5-Hz-02c2e2e2d9974bc9a061e388868d38d8',
  Stock
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
          <h2>stockTogether</h2>
          <h3>초보도 쉽게 주식을 시도할 수 있는 서비스입니다.<br/>
              주식에 '탈것'의 형태를 도입하여, 주식 투자를 같이 하고 싶은 사람과 즐길 수 있습니다.<br/>
              서버로부터 주식 데이터를 실시간으로 받아 차트로 그립니다.
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
