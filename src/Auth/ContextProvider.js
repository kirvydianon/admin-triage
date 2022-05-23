import React, { useContext, useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userID, setUserId] = useState([]);

  const [reports, setReports] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [input, setInput] = useState([]);
  const [notif, setNotif] = useState([]);
  const [auth, setAuth] = useState({ id: 0, username: "", status: false });
  const [newReports, setNewReports] = useState([]);

  const [startedDate, setStartedDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  //Form 1
  const [newUsername, setNewUsername] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [types, setTypes] = useState("");

  const [address, setAddress] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [vaccine, setVaccine] = useState("");
  //Form 2
  const [humans, setHumans] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [grade, setGrade] = useState("");
  const [designation, setDesignation] = useState("");

  //Update 1 and 2

  const [purpose, setPurpose] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [hotspots, setHotspots] = useState("");
  const [together, setTogether] = useState("");
  const [expose, setExpose] = useState("");
  const [travel, setTravel] = useState("");
  const [where, setWhere] = useState("");

  //UpdateForm Symptoms
  const [fever, setFever] = useState("");
  const [cough, setCough] = useState("");
  const [headache, setHeadache] = useState("");
  const [diarrhea, setDiarrhea] = useState("");
  const [bodyPain, setBodyPain] = useState("");
  const [lostSmell, setLostSmell] = useState("");
  const [skin, setSkin] = useState("");
  const [shortness, setShortness] = useState("");
  const [colds, setColds] = useState("");
  const [sore, setSore] = useState("");

  //NavBar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        newUsername,
        setNewUsername,
        users,
        setUsers,
        newReports,
        setNewReports,
        auth,
        setAuth,
        userID,
        setUserId,
        reports,
        input,
        notif,
        setNotif,
        setInput,
        setReports,
        notifications,
        setNotifications,
        isLoading,
        setIsLoading,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        middlename,
        setMiddlename,
        nationality,
        setNationality,
        age,
        setAge,
        contact,
        setContact,
        gender,
        setGender,
        types,
        setTypes,
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
        startedDate,
        setStartedDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
