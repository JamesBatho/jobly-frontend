import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ login }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await login(formData);
    if (res.success) {
      history.push("/companies");
    } else {
      setFormErrors(res.err);
    }
  };
  const showFormErrors = (errors) => {
    console.log(errors);
    return <p> {errors} </p>;
  };

  return (
    <div className="Login">
      <h3> Login Below </h3>
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

        <button> Login!</button>
      </form>
      {formErrors.length ? showFormErrors(formErrors) : null}
    </div>
  );
}

export default Login;
