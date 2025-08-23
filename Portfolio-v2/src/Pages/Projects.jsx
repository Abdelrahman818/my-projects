import { useState, useEffect } from "react";
import Btn from "../Components/Btn";
import API from "../api";

const Projects = ({ show }) => {
  const [data, setData] = useState([]);
  const [projectIdx, setProjectIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isVisable, setIsVisable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [fade, setFade] = useState(false);
  const [render, setRender] = useState(false);
  const [startWriting, setStartWriting] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [consoleText, setConsoleText] = useState('');
  const [linkText, setLinkText] = useState('');

  const resetConsole = () => {
    setConsoleText('');
    setLinkText('');
    setIsLink(false);
    setCharIdx(0);
    setStartWriting(false);
    setSwitching(true);
    setTimeout(() => {
      setSwitching(false);
      setStartWriting(true);
    }, 710);
  };

  const inc = () => {
    if (projectIdx + 1 <= data.length - 1) {
      setProjectIdx(projectIdx + 1);
      resetConsole();
    }
  };
  const dec = () => {
    if (projectIdx > 0) {
      setProjectIdx(projectIdx - 1);
      resetConsole();
    }
  };
  useEffect(() => {
    fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ type: "getProjects" })
    })
      .then(res => res.json())
      .then(setData);
  }, []);
  useEffect(() => {
    if (show) {
      setRender(true);
      setTimeout(() => setFade(true), 25);
    } else {
      setFade(false);
      setTimeout(() => setRender(false), 200);
    }
  }, [show]);
  useEffect(() => {
    if (!startWriting || data.length === 0) return;

    const { disc, link } = data[projectIdx];
    let timer;

    if (charIdx < disc.length) {
      timer = setTimeout(() => {
        setConsoleText(prev => prev + disc.charAt(charIdx));
        setCharIdx(prev => prev + 1);
      }, 50);

    } else if (charIdx < disc.length + link.length) {
      const linkIdx = charIdx - disc.length;
      timer = setTimeout(() => {
        setLinkText(prev => prev + link.charAt(linkIdx));
        setCharIdx(prev => prev + 1);
      }, 50);
      setIsLink(true);
    }

    return () => clearTimeout(timer);
  }, [startWriting, charIdx, projectIdx, data]);

  return (
    <>
      {render &&
        <section className={`projects ${fade ? 'fade-in' : 'fade-out'}`}>
          <div className="title-cont">
            <h2 className="hollow">my projects</h2>
          </div>
          <div className="project-name d-flex align-items-center justify-content-between w-100">
            <div className="arrow left" onClick={dec}></div>
            <span>{data.length > 0 && `project ${projectIdx + 1}: ` + data[projectIdx].name}</span>
            <div className="arrow right" onClick={inc}></div>
          </div>

          {!isClicked && (
            <Btn
              displayText={(val) => {
                setStartWriting(val);
                setCharIdx(0);
              }}
              returnClick={() => setIsClicked(true)}
              returnIsVisable={() => setIsVisable(true)}
            />
          )}

          <div className={`console ${isVisable ? '' : 'hide'} ${switching ? 'shrink-console' : ''} ${isClicked && !switching ? 'extend' : ''}`}>
            <span className="corner tl"></span>
            <p className={switching ? 'transp' : undefined}>
              {consoleText}
              {isLink && (
                <>
                  <br />
                  <a
                    href={data[projectIdx]?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginTop: '10px', color: "hsl(205 100% 60% / 1)", fontFamily: "inherit", fontWeight: 'bold'}}
                    >
                    {linkText}
                  </a>
                </>
              )}
              <span className="cursor ml-1">|</span>
            </p>
            <span className="corner br"></span>
          </div>
        </section>
      }
    </>
  );
};

export default Projects;
