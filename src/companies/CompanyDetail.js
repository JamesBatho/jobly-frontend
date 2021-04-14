import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "../jobs/JobCard";

function CompanyDetail() {
  const [company, setCompany] = useState([]);
  let params = useParams();

  useEffect(() => {
    async function loadCompany() {
      const company = await JoblyApi.getCompany(params.handle);
      setCompany(company);
    }
    loadCompany();
  }, [params]);
  const { name, description, numEmployees, jobs } = company;

  return (
    <div className="CompanyDetail">
      <h3> {name} </h3>
      <p> {description} </p>
      <p>
        We currently have <b>{numEmployees} </b>employees! If you would like to
        increment this number please apply below.
      </p>
      <h4> Jobs </h4>
      <div className="Jobs">
        {/* jobs here but how to get them from company? */}
      </div>
    </div>
  );
}

export default CompanyDetail;
