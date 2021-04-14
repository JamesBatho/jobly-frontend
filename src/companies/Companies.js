import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

function Companies() {
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function loadCompanies() {
      const companyList = await JoblyApi.getCompanies();
      setCompanies(companyList);
    }
    loadCompanies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function loadCompanies() {
      const companyList = await JoblyApi.getCompanies(search);
      setCompanies(companyList);
    }
    loadCompanies();
    setSearch("");
  };

  return (
    <div className="Companies">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"> Search for a Company:</label>
        <input
          value={search}
          type="text"
          placeholder="Search"
          id="search"
          onChange={(e) => handleChange(e)}
        />
        <button> Search</button>
      </form>
      <div className="CompanyCards">
        {companies.map(
          ({ name, logoUrl, numEmployees, description, handle }) => {
            return (
              <CompanyCard
                name={name}
                logoUrl={logoUrl}
                numEmployees={numEmployees}
                description={description}
                handle={handle}
                key={handle}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Companies;
