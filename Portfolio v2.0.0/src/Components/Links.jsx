const Links = ({ show }) => {
  return (
    <ul className={`links ${show?'':'hide'}`}>
      <li className="github"></li>
      <li className="linkedin"></li>
      <li className="phone"><i className="fa-solid fa-phone"></i></li>
    </ul>
  );
}

export default Links;
