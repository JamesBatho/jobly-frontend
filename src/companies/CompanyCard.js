import React from "react";
import { useHistory } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ name, logoUrl, numEmployees, description, handle }) {
  let history = useHistory();

  const redirect = (handle) => {
    history.push(`/companies/${handle}`);
  };

  let logo = undefined;
  if (logoUrl) {
    const alt = `logo for ${name}`;
    logo = <img src={logoUrl} alt={alt}></img>;
  }
  return (
    <div onClick={() => redirect(handle)} className="CompanyCard">
      <h3> {name} </h3>
      {logo}
      <p> {description}</p>
    </div>
  );
}

export default CompanyCard;
