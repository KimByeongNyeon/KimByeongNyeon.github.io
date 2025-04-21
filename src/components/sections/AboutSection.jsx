import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const controls = useAnimation();
  const textRefs = {
    first: useRef(null),
    second: useRef(null),
    impact: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(textRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(textRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
      },
    }),
  };

  // 텍스트 배열을 개별 문자 모션 컴포넌트로 변환하는 함수
  const AnimatedText = ({ text, className }) => (
    <motion.span className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section id="about" className="section dark-section">
      <div className="container">
        <motion.div className="about-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} variants={fadeIn}>
          <div className="about-text-container">
            <div className="question-container" ref={textRefs.first}>
              <motion.h2 className="question impact-question" variants={fadeIn}>
                Q. React.js를 주력 프레임워크로 선택한 이유
              </motion.h2>
              <motion.p className="answer" variants={fadeIn}>
                Vue.js에서 <AnimatedText text="React.js로 전환한 경험" className="highlight-text" />이 있습니다. Vue.js도 훌륭한 프레임워크이지만, 개발 과정에서 자유도가 제한적이라고 느꼈습니다.
                React의 컴포넌트 기반 아키텍처와 함수형 프로그래밍 패러다임은 더 유연한 개발 방식을 제공하며, 특히 복잡한 상태 관리와 대규모 애플리케이션 구축에 적합하다고 판단했습니다. React 생태계의
                풍부한 라이브러리와 커뮤니티 지원도 큰 장점으로 작용했습니다.
              </motion.p>
            </div>

            <div className="question-container" ref={textRefs.second}>
              <motion.h2 className="question impact-question" variants={fadeIn}>
                Q. 프론트엔드 개발에서 중요하게 생각하는 가치
              </motion.h2>
              <motion.p className="answer" variants={fadeIn}>
                확장 가능한 아키텍처 설계와 사용자 중심 개발을 중요시합니다. <AnimatedText text="TypeScript를 도입한 이유" className="highlight-text" />도 코드의 안정성과 유지보수성 향상
                때문이었습니다. JS만으로 프로젝트를 진행하면서 타입 오류와 예측 불가능한 동작으로 인한 디버깅의 어려움을 경험했고, 이를 TS로 해결했습니다. 또한 Chrome Lighthouse를 활용한 성능 최적화와
                접근성 개선에 집중하며, 다양한 사용자들이 불편함 없이 서비스를 이용할 수 있도록 노력합니다.
              </motion.p>
            </div>

            <div className="question-container" ref={textRefs.impact}>
              <motion.h2 className="question impact-question" variants={fadeIn}>
                Q. 기술적 도전: Kotlin을 처음 접한 경험과 극복 과정
              </motion.h2>
              <motion.p className="answer" variants={fadeIn}>
                SSAFY 2차 프로젝트에서 <AnimatedText text="처음 접하는 Kotlin으로 모바일 앱 개발" className="highlight-text" />에 도전했습니다. Java 경험만 있던 저에게 함수형 프로그래밍 패러다임의
                Kotlin은 큰 도전이었습니다. 첫 2주간 밤샘 학습과 샘플 앱 개발을 병행하며 기본기를 닦았고, 특히{" "}
                <AnimatedText text="널 안전성(Null Safety)과 Retrofit을 활용한 API 통신" className="emphasis-text" />에 집중했습니다. 가장 어려웠던 부분은{" "}
                <AnimatedText text="소셜 로그인 구현" className="highlight-text" />
                이었습니다. 웹과 안드로이드의 OAuth 인증 흐름에는 큰 차이가 있었습니다. 웹에서는 단순히 인가 코드를 백엔드로 전달하고 액세스 토큰을 받아오는 구조였지만, 안드로이드에서는 클라이언트가
                직접 소셜 서비스와 통신하여
                <AnimatedText text="사용자 프로필과 토큰 데이터를 처리" className="emphasis-text" />
                해야 했습니다. 이 과정에서 <AnimatedText text="WebView 상태 관리와 토큰 저장" className="highlight-text" />에 어려움을 겪었고, 특히 로그인 상태 유지를 위한 토큰 관리 로직이 웹과는
                완전히 달라서 적응하는데 시간이 필요했습니다. 팀원들이 백엔드에 집중하는 동안, 저는 Android 공식 문서를 참고하며
                <AnimatedText text="SharedPreferences를 활용한 안전한 토큰 저장" className="highlight-text" />과 데이터 전달 로직을 구현했습니다. 이 과정에서 모바일 환경에서의 보안 처리와 사용자 경험
                최적화에 대해 깊이 이해하게 되었고,
                <AnimatedText text="4주 만에 클라이언트 기능 50% 이상을 개발" className="emphasis-text" />
                하는 성과를 달성했습니다. 특히 학생용과 교사용 앱을 모두 개발하면서 UI 컴포넌트의 재사용성에 대해 깊이 고민했습니다.
                <AnimatedText text="RecyclerView와 Fragment" className="highlight-text" />를 활용해 복잡한 화면 구조를 설계하고, MVVM 디자인 패턴을 적용해 비즈니스 로직과 UI를 분리했습니다. 이 경험은
                이후 React 프로젝트에서 컴포넌트 설계 방식에 큰 영향을 미쳤고, 새로운 기술을 빠르게 습득하고 실무에 적용하는 자신감을 갖게 되었습니다.
              </motion.p>
            </div>

            <div className="question-container" ref={textRefs.third}>
              <motion.h2 className="question" variants={fadeIn}>
                Q. 아키텍처 패턴 전환 및 컴포넌트 설계 경험
              </motion.h2>
              <motion.p className="answer" variants={fadeIn}>
                프로젝트 진행 중 MVC 패턴으로 개발하면서 컴포넌트가 과도하게 무거워지는 문제를 경험했습니다. 이에 대한 해결책을 찾던 중, 과거 Kotlin 프로젝트에서 경험했던{" "}
                <AnimatedText text="MVVM 패턴을 웹 개발에 적용" className="highlight-text" />
                하고자 했습니다. Smart-Dumb Component 패턴(Container-Presentational 패턴)을 학습하고 프로젝트에 도입했는데, 이 패턴은 상태 관리와 비즈니스 로직을 담당하는 Smart 컴포넌트와 UI 렌더링에
                집중하는 Dumb 컴포넌트로 분리하여 관심사를 명확히 분리합니다. 이 접근법 덕분에 코드의 재사용성이 크게 향상되었고, 테스트 용이성과 유지보수성이 개선되었습니다. 특히 Kotlin에서 배운
                MVVM의 핵심 원칙을 React 환경에 맞게 적용하면서 컴포넌트 설계 능력이 한층 성장했습니다.
              </motion.p>
            </div>

            <div className="question-container" ref={textRefs.fourth}>
              <motion.h2 className="question" variants={fadeIn}>
                Q. 현재 관심있는 기술과 발전 방향
              </motion.h2>
              <motion.div className="answer" variants={fadeIn}>
                <p>
                  SPA 방식의 Vite + React.js 프로젝트에서 렌더링 최적화의 한계를 경험한 후, 현재는 <AnimatedText text="Next.js와 SSR에 깊은 관심" className="emphasis-text" />을 갖고 있습니다. SEO
                  최적화를 위해 단순히 meta 데이터 추가를 넘어 SSR 기반으로의 전환을 연구 중입니다. 또한 Micro Frontends 아키텍처와 모듈 페더레이션에 관심이 있으며, 특히 Turborepo를 활용한 모노레포
                  환경 구축과 CI/CD 파이프라인 최적화에 대해 연구하고 있습니다. 이를 통해 대규모 애플리케이션의 확장성과 개발 생산성을 향상시키는 방법을 모색하고 있습니다.
                </p>
                <div className="about-links">
                  <motion.a href="https://github.com/KimByeongNyeon" className="link-button" whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 157, 0.4)" }} whileTap={{ scale: 0.95 }}>
                    깃허브
                  </motion.a>
                  <motion.a href="https://KimByeongNyeon.github.io/" className="link-button" whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 157, 0.4)" }} whileTap={{ scale: 0.95 }}>
                    포트폴리오
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="profile-image-container">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="image-overlay"></div>
              <img src="./assets/backgroud.jpg" alt="프로필 이미지" className="profile-card" />
              <motion.div className="image-glow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
