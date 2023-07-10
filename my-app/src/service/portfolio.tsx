import { useState } from 'react';
// 사진
import PokeDigi from "../images/pokeDigi.png";
import SmooDImg from '../images/smooD.png';
import Stock from "../images/stockT.png";
// 모듈
import "../style/portfolio.css";
import PokedigiModal from './pokedigiModal';
import SmooD from './smooD';
import StockTogether from './stockTogether';
const Portfolio = ():JSX.Element => {
  const modalList = [
    PokedigiModal, StockTogether, SmooD // 예시용으로 세 개의 모달 컴포넌트를 modalList에 저장
  ];
  const [modal, setModal] = useState(false);
  const [activeModal, setActiveModal] = useState(0); // 클릭된 포트폴리오 항목과 맞는 모달 컴포넌트의 인덱스를 저장

  const handleModal = (index: number) => {
    setModal(!modal);
    setActiveModal(index);
  }

  // 포폴 클래스 정의
  class PorFol {
    constructor(public name : string, public imageUrl : string, public project : string) {}
  }
  // 포토폴리오 클래스 생성
  const portfolioList = [new PorFol("포케x디지",PokeDigi, 'C'),
  new PorFol("stockTogether",Stock, 'A'),
  new PorFol("smooD",SmooDImg, 'B')];

  return (
    <div className="container">
      <div className='portfolioBox'>
        {portfolioList.map((data, index)=> {
          const Modal = modalList[index]; // modalList에서 현재 포트폴리오 항목과 맞는 모달 컴포넌트를 선택
          return <div key={index} className={'portfolio-item'} onClick={() => handleModal(index)}>
            <img src={data.imageUrl} alt={`${index}포토폴리오`}  />
            <h1>{`${data.name}`}</h1>
            {modal && activeModal === index && <Modal handleClose={() => handleModal(index)} />}
          </div>
        })}
      </div>
    </div>
  )
}
export default Portfolio;
