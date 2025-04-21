import { useEffect, useRef } from "react";
import Animation from "../utils/animation";

const ProgressComponent = () => {
  const refProgressBar = useRef(null);
  const refProgressBackground = useRef(null);

  useEffect(() => {
    Animation.layout.scrollProgress();
  }, []);

  return (
    <article id="progress">
      <p>Portfolio</p>

      <div className="scroll_background" ref={refProgressBackground}>
        <div className="scroll_progress" ref={refProgressBar}></div>
      </div>

      <p>{new Date().getFullYear()}</p>
    </article>
  );
};

export default ProgressComponent;
