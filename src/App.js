import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./PagesMenu/Dashboard";
import Notifications from "./PagesMenu/Notifications";
import Reports from "./PagesMenu/Reports";
import Users from "./PagesMenu/Users";
import Logout from "./PagesMenu/Logout";
import CreateAccount from "./PagesMenu/CreateAccount";
import UserEmployee from "./SubPagesMenu/UserEmployee";
import UserStudents from "./SubPagesMenu/UserStudents";
import UserVisitor from "./SubPagesMenu/UserVisitor";
import UpdateForm from "./PagesMenu/UpdateForm";
import Login from "./components/Login";
import Create from "./components/Create";
import axios from "axios";
import { useGlobalContext } from "./Auth/ContextProvider";
import PrivateRoute from "./PagesMenu/PrivateRoute";
import Error from "./PagesMenu/Error";
import api from "./Auth/Api";

function App() {
  const { auth, setAuth } = useGlobalContext();

  useEffect(async () => {
    try {
      api
        .get("adminform/auth/", {
          headers: {
            "Content-Type": "application/json",
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          if (response.data.error) {
            setAuth({ ...auth, status: false });
          } else {
            setAuth({
              username: response.data.username,
              id: response.data.id,
              status: true,
            });
          }
        });
    } catch (error) {
      alert("No Data Available");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/users" element={<Users />} />
          <Route path="/update/:id" element={<UpdateForm />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/useremployee" element={<UserEmployee />} />
          <Route path="/userstudents" element={<UserStudents />} />
          <Route path="/uservisitor" element={<UserVisitor />} />
          <Route path="/error" element={<Error />} />
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
