import "../Styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="copy-right">
        <span>All Rights Reserved | Powered by codecraft {year} &copy;</span>
      </div>
      <div className="footer-infos d-flex">
        <div className="contact">
          <h4>Contact</h4>
          <ul className="contacts">
            <li className="phone-num">Phone: +0201006634977</li>
            <li>
              Github:{" "}
              <a href="https://github/Abdelrahman818/" target="blank">
                https://github/Abdelrahman818
              </a>
            </li>
            <li>
              Linked in:{" "}
              <a
                href="https://www.linkedin.com/in/abdelrahman-ismaeel-07737b367/"
                target="blank"
              >
                Click to view
              </a>
            </li>
          </ul>
        </div>
        <div className="download">
          <h4>Downloads</h4>
          <ul className="contacts">
            <li>
              <a
                style={{ color: "var(--color-main)", textDecoration: "none" }}
                download
                href="Abdelrahman_Ismaeel_CV.pdf"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
