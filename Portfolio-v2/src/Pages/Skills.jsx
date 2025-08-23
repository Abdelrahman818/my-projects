import { useEffect, useState } from "react";
import API from "../api";

const Skills = ({ show }) => {
  const [skills, setSkills] = useState([]);
  const [fade, setFade] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ type: "getSkills" })
    })
      .then(res => res.json())
      .then(setSkills);
  }, []);

  useEffect(() => {
    if (show) {
      setRender(true)
      setTimeout(() => setFade(true), 25);
    } else {
      setFade(false);
      setTimeout(() => setRender(false), 200);
    }
  }, [show]);

  return (
    <>
      {render &&
        <section className={`skills ${fade ? "fade-in" : "fade-out"}`}>
          <div className="title-cont">
            <span className="title hollow">my skills</span>
          </div>
          <div className="skills-title">
            <h2>here is a list of my skills</h2>
          </div>
          <div className="skills-cont">
            {skills.length > 0 &&
              skills.map((e, id) => (
                <div className="skill" key={id}>
                  <span>{e.skill}</span>
                </div>
              ))}
          </div>
        </section>
      }
    </>
  );
};

export default Skills;
