import { useEffect } from "react";
import Animation from "../utils/animation";
import { motion } from "framer-motion";

const IntroSection = () => {
  useEffect(() => {
    Animation.introSection();
  }, []);

  return (
    <section id="intro" className="intro-section">
      <div className="intro-content">
        <div className="container">
          <motion.div className="intro-text-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="main-heading">
              안녕하세요,
              <br />
              프론트엔드 개발자 <span className="highlight-blue">김병년</span>입니다
            </h1>

            <p className="sub-heading">능동적인 개발자를 꿈꾸는 김병년입니다</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
