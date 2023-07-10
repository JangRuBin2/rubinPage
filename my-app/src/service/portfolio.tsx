import { useState } from 'react';
import Kimochi from "../images/me.png";
import PortfolioModal from './portfolioModal';
const Portfolio = ():JSX.Element => {
  const [modal, setModal] = useState(false);
  const handleModal =()=> {
    setModal(!modal)
  }
  class PorFol {
    constructor(public name : string, public imageUrl : string) {}
  }
  const portfolioList = [new PorFol("테스트",Kimochi)]
  return (<div className="container">
    {portfolioList.map((data, index)=> {
    return <div key={index}>
        <img src={Kimochi} alt={`${index}포토폴리오`}  onClick={handleModal} />
      </div>
    })}
    {modal&& <PortfolioModal handleClose={handleModal} />}
    </div>
  )
}
export default Portfolio;