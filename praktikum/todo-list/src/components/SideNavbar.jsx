import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const SideNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const open = () => setOpenNav(!openNav);
  return (
    <>
      <div className="sidenavbar">
        <div
          className="sidenav"
          style={{ width: `${openNav ? "0px" : "350px"}` }}
        >
          <a className="closebtn" onClick={() => open()}>
            &times;
          </a>
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/about/about-app">
            <a>About</a>
          </Link>
          <Link to="/about/about-author">
            <a>About Author</a>
          </Link>
        </div>
        <a onClick={() => open()} className="openbtn">
          &#9776;
        </a>
      </div>
    </>
  );
};

export default SideNavbar;
