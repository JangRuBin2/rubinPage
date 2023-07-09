import { useState } from "react";
import PrjA from "./projectA";
import PrjB from "./projectB";
import PrjC from "./projectC";
const Portfolio = ():JSX.Element => {
  const divs = [<PrjC />,<PrjA />, <PrjB />];
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