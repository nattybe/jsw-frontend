import React from "react";

const Header = () => {
  document.querySelector("body").setAttribute("data-theme", "dark");
  const menuChanger = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.getAttribute("data-sidebar") === "opened") {
      sidebar.setAttribute("data-sidebar", "closed");
    } else {
      sidebar.setAttribute("data-sidebar", "opened");
    }
  };
  return (
    <div className="header">
      <div
        className="menu p-2"
        onClick={() => {
          menuChanger();
        }}
      >
        <i className="fas fa-bars"></i>
      </div>
      <div className="logo">አሃዱ</div>
      <div className="profile">
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Header;
