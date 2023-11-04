import React from "react";
import {} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const changeTheme = () => {
    const theme = document.querySelector(".App").getAttribute("data-theme");
    document.documentElement.classList.add("theme-transition");
    if (theme === "light") {
      document.querySelector(".App").setAttribute("data-theme", "dark");
      document.getElementById("theme-toggler").classList.add("fa-sun");
      document.getElementById("theme-toggler").classList.remove("fa-moon");
    } else {
      document.querySelector(".App").setAttribute("data-theme", "light");
      document.getElementById("theme-toggler").classList.add("fa-moon");
      document.getElementById("theme-toggler").classList.remove("fa-sun");
    }
    window.setTimeout(function () {
      document.documentElement.classList.remove("theme-transition");
    }, 1000);
  };
  return (
    <div id="sidebar" className="sidebar sidebar-transition" data-sidebar="opened">
      <div className="topper">
        <div className="ico">
          <i className="fas fa-home"></i>
        </div>
        <div className="ico">
          <i className="far fa-sun"></i>
        </div>
        <div className="ico">
          <i className="fas fa-search"></i>
        </div>
        <div className="ico">
          <i
            id="theme-toggler"
            className="fas fa-sun"
            onClick={() => {
              changeTheme();
            }}
          ></i>
        </div>
      </div>
      <div className="footer">
        <div className="ico">
          <i className="fas fa-globe"></i>
        </div>
        <div className="ico">
          <i className="fas fa-bell"></i>
        </div>
        {/* <div className="ico">
          <i className="fas fa-home"></i>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
