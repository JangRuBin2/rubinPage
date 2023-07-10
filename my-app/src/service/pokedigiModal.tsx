import { ReactElement, ReactNode } from 'react';
import CloseBtn from "../images/closeBtn.png";
import '../style/modal.css';
interface PokeDigiModalProps {
  handleClose: () => void;
  children?: ReactNode;
}
const PokeDigiModal = ({ handleClose }: PokeDigiModalProps): ReactElement => {

  return (
    <>
    <div className="portfolioModal">
      <h1>pokeXdigi</h1>
      <button onClick={handleClose}>
      <img src={CloseBtn} alt="포폴 모달" className='close-btn'/>
      </button>
      </div>
    </>
  )
};
export default PokeDigiModal;