import { useEffect, useState } from "react";
import '../Styles/scrollbtn.css';

const ScrollToTop = () => {
  const [btn, setBtn] = useState(false);
  const btnVisability = () => {
    if (window.scrollY > 300) setBtn(true);
    else setBtn(false);
  };
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", btnVisability);
    return () => window.removeEventListener("scroll", btnVisability);
  }, [])
  return (
    <>
      {btn &&
        <div className="scroll-btn" onClick={scrollToUp}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      }
    </>
  );
}

export default ScrollToTop;
