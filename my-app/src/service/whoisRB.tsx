import { useState } from 'react';
import UmRB from "../images/umRubin.webp";
import '../style/aboutMe.css';
import { ToggleOff, ToggleOn } from './toggle';
const AboutMe = () : JSX.Element=> {
  const [showNewDiv, setShowNewDiv] = useState(false);
  const handleShowNewDiv = () => {
    setShowNewDiv(!showNewDiv);
};
  return (
      <div className="container">
        <div className='meBox'>
          <div className='meTitle'>
            <img src={UmRB} alt="" style={{width : '310px', height : '350px'}}/>
            <h2>flying squirrel</h2>
          </div>
          
          <div  onClick={handleShowNewDiv}> {!showNewDiv ? <ToggleOff /> : <ToggleOn />}</div>
          {showNewDiv && <h4 className="flyInDiv">저는 새로운 것에 도전하는 것을 즐깁니다.<br/>
            언어와 도구에 제약 받지 않고, 새로운 것에 거부감 없이 도전합니다.<br/>
            제한 없이 다양한 환경에서 발전하는 개발자가 되겠습니다.
            </h4>}
        </div>
      </div>
  )
}
export default AboutMe;