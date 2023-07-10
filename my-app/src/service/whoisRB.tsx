import { useState } from 'react';
import UmRB from "../images/umRubin.webp";
import '../style/aboutMe.css';
import Toggle from './toggle2';
const AboutMe = () : JSX.Element=> {
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
            {/* <div onClick={handleShowNewDiv}> {!showNewDiv ? <ToggleOff /> : <ToggleOn />}</div> */}
            <div onClick={handleShowNewDiv}>
            <Toggle />
            </div>
          </div>
          
          
          {showNewDiv && <h3 className="flyInDiv">저는 새로운 것에 도전하는 것을 즐깁니다.<br/>
            언어와 도구에 제약 받지 않고, 거부감 없이 도전합니다.<br/>
            항상 발전하는 개발자가 되겠습니다.
            </h3>}
        </div>
      </div>
  )
}
export default AboutMe;