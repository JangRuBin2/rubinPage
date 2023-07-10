import { ReactElement, ReactNode } from 'react';
import CloseBtn from "../images/closeBtn.png";
import Github from '../images/github.png';
import Notion from "../images/notion.png";
import SmooD from '../images/smooD.png';
import '../style/modal.css';
import PortfolioContent from './modalClass';
interface StockTogetherModalProps {
  handleClose: () => void;
  children?: ReactNode;
}

const portfolioContent = new PortfolioContent(
  'https://github.com/JangRuBin2/stockTogether',
  'https://www.notion.so/kongukjae/Project-A-5-Hz-34c518401ee64f1093650ab5525aba16',
  SmooD
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
          <h1>smooD</h1>
          <h3>빠르고 편리한 길 찾기 서비스입니다.<br/>
              단축 버튼을 누르면 목적지를 가까운 경로순으로 리스트업 합니다.<br/>
              세개의 단축버튼은 사용자가 커스텀 할 수 있습니다.
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
