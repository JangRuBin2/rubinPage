import { useState } from 'react';
import UmRB from "../images/umRubin.webp";
const AboutMe = () : JSX.Element=> {
  const [showNewDiv, setShowNewDiv] = useState(false);
  const handleShowNewDiv = () => {
    setShowNewDiv(!showNewDiv);
};
  return (
      <div className="container">
        <div style={{display:"flex",flexDirection:"column", justifyContent : "space-around", alignItems:"center"}}>
          <div style={{display :"flex", alignItems:"center",justifyContent:"center"}}>
            <img src={UmRB} alt="" style={{width : '310px', height : '350px'}}/>
          </div>
          <div>
          <h2>안녕하세요. 튼튼한 개발자 장루빈입니다!</h2>
          <div  onClick={handleShowNewDiv}>눌러줘 나를</div>
          {showNewDiv && <div className="new-div">새로운 div</div>}
          </div>
        </div>
      </div>
  )
}
export default AboutMe;