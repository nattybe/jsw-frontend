import React, {  } from "react";

const Header = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  return <div className="header" >
    <div className="menu">
    <i className="fas fa-bars"></i>
    </div>
    <div className="logo">Ahadu</div>
    <div className="profile">
        <i className="fas fa-user"></i>
    </div>
  </div>;
};

export default Header;
