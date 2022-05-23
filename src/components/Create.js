import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import api from "../Auth/Api";

function Create() {
  const navigate = useNavigate();
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    setLoading,
  } = useGlobalContext();

  const create = async (e) => {
    e.preventDefault();

    try {
      api
        .post("adminform/", {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            alert("User Created");
            navigate("/");
            setUsername("");
            setEmail("");
            setPassword("");
          }
        });
    } catch (error) {
      alert("No Data Available");
    }
  };

  return (
    <div className="container text-center" style={{ width: "350px" }}>
      <h3> Create Account</h3>
      <form onSubmit={create}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control mb-3"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            className="form-control mb-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            className="form-control mb-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <p>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <Link to="/">
            <button id="submit" type="submit" className="btn btn-danger ">
              Cancel
            </button>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Create;
