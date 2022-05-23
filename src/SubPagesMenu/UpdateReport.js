import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

function UpdateReport({ inputReport }) {
  const {
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

  const yesButton = () => {
    if (symptoms === "no") {
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
    }
  };

  useEffect(() => {
    yesButton();
  }, [symptoms]);

  return (
    <form className="row" onSubmit={inputReport}>
      <div className="form-group col-sm-5 ">
        <div className="form-group mb-3 mt-2">
          <label className="mb-2">1. Purpose of visit:</label>
          <input
            type="text"
            className="form-control"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="mb-2">
            2. Have you experience any of the following for the past 2 weeks?
            <input
              name="symptoms"
              type="radio"
              value="yes"
              className="m-2"
              checked={symptoms === "yes"}
              onChange={(e) => setSymptoms(e.target.value)}
              required
            />
            Yes
            <input
              name="symptoms"
              type="radio"
              value="no"
              className="m-2"
              checked={symptoms === "no"}
              onChange={(e) => setSymptoms(e.target.value)}
              required
            />
            No
          </label>
          <label className="ms-3">
            <h6>If yes, please check any of he following symptoms:</h6>
          </label>
          <div className="card p-2 m-3 row col-sm-6">
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Fever"
                className="m-2"
                checked={fever === "Fever"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setFever("");
                  } else {
                    setFever(e.target.value);
                  }
                }}
              />
              Fever
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Cough"
                className="m-2"
                checked={cough === "Cough"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setCough("");
                  } else {
                    setCough(e.target.value);
                  }
                }}
              />
              Cough
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Headache"
                className="m-2"
                checked={headache === "Headache"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setHeadache("");
                  } else {
                    setHeadache(e.target.value);
                  }
                }}
              />
              Headache
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Sorethroat"
                className="m-2"
                checked={sore === "Sorethroat"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setSore("");
                  } else {
                    setSore(e.target.value);
                  }
                }}
              />
              Sorethroat
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Diarrhea or LBM"
                className="m-2"
                checked={diarrhea === "Diarrhea or LBM"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setDiarrhea("");
                  } else {
                    setDiarrhea(e.target.value);
                  }
                }}
              />
              Diarrhea or LBM
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Body Pains"
                className="m-2"
                checked={bodyPain === "Body Pains"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setBodyPain("");
                  } else {
                    setBodyPain(e.target.value);
                  }
                }}
              />
              Body Pains
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Lost of smell/taste"
                className="m-2"
                checked={lostSmell === "Lost of smell/taste"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setLostSmell("");
                  } else {
                    setLostSmell(e.target.value);
                  }
                }}
              />
              Lost of smell/taste
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Skin Rashes"
                className="m-2"
                checked={skin === "Skin Rashes"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setSkin("");
                  } else {
                    setSkin(e.target.value);
                  }
                }}
              />
              Skin Rashes
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Shortness of breath"
                className="m-2"
                checked={shortness === "Shortness of breath"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setShortness("");
                  } else {
                    setShortness(e.target.value);
                  }
                }}
              />
              Shortness of breath
            </label>
            <label className="mb-2">
              <input
                name="symptoms"
                type="checkbox"
                value="Colds/Runny Nose"
                className="m-2"
                checked={colds === "Colds/Runny Nose"}
                disabled={symptoms === "no"}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setColds("");
                  } else {
                    setColds(e.target.value);
                  }
                }}
              />
              Colds/Runny Nose
            </label>
          </div>
          <div>
            <label>
              3. Is your Sitio or Barangay is one of HOTSPOTS for COVID 19?
              <input
                name="hotspots"
                type="radio"
                value="yes"
                className="m-2"
                //   className="input-radio"
                checked={hotspots === "yes"}
                onChange={(e) => setHotspots(e.target.value)}
                required
              />
              Yes
              <input
                name="hotspots"
                type="radio"
                value="no"
                className="m-2"
                //   className="input-radio"
                checked={hotspots === "no"}
                onChange={(e) => setHotspots(e.target.value)}
                required
              />
              No
            </label>
          </div>
        </div>
      </div>
      <div className="form-group col-sm-6 mt-2">
        <div>
          <label className="mb-3">
            4. Have you worked / lived together, stayed had been in the same
            place, house with confimed COVID 19 case?
            <input
              name="together"
              type="radio"
              value="yes"
              checked={together === "yes"}
              className="m-2"
              onChange={(e) => setTogether(e.target.value)}
              required
            />
            Yes
            <input
              name="together"
              type="radio"
              value="no"
              className="m-2"
              checked={together === "no"}
              onChange={(e) => setTogether(e.target.value)}
              required
            />
            No
          </label>
        </div>
        <div>
          <label className="mb-3">
            5. Have you had contact with anyone ( family, friends, co-workers
            neighbor ) with fever, cough, colds, sorethroat, diarrhea/lbm, loss
            of smell for the past 2 weeks?
            <input
              name="contact"
              type="radio"
              value="yes"
              className="m-2"
              checked={expose === "yes"}
              onChange={(e) => setExpose(e.target.value)}
              required
            />
            Yes
            <input
              name="contact"
              type="radio"
              value="no"
              className="m-2"
              checked={expose === "no"}
              onChange={(e) => setExpose(e.target.value)}
              required
            />
            No
          </label>
        </div>
        <div className="form-group mb-3">
          <label className="mb-3">
            6. Have you travelled outside Cebu City for the past 2 weeks?
            <input
              name="travel"
              type="radio"
              value="yes"
              className="m-2"
              //   className="input-radio"
              onChange={(e) => setTravel(e.target.value)}
              checked={travel === "yes"}
              required
            />
            Yes
            <input
              name="travel"
              type="radio"
              value="no"
              className="m-2"
              checked={travel === "no"}
              onChange={(e) => setTravel(e.target.value)}
              required
            />
            No
            <label className="mb-3 card p-3">
              <h6>If yes, where?</h6>
              <input
                type="text"
                className="form-control"
                value={where}
                disabled={travel === "no"}
                onChange={(e) => setWhere(e.target.value)}
                required
                // required
              />
            </label>
          </label>
        </div>
        <div className="text-center mt-2">
          <button id="submit" type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/reports">
            <button id="submit" type="submit" className="btn btn-danger">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default UpdateReport;
