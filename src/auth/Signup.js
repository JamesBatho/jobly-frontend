import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Signup">
      <h3> You are Signup!</h3>
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
        <button> Signup!</button>
      </form>
    </div>
  );
}

export default Signup;
