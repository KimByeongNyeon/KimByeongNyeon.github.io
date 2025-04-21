import { useEffect, useState } from "react";
import Animation from "../utils/animation";
import { motion } from "framer-motion";

const TypeWriter = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (delay) {
      const delayTimeout = setTimeout(() => {
        startTyping();
      }, delay);
      return () => clearTimeout(delayTimeout);
    } else {
      startTyping();
    }
  }, []);

  const startTyping = () => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= text.length) {
          clearInterval(interval);
          return prevIndex;
        }
        setDisplayText((prevText) => prevText + text[prevIndex]);
        return prevIndex + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  };

  return <span>{displayText}</span>;
};

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
              <TypeWriter text="안녕하세요" speed={150} />
              <br />
              <TypeWriter text="프론트엔드 개발자" speed={150} delay={1200} /> <br />
              <span className="highlight-blue">
                <TypeWriter text="김병년" speed={150} delay={2400} />
              </span>
              <TypeWriter text="입니다" speed={150} delay={3000} />
            </h1>

            <p className="sub-heading">
              <TypeWriter text="능동적인 개발자를 꿈꾸는" speed={100} delay={4000} />
            </p>
            <p className="intro-description">
              <TypeWriter text="새로운 기술과 트렌드를 탐구하며 성장하는 개발자입니다" speed={80} delay={6000} />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
