import { Link } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import NumberFormat from "react-number-format";

function UserStudents({ people, inputForm }) {
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
    humans,
    setHumans,
    address,
    setAddress,
    vaccinated,
    setVaccinated,
    vaccine,
    setVaccine,
    course,
    setCourse,
    year,
    setYear,
    grade,
    setGrade,
  } = useGlobalContext();

  return (
    <form className="row" onSubmit={inputForm}>
      <div className="form-group col-sm-6">
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control text-secondary"
            placeholder={userID.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Firstname</label>
          <input
            type="text"
            className="form-control text-secondary"
            placeholder={userID.firstname}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Lastname</label>
          <input
            type="text"
            placeholder={userID.lastname}
            className="form-control text-secondary"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Middle Initial</label>
          <input
            type="text"
            placeholder={userID.middlename}
            className="form-control text-secondary"
            value={middlename}
            onChange={(e) => setMiddlename(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control text-secondary"
            placeholder={userID.age}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Contact No.</label>
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
        <div className="form-group mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control text-secondary"
            placeholder={userID.address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group col-sm-5">
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
              required
            />
            Yes
            <input
              name="vaccinated"
              type="radio"
              value="no"
              className="m-2"
              checked={vaccinated === "no"}
              onChange={(e) => setVaccinated(e.target.value)}
              required
            />
            No
          </div>
          <label className="p-1 mb-1">If yes? Select type of Vaccine</label>
          <select
            className="form-control m-1"
            disabled={vaccinated === "no"}
            value={vaccine}
            onChange={(e) => setVaccine(e.target.value)}
            required
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
        {people === "college" ? (
          <div className="form-group mb-3">
            <label> College Student</label>

            <label className="m-2">
              <h6>Course:</h6>
              <select
                className="form-control"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                {/* <option disabled value="">
                  Select type...
                </option> */}
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
            <label>
              <h6>Year:</h6>
              <select
                className="form-control"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              >
                {/* <option disabled value="">
                  Select type...
                </option> */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
        ) : people === "elem" ? (
          <div className="form-group mb-3">
            <label>Basic Ed Student</label>
            <label className="m-1">
              <h6>Grade:</h6>
              <select
                className="form-control"
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
        ) : (
          <div>
            <h1>No data</h1>
          </div>
        )}
        <div className="text-center mt-5">
          <button id="submit" type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/users">
            <button id="submit" type="submit" className="btn btn-danger">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default UserStudents;
