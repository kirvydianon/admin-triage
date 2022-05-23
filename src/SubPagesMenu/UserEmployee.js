import { Link } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import NumberFormat from "react-number-format";

function UserEmployee({ people, inputForm }) {
  const {
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
    designation,
    setDesignation,
  } = useGlobalContext();

  return (
    <form className="row" onSubmit={inputForm}>
      <div className="form-group col-sm-6">
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control text-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Firstname</label>
          <input
            type="text"
            className="form-control text-secondary"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control text-secondary"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Middle Initial</label>
          <input
            type="text"
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group col-sm-5">
        {(people === "teaching") |
        (people === "nonTeaching") |
        (people === "trainee") ? (
          <div className="form-group mt-4 p-3 card">
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
        ) : (
          <div className="form-group col-sm-7 mt-4">
            <label className="form-group ms-2 p-3 card">
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
              <h6 className="m-2">Designation:</h6>
              <select
                className="form-control m-1"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                disabled={
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

export default UserEmployee;
