import { useState } from "react";
import PrjA from "./projectA";
import PrjB from "./projectB";
import PrjC from "./projectC";
const Portfolio = ():JSX.Element => {
  // div 리스트
  const divs = [<PrjC />,<PrjA />, <PrjB />];
  // div index 상태 관리
  const [divIndex, setDivIndex] = useState(0);
  // 클릭 이벤트로 div 변경
  const changeDiv =()=> {
    setDivIndex((divIndex + 1)% divs.length);
  }
  return (<div className="container">
    {divs[divIndex]}
    </div>
  )
}
export default Portfolio;