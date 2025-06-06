import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from "gsap/all";
import Lenis from "lenis";
import { getAssetPath } from "../../utils/assetUtils";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
  // 스무스 스크롤 초기화
  static initSmoothScroll() {
    const lenis = new Lenis({
      duration: 1.2,
      smoothTouch: false, // 터치 스크롤 비활성화
      smoothWheel: false, // 휠 스무스 스크롤 비활성화
      wheelMultiplier: 1.0,
      infinite: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      normalize: false,
      syncTouch: false, // 터치 동기화 비활성화
      syncTouchLerp: 0.1, // 터치 러프 값 낮게 설정
      touchInertiaMultiplier: 35, // 터치 관성 낮게 설정
      touchMultiplier: 2, // 터치 배율 낮게 설정
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // GSAP ScrollTrigger와 Lenis 연동
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return lenis;
  }

  // 기본 레이아웃 애니메이션
  static layout = {
    // 헤더 애니메이션
    header: (target) => {
      // 마키 효과 애니메이션
      const sections = gsap.utils.toArray(".marquee .content");

      for (let i = 0; i <= sections.length - 1; i++) {
        gsap.to(sections[i], {
          xPercent: -100,
          repeat: -1,
          duration: 70,
          ease: "linear",
          modifiers: {
            xPercent: gsap.utils.wrap(-100, 0),
          },
        });
      }

      // 로고 애니메이션
      const logo = document.querySelector("#header .logo a img");
      if (logo) {
        gsap.fromTo(
          logo,
          {
            opacity: 0.8,
          },
          {
            opacity: 1,
            repeat: -1,
            duration: 0.5,
            ease: "power1.inout",
            yoyo: true,
          }
        );
      }

      // 헤더가 항상 고정되도록 설정
      const header = document.querySelector("#header");
      if (header) {
        header.style.cssText = `
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 2000 !important;
          background-color: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
          padding: 15px 0 !important;
          transform: translateZ(0) !important;
          -webkit-transform: translateZ(0) !important;
          will-change: transform !important;
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
        `;

        // 스크롤 이벤트 리스너 추가
        const handleScroll = () => {
          requestAnimationFrame(() => {
            header.style.cssText = `
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              z-index: 2000 !important;
              background-color: rgba(255, 255, 255, 0.95) !important;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
              padding: 15px 0 !important;
              transform: translateZ(0) !important;
              -webkit-transform: translateZ(0) !important;
              will-change: transform !important;
              backface-visibility: hidden !important;
              -webkit-backface-visibility: hidden !important;
            `;
          });
        };

        window.addEventListener("scroll", handleScroll);
      }
    },

    // 메인 레이아웃 애니메이션
    main: () => {
      // 섹션 페이드인 애니메이션
      const sections = gsap.utils.toArray(".section");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    },

    // 커스텀 마우스 커서 애니메이션
    mouseCursor: () => {
      const cursor = document.querySelector("#mouse");
      if (!cursor) return;

      document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power1.out",
        });
      });

      // 링크 요소에 호버 효과
      const links = document.querySelectorAll("a, button");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
            scale: 2,
            backgroundColor: "rgba(255, 107, 107, 0.8)",
            duration: 0.3,
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: "var(--primary-color)",
            duration: 0.3,
          });
        });
      });
    },

    // 스크롤 프로그레스 애니메이션
    scrollProgress: () => {
      const progressBar = document.querySelector(".scroll_progress");
      if (!progressBar) return;

      // 프로그레스 컴포넌트가 고정되도록 설정
      const progress = document.getElementById("progress");
      if (progress) {
        progress.style.cssText = `
          position: fixed !important;
          top: 0 !important;
          bottom: 0 !important;
          right: 20px !important;
          width: 3px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: center !important;
          z-index: 1999 !important;
          height: 100vh !important;
          padding: 20px 0 !important;
          pointer-events: none !important;
          opacity: 1 !important;
        `;
      }

      window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        progressBar.style.height = scrolled + "%";
      });
    },
  };

  // 인트로 섹션 애니메이션
  static introSection() {
    // 인트로 타이틀 스플릿 텍스트 애니메이션
    const introTitle = document.querySelector(".intro-title");
    if (introTitle) {
      const text = introTitle.textContent;
      introTitle.textContent = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "char";
        introTitle.appendChild(span);
      });

      gsap.fromTo(
        ".intro-title .char",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "back.out(1.7)",
          duration: 0.8,
        }
      );
    }

    // 배경 요소 애니메이션
    const bgElements = document.querySelectorAll(".intro-bg-element");
    if (bgElements.length > 0) {
      gsap.fromTo(
        bgElements,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1, // L 변수 대신 1 사용
          ease: "elastic.out(1, 0.5)",
        }
      );
    }
  }

  // 프로젝트 섹션 애니메이션
  static projectSection() {
    // 프로젝트 아이템 애니메이션
    const projects = gsap.utils.toArray(".project-item");

    projects.forEach((project, i) => {
      gsap.fromTo(
        project,
        {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    // 프로젝트 이미지 호버 효과
    const projectImages = document.querySelectorAll(".project-img");

    projectImages.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.out",
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });
  }

  // 스킬 섹션 애니메이션
  static skillSection() {
    // 스킬 아이템 프로그레스 애니메이션
    const skills = gsap.utils.toArray(".skill-item");

    skills.forEach((skill) => {
      const progress = skill.querySelector(".skill-progress-filled");
      if (!progress) return;

      const value = progress.getAttribute("data-value");

      gsap.fromTo(
        progress,
        { width: "0%" },
        {
          width: `${value}%`,
          duration: 1.5,
          scrollTrigger: {
            trigger: skill,
            start: "top 80%",
          },
        }
      );
    });
  }

  // 연락 섹션 애니메이션
  static contactSection() {
    // 연락처 아이템 애니메이션
    gsap.from(".contact-item", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
      },
    });

    // 폼 필드 애니메이션
    gsap.from(".form-field", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
      },
    });
  }

  // 웨이브 애니메이션
  static waveAnimation() {
    gsap.to(".wave-1", {
      x: -20,
      repeat: -1,
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
    });

    gsap.to(".wave-2", {
      x: 20,
      repeat: -1,
      duration: 15,
      ease: "sine.inOut",
      yoyo: true,
      delay: 0.5,
    });
  }
}

export default Animation;
