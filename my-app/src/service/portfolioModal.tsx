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
      모달 테스트
      <button onClick={handleClose}>
      <img src={CloseBtn} alt="포폴 모달"  />
      </button>
      </div>
    </>
  )
};
export default PortfolioModal;