import { useEffect, useRef } from "react";
import Animation from "../utils/animation";

const Header = () => {
  const refMarquee = useRef(null);

  useEffect(() => {
    Animation.layout.header({ marquee: refMarquee });
  }, []);

  return (
    <header id="header">
      <div className="container header-inner">
        {/* 로고 */}

        {/* 메뉴 */}
        <section className="menu">
          <a href="#about">소개</a>
          <a href="#skills">기술</a>
          <a href="#projects">프로젝트</a>
          <a href="#experience">경험</a>
          <a href="#contact">연락처</a>
        </section>

        {/* 모바일 메뉴 버튼 */}
        <button type="button" className="mobile-menu-btn">
          =
        </button>
      </div>

      {/* <MarqueeComponent target={refMarquee} title="REACT | GSAP | FRAMER-MOTION | HTML | CSS | JAVASCRIPT" /> */}
    </header>
  );
};

export default Header;
