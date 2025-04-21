import { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { getAssetPath } from "./utils/assetUtils";

// 레이아웃 컴포넌트
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

// 공통 컴포넌트
import MouseComponent from "./components/common/MouseComponent";
import ProgressComponent from "./components/common/ProgressComponent";

// 페이지 섹션 컴포넌트
import IntroSection from "./components/sections/IntroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";

// 애니메이션 유틸
import Animation from "./components/utils/animation";

// 스타일
import "./styles/index.scss";

function App() {
  useEffect(() => {
    // 스무스 스크롤 초기화
    const lenis = Animation.initSmoothScroll();

    // 에셋 경로 확인 (디버깅용)
    console.log("백그라운드 이미지 경로:", getAssetPath("assets/backgroud.jpg"));

    return () => {
      // 클린업
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <Router>
      <Header />
      <Main>
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <MouseComponent />
        <ProgressComponent />
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
