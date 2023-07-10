import { useState } from 'react';
import '../style/toggle.css';
// 토글에서 콜백함수 props로 제공
interface ToggleProps {
  handleShowNewDiv: () => void;
}
function Toggle(props: ToggleProps) {
  // 토글 상태 관리
  const [toggleState, setToggleState] = useState(false);
  // 토글 이벤트
  const toggleClick = () => {
    setToggleState(!toggleState);
    // 콜백함수 handleShowNewDiv실행
    props.handleShowNewDiv();
  };
  return (
    <>
      <input type="checkbox" id="toggle" hidden />
      <label htmlFor="toggle" className="toggleSwitch" onClick={toggleClick}>
        <span className="toggleButton" />
      </label>
    </>
  );
}

export default Toggle;