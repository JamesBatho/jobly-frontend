import React, { useState, useContext } from "react";
import JoblyApi from "./api";
import UserContext from "./auth/UserContext";

function Profile() {
  const { currUser, setCurrUser } = useState(UserContext);
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
      return;
    }

    setFormData((data) => ({ ...data, password: "" }));

    setCurrUser(updatedUser);

    function handleChange(e) {
      const { name, value } = e.target;
      setFormData((data) => ({
        ...data,
        [name]: value,
      }));
    }
  }
  return <h3> You are Profile!</h3>;
}

export default Profile;
