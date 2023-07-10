import { ReactElement, ReactNode } from 'react';
import CloseBtn from "../images/closeBtn.png";
interface PortfolioModalProps {
  handleClose: () => void;
  children?: ReactNode;
}
const PortfolioModal = ({ handleClose }: PortfolioModalProps): ReactElement => {

  return (
    <>
    <div className="portfolioModal">
      <h1>제목</h1>
      <button onClick={handleClose}>
      <img src={CloseBtn} alt="포폴 모달" className='close-btn'/>
      </button>
      
      </div>
    </>
  )
};
export default PortfolioModal;