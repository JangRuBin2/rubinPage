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
  'https://www.notion.so/kongukjae/Project-A-5-Hz-34c518401ee64f1093650ab5525aba16',
  `주식 거래 애플리케이션입니다.
  주식 초보자도 쉽게 접할 수 있게, 함께하는 주식 서비스를 만들었습니다.
  `,
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
          <h1>stockTogether</h1>
          <h3>{portfolioContent.prjContent}</h3>
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
