import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import {
  Table,
  Card,
  Button,
  Form,
  Container,
  Dropdown,
} from "react-bootstrap";
import axios from "axios";
import "./users.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import api from "../Auth/Api";

const Users = () => {
  const { users, setUsers, input, setInput } = useGlobalContext();
  const [types, setTypes] = useState("users");

  useEffect(async () => {
    api.get(`adminform/searchUser?input=${input}`).then((res) => {
      setUsers(res.data);
    });
  }, [input]);

  const handleDelete = async (id, e) => {
    e.preventDefault();
    try {
      api.delete(`adminform/deleteUser/${id}`).then((res) => {
        alert("Delete Successfully");
        setUsers(users.filter((report) => report.id !== id));
      });
    } catch (error) {
      alert("Delete Failed");
    }
  };

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
                      <FaIcons.FaUsers style={{ fontSize: "20px" }} />
                      <span style={{ fontSize: "20px" }}>Information</span>
                    </div>
                    <div className="col-md-4"></div>
                    {/*To search data in table */}
                    <div className="col-md-4 input-data">
                      <input
                        type="text"
                        className="form-control mb-3"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter firstname to search"
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
                      {types === "student" ? (
                        <tr>
                          <td>ID</td>
                          <td>Email</td>
                          <td>Firstname</td>
                          <td>Lastname</td>
                          <td>M.I.</td>
                          <td>Age</td>
                          <td>Contact No.</td>
                          <td>Gender</td>
                          <td>Address</td>
                          <td>Vaccinated</td>
                          <td>Vaccine</td>
                          <td>Course</td>
                          <td>Year</td>
                          <td>Basic Education</td>
                          <td>Grade Level</td>
                        </tr>
                      ) : types === "visitor" ? (
                        <tr>
                          <td>ID</td>
                          <td>Email</td>
                          <td>Firstname</td>
                          <td>Lastname</td>
                          <td>M.I.</td>
                          <td>Age</td>
                          <td>Contact No.</td>
                          <td>Gender</td>
                          <td>Address</td>
                          <td>Vaccinated</td>
                          <td>Vaccine</td>
                        </tr>
                      ) : types === "employees" ? (
                        <tr>
                          <td>ID</td>
                          <td>Email</td>
                          <td>Firstname</td>
                          <td>Lastname</td>
                          <td>M.I.</td>
                          <td>Age</td>
                          <td>Contact No.</td>
                          <td>Gender</td>
                          <td>Address</td>
                          <td>Vaccinated</td>
                          <td>Vaccine</td>
                          <td>Teaching Staff</td>
                          <td>Non-Teaching Staff</td>
                          <td>Trainee Training Course</td>
                          <td>Agency</td>
                          <td>Designation</td>
                        </tr>
                      ) : (
                        <tr>
                          <td>ID</td>
                          <td>Type</td>
                          <td>Email</td>
                          <td>Firstname</td>
                          <td>Lastname</td>
                          <td>M.I.</td>
                          <td>Age</td>
                          <td>Contact No.</td>
                          <td>Gender</td>
                          <td>Address</td>
                          <td>Vaccinated</td>
                          <td>Vaccine</td>
                          <td>Teaching Staff</td>
                          <td>Non-Teaching Staff</td>
                          <td>Trainee Course</td>
                          <td>Course</td>
                          <td>Year</td>
                          <td>Basic Education</td>
                          <td>Grade Level</td>
                          <td>Agency</td>
                          <td>Designation</td>
                        </tr>
                      )}

                      {users
                        .filter((user) => {
                          if (user.types === "student" && types === "student") {
                            return user;
                          } else if (
                            user.types === "visitor" &&
                            types === "visitor"
                          ) {
                            return user;
                          } else if (
                            user.types === "employees" &&
                            types === "employees"
                          ) {
                            return user;
                          } else if (types === "users") {
                            return user;
                          }
                        })
                        .map((data) => {
                          if (data.types === "student" && types === "student") {
                            return (
                              <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.middlename}</td>
                                <td>{data.age}</td>
                                <td>{data.contact}</td>
                                <td>{data.gender}</td>
                                <td>{data.address}</td>
                                <td>{data.vaccinated}</td>
                                <td>{data.vaccine}</td>
                                {data.course ? (
                                  <td>{data.course}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.year ? <td>{data.year}</td> : <td></td>}
                                {data.people === "elem" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.grade ? <td>{data.grade}</td> : <td></td>}
                                <td>
                                  <Link
                                    to={`/update/${data.id}`}
                                    state={{
                                      types: data.types,
                                      people: data.people,
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
                                    value={data.id}
                                    onClick={(e) => handleDelete(data.id, e)}
                                    className="btn btn-danger btn-sm"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          } else if (
                            data.types === "visitor" &&
                            types === "visitor"
                          ) {
                            return (
                              <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.middlename}</td>
                                <td>{data.age}</td>
                                <td>{data.contact}</td>
                                <td>{data.gender}</td>
                                <td>{data.address}</td>
                                <td>{data.vaccinated}</td>
                                <td>{data.vaccine}</td>
                                <td>
                                  <Link
                                    to={`/update/${data.id}`}
                                    state={{
                                      types: data.types,
                                      people: data.people,
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
                                    value={data.id}
                                    onClick={(e) => handleDelete(data.id, e)}
                                    className="btn btn-danger btn-sm"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          } else if (
                            data.types === "employees" &&
                            types === "employees"
                          ) {
                            return (
                              <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.middlename}</td>
                                <td>{data.age}</td>
                                <td>{data.contact}</td>
                                <td>{data.gender}</td>
                                <td>{data.address}</td>
                                <td>{data.vaccinated}</td>
                                <td>{data.vaccine}</td>
                                {data.people === "teaching" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.people === "nonTeaching" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.people === "trainee" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.people === "worker" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.designation ? (
                                  <td>{data.designation}</td>
                                ) : (
                                  <td>No</td>
                                )}
                                <td>
                                  <Link
                                    to={`/update/${data.id}`}
                                    state={{
                                      types: data.types,
                                      people: data.people,
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
                                    value={data.id}
                                    onClick={(e) => handleDelete(data.id, e)}
                                    className="btn btn-danger btn-sm"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          } else if (types === "users") {
                            return (
                              <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.types}</td>
                                <td>{data.email}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.middlename}</td>
                                <td>{data.age}</td>
                                <td>{data.contact}</td>
                                <td>{data.gender}</td>
                                <td>{data.address}</td>
                                <td>{data.vaccinated}</td>
                                <td>{data.vaccine}</td>
                                {data.people === "teaching" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.people === "nonTeaching" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.people === "trainee" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.course ? (
                                  <td>{data.course}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.year ? <td>{data.year}</td> : <td></td>}
                                {data.people === "elem" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.grade ? <td>{data.grade}</td> : <td></td>}
                                {data.people === "worker" ? (
                                  <td>{data.people}</td>
                                ) : (
                                  <td></td>
                                )}
                                {data.designation ? (
                                  <td>{data.designation}</td>
                                ) : (
                                  <td></td>
                                )}
                                <td>
                                  <Link
                                    to={`/update/${data.id}`}
                                    state={{
                                      types: data.types,
                                      people: data.people,
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
                                    value={data.id}
                                    onClick={(e) => handleDelete(data.id, e)}
                                    className="btn btn-danger btn-sm"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          }
                        })}
                    </tbody>
                  </Table>
                </Form.Group>
                {/*Navigate other user types */}
                <Form.Group>
                  <label style={{ margin: "10px 5px" }}>
                    Select Type:
                    <select
                      value={types}
                      onChange={(e) => setTypes(e.target.value)}
                      style={{ marginLeft: "10px" }}
                    >
                      <option value="users">Users</option>
                      <option value="student">Student</option>
                      <option value="visitor">Visitor</option>
                      <option value="employees">Employees</option>
                    </select>
                  </label>
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Users;
