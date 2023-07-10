import { useState } from 'react';
import PokeDigi from "../images/pokeDigi.png";
import "../style/portfolio.css";
import PortfolioModal from './portfolioModal';
const Portfolio = ():JSX.Element => {
  const [modal, setModal] = useState(false);
  const handleModal =()=> {
    setModal(!modal)
  }
  // 포폴 클래스 정의
  class PorFol {
    constructor(public name : string, public imageUrl : string, public projectID : string) {}
  }
  // 포토폴리오 클래스 생성
  const portfolioList = [new PorFol("포케x디지",PokeDigi, 'C'),
  new PorFol("포케x디지",PokeDigi, 'A'),
  new PorFol("포케x디지",PokeDigi, 'B')];

  return (
  <div className="container">
    <div className='portfolioBox'>
      {portfolioList.map((data, index)=> {
        return <div key={index} className={`portfolio-item ${index === 0 ? 'left' : index === 1 ? 'centered' : 'right'}`} >
        <img src={data.imageUrl} alt={`${index}포토폴리오`}  onClick={handleModal} />
        <h1>{`프로젝트 ${data.projectID}`}</h1>
      </div>
    })}
    </div>
    {modal&& <PortfolioModal handleClose={handleModal} />}
    </div>
  )
}
export default Portfolio;