import { useState } from "react";
import Test1 from "./testDiv1";
import Test2 from "./testDiv2";
const Portfolio = ():JSX.Element => {
  const divs = [<Test1 />,<Test2 />];
  const [divIndex, setDivIndex] = useState(0);
  const changeDiv =()=> {
    setDivIndex((divIndex - 1 + divs.length)%divs.length)
  }
  return (<div className="container" onClick={changeDiv}>
    {divs[divIndex]}
    </div>
  )
}
export default Portfolio;