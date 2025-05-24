import { useState } from "react";
import "../Styles/navbar.css";

const Navbar = () => {
  const [isVisable, setIsVisable] = useState(false);
  const toggleVisable = () => setIsVisable(!isVisable);

  return (
    <>
      <nav className="main-nav bg-dark color-light justify-content-space w-100 shadow-lg">
        <div className="logo">
          <img src={require('../logo.png')} alt="sorry" />
        </div>
        <div className="more position-relative" onClick={toggleVisable}>
          <i
            className={`fa-solid fa-gear ${isVisable ? "full-rotation" : ""}`}
          ></i>
          <ul
            className={`more-options m-0 position-absolute bg-dark ${
              isVisable ? "show" : ""
            }`}
          >
            <li>
              <a
                style={{ color: "var(--color-main)", textDecoration: "none" }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                style={{ color: "var(--color-main)", textDecoration: "none" }}
                href="Abdelrahman_Ismaeel_CV.pdf"
                download
              >
                Download CV
              </a>
            </li>
            <li>
              <a
                style={{ color: "var(--color-main)", textDecoration: "none" }}
                href="#footer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
