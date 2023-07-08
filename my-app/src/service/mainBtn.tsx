import DownBtnImg from "../images/KeyDown.png"
import UpBtnImg from "../images/KeyUp.png"

export const UpBtn = () : JSX.Element=> {
  return (
    <>
      <img src={UpBtnImg} alt="up" />
    </>
  )
}
export const DownBtn = () : JSX.Element=> {
  return (
    <>
      <img src={DownBtnImg} alt="down" />
    </>
  )
}