import { useState } from 'react';
import UmRB from "../images/umRubin.webp";
import '../style/aboutMe.css';
import Toggle from './toggle2';
const AboutMe = () : JSX.Element=> {
  // div 상태 관리
  const [showNewDiv, setShowNewDiv] = useState(false);
  const handleShowNewDiv = () => {
    setShowNewDiv(!showNewDiv);
  };
  return (
      <div className="container">
        <div className='meBox'>
          <div className='meTitle'>
            <img src={UmRB} alt="" style={{width : '300px', height : '400px'}}/>
            <h1>flying squirrel</h1>
            <div>
            <Toggle handleShowNewDiv={handleShowNewDiv} />
            </div>
          </div>
          
          
          {showNewDiv  && <h3 className="flyInDiv">저는 새로운 도전 도전을 즐깁니다.<br/>
            언어와 도구에 제약 받지 않는 개발자가 되는 것이 목표입니다.<br/>
            </h3>}
        </div>
      </div>
  )
}
export default AboutMe;