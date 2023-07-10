import { ReactElement, ReactNode } from 'react';
import CloseBtn from "../images/closeBtn.png";
import '../style/modal.css';

interface stockTogetherModalProps {
  handleClose: () => void;
  children?: ReactNode;
}
const stockTogetherModal = ({ handleClose }: stockTogetherModalProps): ReactElement => {

  return (
    <>
    <div className="portfolioModal">
      <h1>stockTogether</h1>
      <button onClick={handleClose}>
      <img src={CloseBtn} alt="포폴 모달" className='close-btn'/>
      </button>
      </div>
    </>
  )
};
export default stockTogetherModal;