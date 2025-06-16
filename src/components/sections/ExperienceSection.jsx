import { motion } from "framer-motion";
import WaveComponent from "../common/WaveComponent";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "1차 프로젝트 - 금융 상품 추천 웹 서비스",
      company: "SSAFY",
      period: "2024.10 ~ 2024.11",
      description: ["프론트엔드 전체 기능 개발 담당", "Git 관리 총괄 담당", "실시간 암호화폐 시세 확인 기능 구현", "사용자 친화적 UI/UX 설계 및 개발"],
      tech: ["Vue.js", "JavaScript"],
    },
    {
      title: "2차 프로젝트 - 문화재 현장 체험학습 앱",
      company: "SSAFY",
      period: "2025.01 ~ 2025.02",
      description: [
        "클라이언트 기능 50% 이상 개발",
        "처음 접한 Kotlin으로 소셜 로그인 구현",
        "학생/선생님 어플 전체 UI/UX 설계 및 개발",
        "학생 어플: 만족도 조사, 오답노트, 마이페이지, 리워드(도감 페이지), 일정 화면 개발",
        "선생님 어플: 팀 관리, 마이페이지, 보고서 관리 화면 개발",
      ],
      tech: ["Kotlin", "Android Studio"],
    },
    {
      title: "3차 프로젝트 - 개인 맞춤형 금융 교육 플랫폼",
      company: "SSAFY",
      period: "2025.02 ~ 2025.04",
      description: [
        "프론트엔드 전체 기능 80% 개발 담당",
        "프로젝트 구조화(Smart-dumb-component) 패턴 도입 및 훅 계층화",
        "도메인별 훅 분리 및 전역적으로 사용할 공통 훅 작성(API, STOMP 연결 등)",
        "서버와의 모든 API 통신 연결 구현",
        "채팅 기능 개발",
        "이미지 최적화 기법 적용",
        "STOMP + API를 통한 실시간 방 관리 기능 개발",
      ],
      tech: ["React.js", "TypeScript", "STOMP", "pixi.js"],
    },
    {
      title: "4차 프로젝트 - 개인 얼굴형 분석 및 추천 헤어스타일 플랫폼",
      company: "SSAFY",
      period: "2025.04 ~ 2025.05",
      description: [
        "사용자 페이지 전체 기능 개발 담당",
        "프로젝트 구조화(Smart-dumb-component) 패턴 도입 및 훅 계층화",
        "도메인별 훅 분리 및 전역적으로 사용할 공통 훅 작성(API, STOMP 연결 등)",
        "face-api.js 를 통한 얼굴 인식 및 얼굴 방향 로직 구현",
        "React-query를 통한 비동기 캐싱 전략 도입",
        "Toss Payment API를 통한 예약 및 결제 기능 도입",
        "삼성 청년 SW 아카데미 최종 프로젝트 기업연계 프로젝트 1위 및 최우수상 수상",
      ],
      tech: ["React.js", "TypeScript", "React-query", "framer-motion", "redux-toolkit", "S3"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="section">
      <WaveComponent color="#2B2BCC" className="wave-top" />

      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          프로젝트 경험
        </motion.h2>

        <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} viewport={{ once: true }}>
          SSAFY에서 다양한 기술 스택과 역할을 경험하며 실무 역량을 키웠습니다. 프론트엔드 개발에 주력하면서 새로운 기술을 빠르게 습득하고 적용하는 능력을 갖추었습니다.
        </motion.p>

        <motion.div className="timeline" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {experiences.map((exp, index) => (
            <motion.div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} variants={item}>
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <div className="timeline-tech">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="timeline-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="wave">
        <WaveComponent color="#F5F5F5" className="wave-1" />
      </div>
    </section>
  );
};

export default ExperienceSection;
