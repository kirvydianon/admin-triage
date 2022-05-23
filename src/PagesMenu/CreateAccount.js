import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import NumberFormat from "react-number-format";
import axios from "axios";
import api from "../Auth/Api";

const CreateAccount = () => {
  const navigate = useNavigate();
  const {
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    middlename,
    setMiddlename,
    age,
    setAge,
    nationality,
    setNationality,
    contact,
    setContact,
    gender,
    setGender,
    humans,
    setHumans,
    types,
    setTypes,
    address,
    setAddress,
    vaccinated,
    setVaccinated,
    vaccine,
    setVaccine,
    designation,
    setDesignation,
    course,
    setCourse,
    year,
    setYear,
    grade,
    setGrade,
  } = useGlobalContext();

  const inputForm = async (e) => {
    e.preventDefault();
    try {
      api
        .post(`registerForm/`, {
          username: username,
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname,
          middlename: middlename,
          age: age,
          contact: contact,
          address: address,
          nationality: nationality,
          gender: gender,
          types: types,
          vaccinated: vaccinated,
          vaccine: vaccine,
          people: humans,
          course: course,
          year: year,
          grade: grade,
          designation: designation,
        })
        .then((res) => {
          alert(res.data.msg);
          setUsername("");
          setEmail("");
          setPassword("");
          setFirstname("");
          setLastname("");
          setMiddlename("");
          setAge("");
          setContact("");
          setAddress("");
          setNationality("");
          setGender("");
          setTypes("");
          setVaccinated("");
          setVaccine("");
          setHumans("");
          setCourse("");
          setYear("");
          setGrade("");
          setDesignation("");
        });
    } catch (error) {
      alert("Account creation failed");
    }
  };

  return (
    <div className="container">
      <form className="row" onSubmit={inputForm}>
        <div className="col-sm-4">
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control "
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              placeholder="Email"
              className="form-control "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              placeholder="Firstname"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              placeholder="Lastname"
              className="form-control "
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              placeholder="Middle Initial"
              className="form-control "
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="number"
              placeholder="Age"
              className="form-control "
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <NumberFormat
              placeholder="Contact"
              className="form-control"
              format="09 ### ### ###"
              mask="_"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              placeholder="Address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              placeholder="Nationality"
              className="form-control "
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="form-group mb-4">
            <label className="form-label">Gender:</label>
            <input
              name="gender"
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              className="m-2"
            />
            Female
            <input
              name="gender"
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              className="m-2"
            />
            Male
          </div>
          <div className="form-group mb-4">
            <label className="form-label">Types</label>
            <select
              className="form-control m-1"
              value={types}
              onChange={(e) => setTypes(e.target.value)}
            >
              <option disabled value="">
                Select...
              </option>
              <option value="student">Student</option>
              <option value="visitor">Visitor</option>
              <option value="employees">Employees</option>
            </select>
          </div>
          <div className="form-group mb-3 card p-3">
            <label className="mb-2 p-1">Vaccine </label>
            <div className="d-inline-flex">
              <input
                name="vaccinated"
                type="radio"
                value="yes"
                className="m-2"
                checked={vaccinated === "yes"}
                onChange={(e) => setVaccinated(e.target.value)}
              />
              Yes
              <input
                name="vaccinated"
                type="radio"
                value="no"
                className="m-2"
                checked={vaccinated === "no"}
                onChange={(e) => setVaccinated(e.target.value)}
              />
              No
            </div>
            <label className="p-1 mb-1">If yes? Select type of Vaccine</label>
            <select
              className="form-control m-1"
              disabled={vaccinated === "no"}
              value={vaccine}
              onChange={(e) => setVaccine(e.target.value)}
            >
              <option disabled value="">
                Select...
              </option>
              <option value="pfizer">Pfizer</option>
              <option value="moderna">Moderna</option>
              <option value="astrazeneca">AstraZeneca</option>
              <option value="sinovac">Sinovac</option>
              <option value="johnsonandjohnsons">Johnson and Johnsons</option>
              <option value="sputnik">Sputnik</option>
            </select>
          </div>
        </div>
        {(types === "student") | (types === "employees") && (
          <div className="col-sm-5">
            <div className="form-group mb-3">
              <label className="mb-2 p-1">
                <input
                  name="humans"
                  type="radio"
                  value="teaching"
                  checked={humans === "teaching"}
                  onChange={(e) => setHumans(e.target.value)}
                  className="m-2"
                  required
                />
                Teaching Staff Department
              </label>
            </div>
            <div className="form-group mb-3">
              <label className="mb-2 p-1">
                <input
                  name="humans"
                  type="radio"
                  value="nonTeaching"
                  checked={humans === "nonTeaching"}
                  onChange={(e) => setHumans(e.target.value)}
                  className="m-2"
                  required
                />
                Non-Teaching Staff Department
              </label>
            </div>
            <div className="form-group mb-3">
              <label className="mb-2 p-1">
                <input
                  name="humans"
                  type="radio"
                  value="trainee"
                  checked={humans === "trainee"}
                  onChange={(e) => setHumans(e.target.value)}
                  className="m-2"
                  required
                />
                Trainee Training Course
              </label>
            </div>
            <div className="form-group mb-3">
              <label>
                <input
                  name="humans"
                  type="radio"
                  value="college"
                  checked={humans === "college"}
                  onChange={(e) => setHumans(e.target.value)}
                  className="m-2"
                  required
                />
                College Student
              </label>
              <label className="m-2">
                <h6>Course:</h6>
                <select
                  className="form-control"
                  style={{ width: "70%" }}
                  disabled={
                    (humans === "elem") |
                    (humans === "worker") |
                    (humans === "teaching") |
                    (humans === "nonTeaching") |
                    (humans === "trainee")
                  }
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                >
                  <option disabled value="">
                    Select type...
                  </option>
                  <option value="BS(AB)-ENGLISH">BS(AB)-ENGLISH</option>
                  <option value="BS(AB)-LITERATURE">BS(AB)-LITERATURE</option>
                  <option value="BSPOLSCI">BSPOLSCI</option>
                  <option value="BSPSYCH">BSPSYCH</option>
                  <option value="BEED">BEED</option>
                  <option value="BPED">BPED</option>
                  <option value="BSA">BSA</option>
                  <option value="BSBA-FM">BSBA-FM</option>
                  <option value="BSBA-HRDM">BSBA-HRDM</option>
                  <option value="BSBA-MA">BSBA-MA</option>
                  <option value="BSBA-MM">BSBA-MM</option>
                  <option value="BSBA-OM">BSBA-OM</option>
                  <option value="BSBA-OA">BSBA-OA</option>
                  <option value="BSBA-REM">BSBA-REM</option>
                  <option value="BSCA">BSCA</option>
                  <option value="BSCE">BSCE</option>
                  <option value="BSCPE">BSCPE</option>
                  <option value="BSCRIM">BSCRIM</option>
                  <option value="BSCS">BSCS</option>
                  <option value="BSECE">BSECE</option>
                  <option value="BSED">BSED</option>
                  <option value="BSED-ENGLISH">BSED-ENGLISH</option>
                  <option value="BSED-FILIPINO">BSED-FILIPINO</option>
                  <option value="BSED-MATHEMATICS">BSED-MATHEMATICS</option>
                  <option value="BSED-SCIENCE">BSED-SCIENCE</option>
                  <option value="BSED-SOCSCI">BSED-SOCSCI</option>
                  <option value="BSED-BIOSCI">BSED-BIOSCI</option>
                  <option value="BSED-PHYSCI">BSED-PHYSCI</option>
                  <option value="BSEE">BSEE</option>
                  <option value="BSIE">BSIE</option>
                  <option value="BSIT">BSIT</option>
                  <option value="BSME">BSME</option>
                  <option value="BSSW">BSSW</option>
                </select>
              </label>
              <label className="m-2">
                <h6>Year:</h6>
                <select
                  className="form-control"
                  disabled={
                    (humans === "elem") |
                    (humans === "worker") |
                    (humans === "teaching") |
                    (humans === "nonTeaching") |
                    (humans === "trainee")
                  }
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                >
                  <option disabled value="">
                    Select type...
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>
            <div className="form-group mb-3">
              <label>
                <input
                  name="humans"
                  type="radio"
                  value="elem"
                  checked={humans === "elem"}
                  onChange={(e) => setHumans(e.target.value)}
                  className="m-2"
                  required
                />
                Basic Ed Student
              </label>
              <label className="m-1">
                <h6>Grade:</h6>
                <select
                  className="form-control"
                  disabled={
                    (humans === "college") |
                    (humans === "worker") |
                    (humans === "teaching") |
                    (humans === "nonTeaching") |
                    (humans === "trainee")
                  }
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                >
                  <option disabled value="">
                    Select type...
                  </option>
                  <option value="K-1">K-1</option>
                  <option value="K-2">K-2</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="1">11</option>
                  <option value="12">12</option>
                </select>
              </label>
            </div>
            <div className="form-group mb-3">
              <label>
                <input
                  name="humans"
                  type="radio"
                  value="worker"
                  checked={humans === "worker"}
                  onChange={(e) => setHumans(e.target.value)}
                  className="m-2"
                  required
                />
                Agency Worker
              </label>
              <label className="m-1">
                <h6>Designation:</h6>
                <select
                  className="form-control"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  disabled={
                    (humans === "college") |
                    (humans === "elem") |
                    (humans === "teaching") |
                    (humans === "nonTeaching") |
                    (humans === "trainee")
                  }
                >
                  <option disabled value="">
                    Select type...
                  </option>
                  <option value="Plumber">Plumber</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Welder">Welder</option>
                  <option value="Head Guard">Head Guard</option>
                  <option value="Mason">Mason</option>
                  <option value="Laundry Person">Laundry Person</option>
                  <option value="Network Technician">Network Technician</option>
                  <option value="Security Officer">Security Officer</option>
                  <option value="Aircon Technician">Aircon Technician</option>
                  <option value="Gardener">Gardener</option>
                  <option value="Security Guard">Security Guard</option>
                  <option value="Janitor">Janitor</option>
                  <option value="Painter">Painter</option>
                  <option value="Electrician">Electrician</option>
                </select>
              </label>
            </div>
          </div>
        )}
        <div className="text-center mt-5">
          <button id="submit" type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
