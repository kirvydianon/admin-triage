import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Student from "../SubPagesMenu/UserStudents";
import Visitor from "../SubPagesMenu/UserVisitor";
import Employee from "../SubPagesMenu/UserEmployee";
import UpdateReport from "../SubPagesMenu/UpdateReport";
import axios from "axios";
import { useGlobalContext } from "../Auth/ContextProvider";
import api from "../Auth/Api";

function UpdateForm() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    userID,
    setUserId,
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
    contact,
    setContact,
    address,
    setAddress,
    vaccinated,
    setVaccinated,
    vaccine,
    setVaccine,
    humans,
    setHumans,
    course,
    setCourse,
    year,
    setYear,
    grade,
    setGrade,
    designation,
    setDesignation,
    purpose,
    setPurpose,
    symptoms,
    setSymptoms,
    hotspots,
    setHotspots,
    together,
    setTogether,
    expose,
    setExpose,
    travel,
    setTravel,
    where,
    setWhere,
    fever,
    setFever,
    cough,
    setCough,
    headache,
    setHeadache,
    diarrhea,
    setDiarrhea,
    bodyPain,
    setBodyPain,
    lostSmell,
    setLostSmell,
    skin,
    setSkin,
    shortness,
    setShortness,
    colds,
    setColds,
    sore,
    setSore,
  } = useGlobalContext();

  const inputForm = async (e) => {
    e.preventDefault();

    api
      .put(`adminform/account/`, {
        id: id,
        email: email,
        firstname: firstname,
        lastname: lastname,
        middlename: middlename,
        age: age,
        contact: contact,
        address: address,
        vaccinated: vaccinated,
        vaccine: vaccine,
        people: humans,
        course: course,
        year: year,
        grade: grade,
        designation: designation,
      })
      .then(() => {
        navigate("/users");
        setEmail("");
        setFirstname("");
        setLastname("");
        setMiddlename("");
        setAge("");
        setContact("");
        setAddress("");
        setVaccinated("");
        setVaccine("");
        setHumans("");
        setCourse("");
        setYear("");
        setGrade("");
        setDesignation("");
      });
  };

  const inputReport = (e) => {
    e.preventDefault();

    api
      .put(`adminform/report/`, {
        id: id,
        purpose: purpose,
        symptoms: symptoms,
        hotspots: hotspots,
        together: together,
        expose: expose,
        travel: travel,
        where: where,
        fever: fever,
        cough: cough,
        headache: headache,
        diarrhea: diarrhea,
        bodyPain: bodyPain,
        lostSmell: lostSmell,
        skin: skin,
        shortness: shortness,
        colds: colds,
        sore: sore,
      })
      .then(() => {
        navigate("/reports");
        setPurpose("");
        setSymptoms("");
        setHotspots("");
        setTogether("");
        setExpose("");
        setTravel("");
        setWhere("");
        setFever("");
        setCough("");
        setHeadache("");
        setDiarrhea("");
        setBodyPain("");
        setLostSmell("");
        setSkin("");
        setShortness("");
        setColds("");
        setSore("");
      });
  };

  const handleVaccine = () => {
    if (vaccinated === "no") {
      setVaccine("");
    }
  };
  const handleReports = () => {
    if (fever === "") {
      setFever("");
    }
  };

  useEffect(async () => {
    api.get(`registerForm/byId/${id}`).then((res) => {
      setUserId(res.data);
      setEmail(res.data.email);
      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setMiddlename(res.data.middlename);
      setAge(res.data.age);
      setContact(res.data.contact);
      setAddress(res.data.address);
      setVaccinated(res.data.vaccinated);
      setVaccine(res.data.vaccine);
      setHumans(res.data.people);
      setCourse(res.data.course);
      setYear(res.data.year);
      setGrade(res.data.grade);
      setDesignation(res.data.designation);
    });
    api.get(`updateform/updateId/${id}`).then((res) => {
      setPurpose(res.data.purpose);
      setSymptoms(res.data.symptoms);
      setHotspots(res.data.hotspots);
      setTogether(res.data.together);
      setExpose(res.data.expose);
      setTravel(res.data.travel);
      setWhere(res.data.where);
      setFever(res.data.fever);
      setCough(res.data.cough);
      setHeadache(res.data.headache);
      setDiarrhea(res.data.diarrhea);
      setBodyPain(res.data.bodyPain);
      setLostSmell(res.data.lostSmell);
      setSkin(res.data.skin);
      setShortness(res.data.shortness);
      setColds(res.data.colds);
      setSore(res.data.sore);
    });

    handleVaccine();
    handleReports();
  }, [id, vaccinated]);

  return (
    <div className="container">
      {location.state.types === "student" ? (
        <Student people={location.state.people} inputForm={inputForm} />
      ) : location.state.types === "visitor" ? (
        <Visitor inputForm={inputForm} />
      ) : location.state.types === "employees" ? (
        <Employee people={location.state.people} inputForm={inputForm} />
      ) : location.state.types === "reports" ? (
        <UpdateReport inputReport={inputReport} />
      ) : null}
    </div>
  );
}

export default UpdateForm;
