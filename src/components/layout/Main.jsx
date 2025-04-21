import { useEffect } from "react";
import Animation from "../utils/animation";

const Main = ({ children }) => {
  useEffect(() => {
    Animation.layout.main();
  }, []);

  return <main>{children}</main>;
};

export default Main;
