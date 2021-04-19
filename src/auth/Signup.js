import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signup(formData);
    console.log(res);
    if (res.success) {
      history.push("/companies");
    } else {
      setFormErrors(res.err);
    }
  };

  const showFormErrors = (errors) => {
    return <p> {errors} </p>;
  };

  return (
    <div className="Signup">
      <h3> Signup for Jobly!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username </label>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
        />
        <label htmlFor="password"> Password </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={formData.password}
        />
        <label htmlFor="firstName"> First Name </label>
        <input
          onChange={handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
        />
        <label htmlFor="lastName"> Last Name </label>
        <input
          onChange={handleChange}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
        />
        <label htmlFor="email"> Email </label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
        />
        <button> Signup!</button>
      </form>
      {formErrors.length > 0 ? showFormErrors(formErrors) : null}
    </div>
  );
}

export default Signup;
