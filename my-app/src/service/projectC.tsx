import { useState } from "react";
import PokeDigi from "../images/pokeDigi.png";
import "../style/portfolio.css";
import PortfolioModal from './pokedigiModal';
const PrjC = () : JSX.Element => {
  const [modal, setModal] = useState(false);
  const handleModal =()=> {
    setModal(!modal)
  }
  return (
    <div className="portfolBox">
    
    <div className="imgArea"  onClick={handleModal}>
      <img src={PokeDigi} alt="프로젝트 사진" />
    </div>
    
    <div className="textArea" >
      <h1>프로젝트 C 내용</h1>
      <h3>하이</h3>
    </div>
    {modal&& <PortfolioModal handleClose={handleModal} />}
    </div>
  )
};
export default PrjC;