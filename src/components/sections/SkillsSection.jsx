import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Animation from "../utils/animation";
import WaveComponent from "../common/WaveComponent";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoverIcon, setHoverIcon] = useState(null);

  useEffect(() => {
    Animation.skillSection();
  }, []);

  const skillReasons = {
    frontend:
      "프론트엔드 개발은 직관적인 사용자 경험 구현에 가장 중요한 영역입니다. 특히 React와 TypeScript 조합은 복잡한 상태 관리와 대규모 프로젝트에서 빛을 발합니다. 초반에는 바닐라 JS로 시작했지만, 프로젝트 규모가 커질수록 타입 안정성과 컴포넌트 재사용성이 필요해 이 기술 스택을 선택했습니다. 특히 React의 선언적 UI 패러다임은 복잡한 인터페이스를 효율적으로 구현하는 데 큰 도움이 되었습니다.",
    backend:
      "웹 개발자로서 백엔드에 대한 이해는 필수적이라고 생각합니다. 초기에는 단순히 API를 소비하는 역할이었지만, 풀스택 역량을 키우기 위해 Python과 Django를 학습했습니다. 이후 Java와 Spring Boot까지 경험하면서 서로 다른 백엔드 아키텍처를 이해하게 되었고, 이는 프론트엔드 개발 시 효율적인 데이터 구조 설계와 API 통신 방식을 결정하는 데 큰 도움이 되었습니다.",
    mobile:
      "모바일 앱 개발에 관심을 가지면서 Flutter와 Kotlin을 학습했습니다. Flutter는 크로스 플랫폼 개발의 효율성을 경험하게 해주었고, Kotlin을 통해 네이티브 Android 개발의 깊이를 이해할 수 있었습니다. 특히 모바일 앱 개발 경험은 반응형 웹 디자인과 터치 인터페이스 최적화에 큰 도움이 되었으며, 다양한 디바이스 환경에서의 일관된 사용자 경험을 구현하는 방법을 배울 수 있었습니다.",
    tools:
      "효율적인 개발 환경과 협업 시스템 구축은 코드 작성만큼이나 중요합니다. Git을 통한 버전 관리는 모든 프로젝트의 기본이 되었으며, Jira를 활용한 애자일 프로젝트 관리 경험은 팀 단위 개발에서 큰 자산이 되었습니다. 이러한 도구들을 활용하면서 체계적인 개발 프로세스의 중요성과 효율적인 협업 방식에 대해 깊이 이해할 수 있었습니다.",
  };

  const skills = [
    {
      id: "frontend",
      name: "프론트엔드",
      icon: "./assets/React.svg",
      description: "웹 프론트엔드 개발에 필요한 기술들을 다루고 있습니다.",
      techs: ["HTML", "CSS/SCSS", "JavaScript", "React", "TypeScript"],
      color: "#61DAFB",
    },
    {
      id: "backend",
      name: "백엔드",
      icon: "./assets/Python-Light.svg",
      description: "서버 사이드 개발 및 API 구현 기술을 다룹니다.",
      techs: ["Python", "Django", "Java", "Spring Boot"],
      color: "#306998",
    },
    {
      id: "mobile",
      name: "모바일",
      icon: "./assets/Flutter-Light.svg",
      description: "모바일 앱 개발에 필요한 기술들을 보유하고 있습니다.",
      techs: ["Flutter", "Kotlin"],
      color: "#0553B1",
    },
    {
      id: "tools",
      name: "개발 도구",
      icon: "./assets/github.png",
      description: "개발 협업과 프로젝트 관리에 필요한 도구들을 활용합니다.",
      techs: ["Git", "Jira"],
      color: "#24292E",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: {
      scale: 1.05,
      backgroundColor: "var(--primary-color)",
      color: "#fff",
      boxShadow: "0 4px 12px rgba(43, 43, 204, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const reasonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section id="skills" className="section">
      <WaveComponent color="#F5F5F5" className="wave-top" />

      <motion.div className="container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          기술 스택
        </motion.h2>

        <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} viewport={{ once: true }}>
          다양한 문제 해결을 위해 적합한 기술을 선택하고 학습해왔습니다. 각 기술은 실제 프로젝트 상황에서 직면한 도전을 해결하기 위해 선택되었으며, 문제 상황에 맞는 최적의 도구를 선택하고 적용하는
          능력을 키우는 데 집중했습니다.
        </motion.p>

        <div className="skills-tab-container">
          {skills.map((skill) => (
            <motion.button
              key={skill.id}
              className={`skill-tab`}
              onClick={() => handleTabClick(skill.id)}
              variants={tabVariants}
              animate={activeTab === skill.id ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: skills.findIndex((s) => s.id === skill.id) * 0.1 }}
            >
              {skill.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div className="skill-reason" key={activeTab} variants={reasonVariants} initial="hidden" animate="visible" exit="exit">
            {skillReasons[activeTab]}
          </motion.div>
        </AnimatePresence>

        <motion.div className="skills-container" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-card ${activeTab === skill.id ? "active-card" : ""}`}
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
              }}
              style={{
                borderTop: activeTab === skill.id ? `5px solid ${skill.color}` : "",
              }}
            >
              <div className="skill-header">
                <motion.div
                  className="skill-icon"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoverIcon(skill.id)}
                  onHoverEnd={() => setHoverIcon(null)}
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    animate={{
                      rotate: hoverIcon === skill.id ? [0, -5, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
                <h3 className="skill-title">{skill.name}</h3>
              </div>
              <motion.p className="skill-description" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                {skill.description}
              </motion.p>
              <div className="skill-techs">
                {skill.techs.map((tech, idx) => (
                  <motion.span key={idx} className="skill-tech" custom={idx} variants={techBadgeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {tech}
                    {idx < skill.techs.length - 1 && ", "}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="skills-quote" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} viewport={{ once: true }}>
          <blockquote>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
              "적절한 도구를 선택하는 것은 개발의 절반을 이루는 중요한 과정입니다."
            </motion.span>
          </blockquote>
        </motion.div>
      </motion.div>

      <div className="wave">
        <WaveComponent color="#2B2BCC" className="wave-2" />
      </div>
    </section>
  );
};

export default SkillsSection;
