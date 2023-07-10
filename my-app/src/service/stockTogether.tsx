import { ReactElement, ReactNode } from 'react';
import CloseBtn from "../images/closeBtn.png";
import '../style/modal.css';
class PortfolioContent {
  constructor(public githubLink : string, public notionLink : string, public prjContent : string, public imgUrl : string) {}
}
interface StockTogetherModalProps {
  handleClose: () => void;
  children?: ReactNode;
}
const portfolioContent = new PortfolioContent ('https://github.com/JangRuBin2/stockTogether','https://www.notion.so/kongukjae/Project-A-5-Hz-34c518401ee64f1093650ab5525aba16', '주식 거래 애플리케이션 입니다.', CloseBtn);

const StockTogetherModal = ({ handleClose }: StockTogetherModalProps): ReactElement => {
 const openLinkInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
    <div className="portfolioModal">
      <div className='modalBox'>
        <h1>stockTogether</h1>
        <img src={portfolioContent.imgUrl} alt="프로젝트 이미지" />
      </div>
      <div className='modalContent'>
      <h3>{portfolioContent.prjContent}</h3>
      <div onClick={() => openLinkInNewTab(portfolioContent.githubLink)}>깃허브 링크</div>
      <div onClick={() => openLinkInNewTab(portfolioContent.notionLink)}>노션 링크</div>
      </div>
      <button onClick={handleClose}>
      <img src={CloseBtn} alt="포폴 모달" className='close-btn'/>
      </button>
      </div>
    </>
  )
};
export default StockTogetherModal;