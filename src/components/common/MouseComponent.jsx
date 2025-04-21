import { useEffect } from "react";
import Animation from "../utils/animation";

const MouseComponent = () => {
  useEffect(() => {
    Animation.layout.mouseCursor();
  }, []);

  return <div id="mouse"></div>;
};

export default MouseComponent;
