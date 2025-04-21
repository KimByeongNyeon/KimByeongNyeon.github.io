import { useEffect, useRef } from "react";
import Animation from "../utils/animation";

const ProgressComponent = () => {
  const refProgressBar = useRef(null);
  const refProgressBackground = useRef(null);

  useEffect(() => {
    const progressBar = refProgressBar.current;
    const progressElement = document.getElementById("progress");

    // CSS !important 속성을 사용하여 스타일 강제 적용
    if (progressElement) {
      progressElement.style.cssText = `
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

    // 스크롤 이벤트 핸들러를 직접 등록
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      if (progressBar) {
        progressBar.style.height = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 초기 로드 시 스크롤 위치 설정
    handleScroll();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progressStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: "20px",
    width: "3px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1999,
    height: "100vh",
    padding: "20px 0",
    pointerEvents: "none",
    opacity: 1,
    transition: "opacity 0.3s ease",
  };

  return (
    <article id="progress" style={progressStyle}>
      <p style={{ fontSize: "0.8rem", writingMode: "vertical-rl", transform: "rotate(180deg)", color: "var(--primary-color)", fontWeight: 500 }}>Portfolio</p>

      <div className="scroll_background" ref={refProgressBackground} style={{ width: "3px", height: "60%", backgroundColor: "rgba(0, 0, 0, 0.1)", position: "relative", borderRadius: "10px" }}>
        <div className="scroll_progress" ref={refProgressBar} style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: "var(--primary-color)", borderRadius: "10px" }}></div>
      </div>

      <p style={{ fontSize: "0.8rem", writingMode: "vertical-rl", transform: "rotate(180deg)", color: "var(--primary-color)", fontWeight: 500 }}>{new Date().getFullYear()}</p>
    </article>
  );
};

export default ProgressComponent;
