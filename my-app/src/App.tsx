import { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import Header from "../src/component/header";
import './App.css';
function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '홈',
  };
  useEffect(() => {
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <>
    <Routes>
    {/* <Route path="/" element={<Mainpage />} /> */}
      <Header title={pageTitle}/>
    </Routes>
    </>
  );
}

export default App;
