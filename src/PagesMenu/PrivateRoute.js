import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import Navbar from "../components/Navbar";

export default function PrivateRoute() {
  const { auth } = useGlobalContext();

  return (
    auth.status && (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  );
}
