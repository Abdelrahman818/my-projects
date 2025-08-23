import React from "react";
import Landing from "./Pages/Landing";
import Admin from "./Pages/Admin";
import { useEffect } from "react";

const App = () => {
  const getOS = () => {
    const ua = navigator.userAgent;
    if (
      ua.indexOf("Windows NT") !== -1 ||
      ua.indexOf("Mac OS X") !== -1 ||
      ua.indexOf("Linux") !== -1
    ) return "desktop";
    else return "phone";
  };
  const renderRole = () => {
    if (localStorage.getItem('role')) return <Admin />
    else return <Landing os={getOS} />
  };
  useEffect(() => {
    getOS();
  }, []);
  return (
    <React.StrictMode>
      { renderRole() }
    </React.StrictMode>
  );
};

export default App;
