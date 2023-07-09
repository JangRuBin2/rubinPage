import UmRB from "../images/umRubin.webp";
const AboutMe = () : JSX.Element=> {
  return (
      <div className="container">
        <div style={{display:"flex",flexDirection:"column", justifyContent : "space-around", alignItems:"center"}}>
          <div style={{display :"flex", alignItems:"center",justifyContent:"center"}}>
            <img src={UmRB} alt="" style={{width : '310px', height : '350px'}}/>
          </div>
          <div>
          <h2>안녕하세요. 튼튼한 개발자 장루빈입니다!</h2>
          </div>
        </div>
      </div>
  )
}
export default AboutMe;