import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { useGlobalContext } from "../Auth/ContextProvider";
import { SidebarData } from "./SidebarData";

const Navbar = () => {
  const { closeSidebar, openSidebar, isSidebarOpen, setLoading, setAuth } =
    useGlobalContext();

  const logout = async () => {
    localStorage.removeItem("accessToken");
    setAuth({ status: false, id: 0, firstname: "", successfull: true });
  };

  return (
    <>
      {/*Navbar bar */}
      <div className="navbar">
        <button className="nav-menu-icon" onClick={openSidebar}>
          <FaIcons.FaBars className="navbar-bar" />
        </button>
      </div>
      <div
        className={
          isSidebarOpen ? "sidebar-container active" : "sidebar-container"
        }
      >
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
            <button className="nav-menu-icon" onClick={closeSidebar}>
              <FaIcons.FaWindowClose />
            </button>
          </li>
          <h4 className="dash">Dashboard</h4>

          {/*Loop SibarData LIST*/}
          {SidebarData.map((sidebaritem) => {
            if (sidebaritem.path === "/dashboard") {
              return (
                <li
                  key={sidebaritem.id}
                  className={sidebaritem.cNmae}
                  onClick={closeSidebar}
                >
                  <Link to={sidebaritem.path}>
                    {sidebaritem.icon}
                    <span>{sidebaritem.title}</span>
                  </Link>
                </li>
              );
            } else if (sidebaritem.path === "/users") {
              return (
                <li
                  key={sidebaritem.id}
                  className={sidebaritem.cNmae}
                  onClick={closeSidebar}
                >
                  <Link to={sidebaritem.path}>
                    {sidebaritem.icon}
                    <span>{sidebaritem.title}</span>
                  </Link>
                </li>
              );
            } else if (sidebaritem.path === "/reports") {
              return (
                <li
                  key={sidebaritem.id}
                  className={sidebaritem.cNmae}
                  onClick={closeSidebar}
                >
                  <Link to={sidebaritem.path}>
                    {sidebaritem.icon}
                    <span>{sidebaritem.title}</span>
                  </Link>
                </li>
              );
            } else if (sidebaritem.path === "/notifications") {
              return (
                <li
                  key={sidebaritem.id}
                  className={sidebaritem.cNmae}
                  onClick={closeSidebar}
                >
                  <Link to={sidebaritem.path}>
                    {sidebaritem.icon}
                    <span>{sidebaritem.title}</span>
                  </Link>
                </li>
              );
            } else if (sidebaritem.path === "/createaccount") {
              return (
                <li
                  key={sidebaritem.id}
                  className={sidebaritem.cNmae}
                  onClick={closeSidebar}
                >
                  <Link to={sidebaritem.path}>
                    {sidebaritem.icon}
                    <span>{sidebaritem.title}</span>
                  </Link>
                </li>
              );
            } else if (sidebaritem.title === "Logout") {
              return (
                <li
                  key={sidebaritem.id}
                  className={sidebaritem.cNmae}
                  onClick={closeSidebar}
                >
                  <a onClick={logout} href={`/`}>
                    {sidebaritem.icon}
                    <span>{sidebaritem.title}</span>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
