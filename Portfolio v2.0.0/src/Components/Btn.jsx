import { useState, useEffect, useRef } from "react";

const Btn = ({ displayText, returnClick, returnIsVisable }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [invisable, setInvisable] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && myRef.current) {
        myRef.current.click();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const click = () => {
    setIsClicked(true);
    setTimeout(() => setInvisable(true), 500);
    setTimeout(() => returnClick(true), 500);
    setTimeout(() => returnIsVisable(true), 500);
    setTimeout(() => displayText(true), 700);
  };
  return (
    <div ref={myRef} className={`space-btn ${isClicked?'shrink-btn':''} ${invisable?'hide':''}`} onClick={click}>
      <span className="corner tl"></span>
      <span className="hollow">click to open</span>
      <span className="corner br"></span>
    </div>
  );
}

export default Btn;
