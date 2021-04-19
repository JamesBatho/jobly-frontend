import React, { useState, useContext } from "react";
import JoblyApi from "./api";
import UserContext from "./auth/UserContext";

function Profile() {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [formErrors, setFormErrors] = useState([]);

  const [formData, setFormData] = useState({
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email,
    username: currUser.username,
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (err) {
      setFormErrors(err);
      return;
    }

    setFormData((data) => ({ ...data, password: "" }));

    setCurrUser(updatedUser);
  }

  const showFormErrors = (errors) => {
    console.log(errors);
    return <p> {errors} </p>;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <div className="Profile">
      <h2> Profile </h2>
      <form>
        <div className="form-group">
          <label> Username </label>
          <p> {formData.username} </p>
        </div>
        <div className="form-group">
          <label htmlFor="firstName"> First Name</label>
          <input
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"> Last Name </label>
          <input
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"> Enter Password to Save</label>
          <input
            name="lastName"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}> Save</button>
      </form>
      {formErrors.length ? showFormErrors(formErrors) : null}
    </div>
  );
}

export default Profile;
