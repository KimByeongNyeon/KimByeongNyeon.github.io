import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Animation from "../utils/animation";
import WaveComponent from "../common/WaveComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ProjectsSection = () => {
  useEffect(() => {
    Animation.projectSection();
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("list"); // "list" 또는 "detail"

  const projects = [
    {
      id: "CashFit",
      title: "CashFit",
      subtitle: "사용자 금융상품 추천 웹 어플리케이션",
      description:
        "다양한 금융상품(예/적금, 주식, 코인)을 사용자에게 추천하는 웹 애플리케이션입니다. 사용자는 추천받은 상품에 대한 의견을 나눌 수 있는 커뮤니티 게시판을 이용할 수 있으며, 각 상품에 대한 코멘트 작성이 가능합니다. AI 기반 맞춤형 금융 상품 추천과 직관적인 UI를 통해 금융 정보에 쉽게 접근할 수 있습니다.",
      image: "./assets/cashfit.png",
      tech: ["Vue.js", "JavaScript"],
      features: ["금융 상품 추천(예/적금, 주식, 코인)", "커뮤니티 게시판 및 댓글 기능", "로그인/회원가입 시스템", "환율 계산기", "좋아요 기능", "AI 기반 추천/검색 서비스", "상품 그래프 시각화"],
      techReason: "프론트엔드는 Vue.js와 JavaScript를 사용하여 반응형 사용자 인터페이스를 구현했으며, UpBit API, Candle Chart library를 통한 실시간 암호화폐 기능을 구현하였습니다.",
      period: "2024.10 ~ 2024.11",
      role: "팀장, 프론트엔드 총괄",
      links: {
        github: "https://github.com/",
      },
    },
    {
      id: "mbg",
      title: "MBG",
      subtitle: "문화재 현장 체험학습 모바일 애플리케이션",
      description:
        "현장학습에서 학생들은 사진 인증의 번거로움, 단순 관람과 불분명한 학습 목적으로 인한 지루함을 호소하고 있으며, 인솔자들은 실시간 활동 현황 파악의 어려움과 체계적인 관리 도구의 부재로 고민하고 있습니다. 이러한 문제를 해결하고자 GPS 위치 서비스와 게임적 요소를 접목한 새로운 교육용 앱을 기획했습니다. 학생들은 퀴즈와 미션을 해결하며 문화재를 즐겁게 배울 수 있고, 인솔자들은 실시간 모니터링과 체계적인 관리 도구를 활용할 수 있어 보다 효율적인 현장학습이 가능해집니다.",
      image: "./assets/MBG.png",
      tech: ["Kotlin", "Android Studio"],
      features: ["GPS 위치 기반 문화재 정보 제공", "퀴즈와 미션 기반 게이미피케이션", "인솔자용 실시간 학생 활동 모니터링", "체계적인 현장학습 관리 도구"],
      techReason:
        "클라이언트는 Kotlin으로 개발하여 안드로이드 앱의 안정성과 간결한 코드 작성이 가능했습니다. Retrofit2와 OKHTTP3로 효율적인 네트워크 통신을 구현했으며, Glide를 통해 이미지 로딩을 최적화했습니다. 의존성 주입에는 Hilt를 활용하여 코드의 유지보수성을 향상시켰습니다.",
      period: "2025.01 ~ 2025.02",
      role: "안드로이드 개발 총괄, 깃 총괄",
      links: {
        github: "https://github.com/",
      },
    },
    {
      id: "Fincatch",
      title: "FinCatch",
      subtitle: "개인 맞춤형 금융 교육 서비스",
      description:
        "FinCatch는 사용자의 소비 데이터를 분석하여 금융 습관을 시각적으로 제공합니다. 맞춤형 금융 교육 콘텐츠를 제공하여 사용자의 관심 분야를 공부할 수 있습니다. 개인의 소비 패턴을 분석, 학습 방향을 제안합니다. 금융 배틀을 통해 포인트를 얻고 다양한 고양이를 획득할 수 있는 게이미피케이션 요소를 적용했습니다.",
      image: "./assets/fincatch.png",
      tech: ["React.js", "TypeScript"],
      features: ["소비 데이터 분석 및 금융 습관 시각화", "맞춤형 금융 교육 콘텐츠 제공", "개인 소비 패턴 분석 및 학습 방향 제안", "금융 배틀 및 고양이 캐릭터 수집 게이미피케이션"],
      techReason: "프론트엔드는 사용자 인터페이스의 복잡성과 상태 관리를 위해 React.js와 TypeScript를 사용했습니다. 또한, pixi.js 를 통해 Sprite 이미지를 움직이는 애니메이션으로 구현하였습니다.",
      period: "2025.02 ~ 2025.04",
      role: "프론트엔드 개발, 게이미피케이션 요소 설계, 데이터 시각화",
      links: {
        github: "https://github.com/",
      },
    },
    {
      id: "toBeContinued",
      title: "toBe Continued",
      subtitle: "얼굴형 맞춤 헤어스타일 추천 웹 애플리케이션",
      description:
        "비컨 기업과 연계된 프로젝트로, 사용자의 얼굴형을 분석하여 최적의 헤어스타일을 추천하는 웹 애플리케이션입니다. 머신러닝 모델을 활용해 정확한 얼굴형 분석과 개인화된 추천 서비스를 제공합니다 해당 프로젝트는 (주)Becon과 연계한 프로젝트로, 삼성 청년 소프트웨어 아카데미 12기 최종 프로젝트 상위 6팀 및 최우수상 수상 프로젝트 입니다.",
      image: "./assets/logo.png",
      tech: ["React.js", "Spring Boot", "face-api.js"],
      features: ["얼굴형 실시간 분석", "개인화된 헤어스타일 추천", "가상 헤어스타일 시뮬레이션", "미용실 예약 시스템"],
      techReason: "클라이언트 측 얼굴 인식과 분석을 위해 React.js와 face-api.js 를 선택했습니다. 이를 통해 사용자 브라우저에서 직접 얼굴 분석이 가능합니다.",
      period: "2025.04 ~ 2025.05",
      role: "팀장, 프론트 엔드 총괄",
      links: {
        github: "https://github.com/",
      },
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const detailVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const showProjectDetail = (project) => {
    setSelectedProject(project);
    setViewMode("detail");
    window.scrollTo({ top: document.getElementById("projects").offsetTop - 100, behavior: "smooth" });
  };

  const backToList = () => {
    setViewMode("list");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          프로젝트
        </motion.h2>

        <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          다양한 기술 스택과 도메인에서의 프로젝트 경험을 통해 실무 역량을 키워왔습니다. 사용자 중심의 인터페이스 설계와 최적의 기술 선택에 집중하여 개발했습니다.
        </motion.p>

        <AnimatePresence mode="wait">
          {viewMode === "list" ? (
            <motion.div key="project-list" className="projects-container" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
                  }}
                  onClick={() => showProjectDetail(project)}
                >
                  <div className="project-img">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span>자세히 보기</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <div className="project-tech-preview">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="project-tech-item">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && <span className="project-tech-more">+{project.tech.length - 3}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="project-detail" className="project-detail-container" variants={detailVariants} initial="hidden" animate="visible" exit="exit">
              <div className="project-detail-header">
                <motion.button className="back-button" onClick={backToList} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  목록으로 돌아가기
                </motion.button>
              </div>

              <div className="project-detail-content">
                <div className="project-detail-main">
                  <div className="project-detail-image">
                    <motion.img src={selectedProject.image} alt={selectedProject.title} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />
                  </div>

                  <div className="project-detail-info">
                    <motion.h2 className="project-detail-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      {selectedProject.title}
                    </motion.h2>

                    <motion.p className="project-detail-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                      {selectedProject.subtitle}
                    </motion.p>

                    <motion.div className="project-detail-meta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                      <div className="meta-item">
                        <span className="meta-label">기간</span>
                        <span className="meta-value">{selectedProject.period}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">역할</span>
                        <span className="meta-value">{selectedProject.role}</span>
                      </div>
                    </motion.div>

                    <motion.div className="project-detail-tech" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                      <h3>사용 기술</h3>
                      <div className="tech-list">
                        {selectedProject.tech.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div className="project-detail-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="action-link github">
                        <img src="./assets/github_icon.png" alt="GitHub" />
                        GitHub
                      </a>
                    </motion.div>
                  </div>
                </div>

                <div className="project-detail-sections">
                  <motion.div className="detail-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                    <h3>프로젝트 설명</h3>
                    <p>{selectedProject.description}</p>
                  </motion.div>

                  <motion.div className="detail-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <h3>주요 기능</h3>
                    <ul className="feature-list">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div className="detail-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
                    <h3>기술 선택 이유</h3>
                    <p>{selectedProject.techReason}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="wave">
        <WaveComponent color="#F5F5F5" className="wave-1" />
      </div>
    </section>
  );
};

export default ProjectsSection;
