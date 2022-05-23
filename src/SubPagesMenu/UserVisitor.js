import { Link } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import NumberFormat from "react-number-format";

function UserVisitor({ inputForm }) {
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
    address,
    setAddress,
    vaccinated,
    setVaccinated,
    vaccine,
    setVaccine,
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
            className="form-control text-secondary"
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

export default UserVisitor;
