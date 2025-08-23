import { useEffect, useState } from "react";

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
  const [greet, setGreet] = useState(true);
  const [projects, setProjects] = useState(false);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);
  useEffect(() => {
    document.onkeydown = (key) => {
      renderComp();
      if (key.key === "ArrowRight" && (idx < 3)) setIdx(idx + 1);
      else if (key.key === "ArrowLeft" && (idx !== 0)) setIdx(idx - 1);
    };
    renderComp();
  }, [idx]);
  const renderComp = () => {
    switch (idx) {
      case 0:
        setGreet(true);
        setSkills(false);
        setProjects(false);
        setContact(false)
        break;
      case 1:
        setGreet(false);
        setSkills(true);
        setProjects(false);
        setContact(false)
        break;
      case 2:
        setGreet(false);
        setSkills(false);
        setProjects(true);
        setContact(false)
        break;
      case 3:
        setGreet(false);
        setSkills(false);
        setProjects(false);
        setContact(true)
        break;
      default:
        setGreet(true);
        setProjects(false);
        setSkills(false);
        setContact(false)
        break;
    }
  };

  return (
    <main>
      <Greeting show={greet} />
      <Skills show={skills} />
      <Projects show={projects} />
      <Contact show={contact} />
      <Links show={!projects} />
      <div className="earth-cont">
        <div className="earth icon" style={{transform: `translate(-50%, -50%) rotate(${idx * 90}deg)`}}></div>
      </div>
        { os === 'desktop' &&
          <>
            <div className="keys-icons d-flex w-100 justify-content-between align-items-center">
              <div className="enter icon">
                <span>open</span>
              </div>
              <div className="trans-arrows icon">
                <span>translate</span>
              </div>
            </div>
          </>
        }
    </main>
  );
};

export default Landing;
