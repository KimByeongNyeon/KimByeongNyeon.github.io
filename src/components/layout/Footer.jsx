import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.3 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const socialLinks = [{ name: "GitHub", url: "https://github.com/KimByeongNyeon", icon: "github_icon.png" }];

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2B2BCC"
            fillOpacity="0.1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <motion.div className="footer-content" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <motion.div className="footer-info" variants={fadeInUp}>
            <h3 className="footer-logo">개발자 포트폴리오</h3>
            <p className="footer-tagline">새로운 도전을 두려워하지 않는 개발자</p>
            <p className="footer-desc">React, TypeScript, Kotlin에 능숙한 프론트엔드 개발자입니다. 사용자 중심 설계와 최적화된 코드 작성에 집중합니다.</p>
          </motion.div>

          <motion.div className="footer-links-container" variants={fadeInUp}>
            <div className="footer-links">
              <h4>바로가기</h4>
              <ul>
                <li>
                  <a href="#intro">소개</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">기술스택</a>
                </li>
                <li>
                  <a href="#projects">프로젝트</a>
                </li>
                <li>
                  <a href="#experience">경험</a>
                </li>
                <li>
                  <a href="#contact">연락처</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>연락처</h4>
              <ul>
                <li>
                  <a href="mailto:qud5252@naver.com">
                    <i className="icon-email"></i>
                    qud5252@naver.com
                  </a>
                </li>
                <li>
                  <a href="tel:+8210XXXXXXXX">
                    <i className="icon-phone"></i>
                    010-7255-5901
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div className="footer-social" variants={fadeInUp}>
            <h4>소셜 미디어</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <motion.a key={index} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img src={`./assets/${link.icon}`} alt={link.name} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="footer-bottom" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <div className="copyright">
            <p>&copy; {currentYear} 포트폴리오. All Rights Reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">개인정보처리방침</a>
            <span className="divider">|</span>
            <a href="#">이용약관</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
