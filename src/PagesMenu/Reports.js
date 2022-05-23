import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import "./Reports.css";
import { Table, Card, Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useGlobalContext } from "../Auth/ContextProvider";
import api from "../Auth/Api";

const Reports = () => {
  const {
    newReports,
    setNewReports,
    username,
    setUsername,
    reports,
    setReports,
    input,
    setInput,
    startedDate,
    setStartedDate,
    endDate,
    setEndDate,
  } = useGlobalContext();

  useEffect(async () => {
    api.get(`adminform/reports?input=${input}`).then((res) => {
      setReports(res.data);
    });
  }, [input]);

  const handleDelete = async (id, date, idRow, e) => {
    e.preventDefault();

    try {
      api
        .delete(`adminform/deleteReports/${id}`, {
          data: {
            date: date,
          },
        })
        .then((res) => {
          setReports(reports.filter((report) => report.id !== idRow));
        });
    } catch (error) {
      alert("Delete Failed");
    }
  };

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
      setReports(res.data);
      setStartedDate("");
      setEndDate("");
    } catch (error) {
      alert("Delete Failed");
    }
  };
  console.log(reports);
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
                      <FaIcons.FaChartBar style={{ fontSize: "20px" }} />
                      <span style={{ fontSize: "20px" }}>Reports</span>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 input-data">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="form-control mb-2"
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
                        <td>Username</td>
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
                      {reports.map((item, i) => (
                        <tr key={item.id}>
                          <td>{i}</td>
                          <td>{item.username}</td>
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
                          <td>
                            <Link
                              to={`/update/${item.RegisterFormId}`}
                              state={{
                                types: "reports",
                              }}
                            >
                              <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                              >
                                Update
                              </button>
                            </Link>
                            <button
                              type="submit"
                              value={item.RegisterFormId}
                              onClick={(e) =>
                                handleDelete(
                                  item.RegisterFormId,
                                  item.date,
                                  item.id,
                                  e
                                )
                              }
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Form.Group>
                <div className="footer">
                  {/* <label className="label-form ms-2">
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label> */}
                  <label className="label-form ms-2">
                    From:
                    <input
                      type="date"
                      className="form-control m-2"
                      value={startedDate}
                      onChange={(e) => setStartedDate(e.target.value)}
                    />
                  </label>
                  <label className="label-form ms-2">
                    To:
                    <input
                      type="date"
                      className="form-control m-2"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </label>
                  <button
                    type="submit"
                    onClick={handleDisplay}
                    className="btn btn-secondary btn-sm"
                  >
                    Display
                  </button>
                  <label className="label-form m-5">
                    Total : <h6 className="value">{reports.length}</h6>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Reports;
