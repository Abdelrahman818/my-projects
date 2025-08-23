import { useEffect, useMemo, useState } from "react";
import Btn from "../Components/Btn";

const Greeting = ({ show }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isVisable, setIsVisable] = useState(false);
  const [fade, setFade] = useState(false);
  const [render, setRender] = useState(false);
  const [startWriting, setStartWriting] = useState(false);
  const [consoleText, setConsoleText] = useState('');
  const [idx, setIdx] = useState(0);

  const text = useMemo(() => (
    "I'm a front-end developer skilled in React.js, Vue.js, and JavaScript, " +
    "with a focus on building responsive, user-friendly web and mobile " +
    "interfaces. I combine strong technical skills with a background in " +
    "business information systems to deliver clean, efficient, and scalable " +
    "solutions."
  ), []);
  useEffect(() => {
    if (isClicked) {
      setConsoleText('');
      setIdx(0);
      setStartWriting(false);
      const timer = setTimeout(() => {
        setStartWriting(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);
  useEffect(() => {
    if (startWriting && idx < text.length) {
      const timer = setTimeout(() => {
        setConsoleText(prev => prev + text.charAt(idx));
        setIdx(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [startWriting, idx, text]);
  useEffect(() => {
    if (show) {
      setRender(true);
      setFade(true);
      setIsClicked(false);
      setStartWriting(false);
    } else {
      setFade(false);
      const timer = setTimeout(() => setRender(false), 200);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      {render && (
        <section className={`greeting ${fade ? 'fade-in' : 'fade-out'}`}>
          <div className="greeting-header">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <div className="hollow-bar"></div>
              <span className="msg-src">a message from earth</span>
            </div>
            <h2 className="greeting-msg hollow">Hello, comrade of the cosmos!</h2>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <span className="msg-src">a message from earth</span>
              <div className="hollow-bar"></div>
            </div>
          </div>
          <h2 className="my-name hollow">i am abdelrahman</h2>

          {!isClicked && (
            <Btn
              displayText={setStartWriting}
              returnClick={setIsClicked}
              returnIsVisable={setIsVisable}
            />
          )}

          <div className={`console ${isClicked ? '' : 'hide'} ${isVisable ? 'extend' : ''}`}>
            <span className="corner tl"></span>
            <p>{consoleText}<span className="cursor">|</span></p>
            <span className="corner br"></span>
          </div>
        </section>
      )}
    </>
  );
};

export default Greeting;
