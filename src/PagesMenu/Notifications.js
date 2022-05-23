import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./Notifications.css";
import { Table, Card, Button, Form, Container } from "react-bootstrap";
import { useGlobalContext } from "../Auth/ContextProvider";
import axios from "axios";
import api from "../Auth/Api";

const Notifications = () => {
  const {
    startedDate,
    setStartedDate,
    endDate,
    setEndDate,
    setReports,
    notifications,
    setNotifications,
    reports,
    input,
    setInput,
    notif,
    setNotif,
  } = useGlobalContext();

  useEffect(async () => {
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

  const handleDisplay = async (e) => {
    e.preventDefault();

    try {
      const res = await api.get(`updateform/dates`, {
        params: {
          username: input,
          startedDate: startedDate,
          endDate: endDate,
        },
      });
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
      setStartedDate("");
      setEndDate("");
    } catch (error) {
      alert("Delete Failed");
    }
  };

  console.log(notifications);
  return (
    <div className="container mt-0">
      <Form onSubmit={(e) => e.preventDefault()}>
        <div className="row-12">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <Form.Group>
                  <div className="row">
                    <div className="col-md-4">
                      <FaIcons.FaBell style={{ fontSize: "20px" }} />
                      <span style={{ fontSize: "20px" }}>Notifications</span>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 input-data">
                      <input
                        type="text"
                        className="form-control mb-3"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter username or firstname to search"
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Table
                    striped
                    bordered
                    hover
                    responsive
                    className="text-nowrap"
                  >
                    <tbody>
                      <tr>
                        <td>ID</td>
                        <td>Firstname</td>
                        <td>Lastname</td>
                        <td>M.I.</td>
                        <td>SQ-1</td>
                        <td>SQ-2</td>
                        <td>SQ-3</td>
                        <td>SQ-4</td>
                        <td>SQ-5</td>
                        <td>SQ-6</td>
                        <td>Temperature</td>
                        <td>Date</td>
                        <td>QR</td>
                      </tr>
                      {notifications.map((item, i) => (
                        <tr key={item.id}>
                          <td>{i}</td>
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.middlename}</td>
                          <td>{item.purpose}</td>
                          <td>{item.symptoms}</td>
                          <td>{item.hotspots}</td>
                          <td>{item.together}</td>
                          <td>{item.expose}</td>
                          <td>{item.travel}</td>
                          <td>{item.temperature}</td>
                          <td>{item.date}</td>
                          <td>{item.RegisterFormId}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Form.Group>
                <Form.Group>
                  <div className="footer">
                    <label className="dates">
                      From:
                      <Form.Control
                        type="date"
                        value={startedDate}
                        onChange={(e) => setStartedDate(e.target.value)}
                        className="date1"
                      />
                    </label>
                    <label className="dates2">
                      To:
                      <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="date2"
                      />
                      <button
                        type="submit"
                        id="submit"
                        onClick={handleDisplay}
                        className="btn btn-secondary btn-sm"
                      >
                        Display
                      </button>
                    </label>
                    <label className="displayResult">
                      Total : <h6 className="value">{notifications.length}</h6>
                    </label>
                  </div>
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Notifications;
