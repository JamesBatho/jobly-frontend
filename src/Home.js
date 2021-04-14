import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./auth/UserContext";

// Site homepage, show welcome message or login/signup buttons

function Home() {
  const { currUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <h1> Jobly </h1>
      <p> Find what you'll be doing tomorrow, today!</p>
      {currUser ? (
        <h3> Welcome back, {currUser.firstName} </h3>
      ) : (
        <p>
          <Link to="/login"> Login Here </Link>
          <Link to="/signup"> Sign Up Here </Link>
        </p>
      )}
    </div>
  );
}

export default Home;
