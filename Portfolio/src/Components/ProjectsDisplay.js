import { useState, useEffect } from "react";
import "../Styles/projects.css";

const Projects = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({}); // { [projectIndex]: currentImgIndex }

  const getData = async () => {
    const res = await fetch("projects.json");
    const json = await res.json();
    setData(json);

    // Initialize selected to first img for all projects
    const initSelected = {};
    json.forEach((proj, idx) => {
      initSelected[idx] = 0;
    });
    setSelected(initSelected);
  };

  useEffect(() => {
    getData();
  }, []);

  const nextImage = (projectIndex) => {
    setSelected((prev) => {
      const current = prev[projectIndex];
      const total = data[projectIndex]?.imgs.length || 1;
      const next = (current + 1) % total;
      return { ...prev, [projectIndex]: next };
    });
  };

  const prevImage = (projectIndex) => {
    setSelected((prev) => {
      const current = prev[projectIndex];
      const total = data[projectIndex]?.imgs.length || 1;
      const prevIdx = (current - 1 + total) % total;
      return { ...prev, [projectIndex]: prevIdx };
    });
  };

  return (
    <section id="projects" className="projects mt-5">
      <h2>Projects showcase</h2>
      <div className="projects-cont">
        {data.map((project, projIdx) => (
          <div className="project" key={project.id}>
            <h3>{project.id} - {project.name}</h3>

            <div className="project-temp my-3 position-relative" style={{ position: "relative" }}>
              {project.imgs.length > 1 &&
                <span
                  className="prev-img"
                  onClick={() => prevImage(projIdx)}
                >
                  &#8249;
                </span>
              }

              <div className="imgs-cont-fade" style={{ position: "relative" }}>
                {project.imgs.map((imgNum, imgIdx) => (
                  <img
                    key={imgNum}
                    src={require(`../imgs/Capture${imgNum}.jpeg`)}
                    alt={`Project ${project.name} img ${imgIdx}`}
                    className={`fade-img ${selected[projIdx] === imgIdx ? "in" : "out"}`}
                    style={{opacity: selected[projIdx] === imgIdx ? 1 : 0}}
                  />
                ))}
              </div>
              {project.imgs.length > 1 &&
                <span
                  className="next-img"
                  onClick={() => nextImage(projIdx)}
                >
                  &#8250;
                </span>
              }
            </div>
            <p>{project.disc}</p>
            <div className="project-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Try
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
