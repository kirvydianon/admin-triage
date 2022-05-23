import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./Dashboard.css";
import axios from "axios";
import { useGlobalContext } from "../Auth/ContextProvider";
import { Card, Container, span } from "react-bootstrap";
import Reports from "./Reports";
import Navbar from "../components/Navbar";
import api from "../Auth/Api";

const Dashboard = () => {
  const {
    users,
    setUsers,
    input,
    setInput,
    reports,
    setReports,
    notifications,
    setNotifications,
    notif,
    setNotif,
  } = useGlobalContext();

  useEffect(async () => {
    api.get(`adminform/searchUser?input=${input}`).then((res) => {
      setUsers(res.data);
    });
    api.get(`adminform/reports?input=${input}`).then((res) => {
      setReports(res.data);
    });
    api.get(`adminform/notification?input=${input}`).then((res) => {
      const filterNotifications = res.data.filter((user) => {
        if (user.symptoms === "yes") {
          return user;
        } else if (user.hotspots === "yes") {
          return user;
        } else if (user.together === "yes") {
          return user;
        } else if (user.expose === "yes") {
          return user;
        } else if (user.travel === "yes") {
          return user;
        }
      });
      setNotifications(filterNotifications);
    });
  }, [input]);

  return (
    <div className="container py-5 ">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-4">
          <div className="card">
            <div
              className="card-header"
              style={{ backgroundColor: "#ffff", fontSize: "1.5rem" }}
            >
              <FaIcons.FaBell></FaIcons.FaBell>
              <label style={{ margin: "0 3px" }}>Notifications</label>
            </div>
            <div className="card-body" style={{ height: "10rem" }}>
              <h4>{notifications.length}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-4">
          <div className="card">
            <div
              className="card-header"
              style={{ backgroundColor: "#ffff", fontSize: "1.5rem" }}
            >
              <FaIcons.FaChartBar></FaIcons.FaChartBar>
              <label style={{ margin: "0 3px" }}> Reports</label>
            </div>
            <div className="card-body" style={{ height: "10rem" }}>
              <h3 className="reports">{reports.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-4">
          <div className="card">
            <div
              className="card-header"
              style={{ backgroundColor: "#ffff", fontSize: "1.5rem" }}
            >
              <FaIcons.FaUsers />
              <label style={{ margin: "0 5px" }}> User Account</label>
            </div>
            <div className="card-body" style={{ height: "10rem" }}>
              <h5 className="users">{users.length}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
