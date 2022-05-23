import React from "react";
import { useGlobalContext } from "../Auth/ContextProvider";
import axios from "axios";
import api from "../Auth/Api";

function Error() {
  const {
    newReports,
    setNewReports,
    newUsername,
    setNewUsername,
    startedDate,
    setStartedDate,
    endDate,
    setEndDate,
  } = useGlobalContext();

  const handleDisplay = async (e) => {
    e.preventDefault();

    try {
      const res = await api.get(`updateform/dates`, {
        params: {
          username: newUsername,
          startedDate: startedDate,
          endDate: endDate,
        },
      });
      setNewReports(res.data);
    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <form className="footer" onSubmit={handleDisplay}>
      <div>
        <label className="label-form ms-2">
          <input
            type="text"
            className="form-control m-2"
            placeholder="Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className="label-form ms-2">
          From:
          <input
            type="date"
            className="form-control m-2"
            value={startedDate}
            onChange={(e) => setStartedDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className="label-form ms-2">
          To:
          <input
            type="date"
            className="form-control m-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button type="submit" id="submit" className="btn btn-secondary btn-sm">
          Display
        </button>
        {/* <label className="label-form m-5">
          Total : <h6 className="value">{reports.length}</h6>
        </label> */}
      </div>
    </form>
  );
}

export default Error;
