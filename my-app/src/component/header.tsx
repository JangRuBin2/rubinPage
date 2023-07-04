import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 인터페이스
type HeaderProps = {
  title: string;
};
interface TitleMapping {
  [key: string]: string;
}
// path에 따른 문자 데이터
const titleMapping: TitleMapping = {
  '/': '홈',
};
export const Header: React.FC<HeaderProps> = ({ title }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(title);
    useEffect(() => {
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <header>
      <h1>{pageTitle}</h1>
    </header>
  );
};

