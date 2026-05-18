import { useEffect, useState, useCallback } from "react";

import Greeting from "./Greeting";
import Projects from "./Projects";
import Links from "../Components/Links";
import Skills from "./Skills";
import Contact from "./Contact";

import "../Styles/greeting.css";
import "../Styles/btn.css";
import "../Styles/links.css";
import "../Styles/earth.css";
import "../Styles/projects.css";
import "../Styles/skills.css";
import "../Styles/loading.css";
import "../Styles/responsive.css";

const Landing = ({ os }) => {
  const [idx, setIdx] = useState(0);

  const handleKeyDown = useCallback((key) => {
    if (key.key === "ArrowRight") {
      setIdx((prev) => Math.min(prev + 1, 3));
    } else if (key.key === "ArrowLeft") {
      setIdx((prev) => Math.max(prev - 1, 0));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const show = {
    greet: idx === 0,
    skills: idx === 1,
    projects: idx === 2,
    contact: idx === 3,
  };

  return (
    <main>
      {/* components */}
    </main>
  );
};

export default Landing;
