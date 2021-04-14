import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ login }) {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    }
  };

  return (
    <div className="Login">
      <h3> You are Login!</h3>
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
    </div>
  );
}

export default Login;
