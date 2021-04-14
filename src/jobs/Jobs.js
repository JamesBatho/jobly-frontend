import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";

function Jobs() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function loadJobs() {
      const jobList = await JoblyApi.getJobs();
      setJobs(jobList);
    }
    loadJobs();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function loadJobs() {
      const jobList = await JoblyApi.getJobs(search);
      setJobs(jobList);
    }
    loadJobs();
    setSearch("");
  };

  return (
    <div className="jobs">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"> Search for a Job:</label>
        <input
          value={search}
          type="text"
          placeholder="Search"
          id="search"
          onChange={(e) => handleChange(e)}
        />
        <button> Search</button>
      </form>
      <div className="JobCards">
        {jobs.map(({ id, companyName, salary, title, equity }) => {
          return (
            <JobCard
              id={id}
              companyName={companyName}
              salary={salary}
              title={title}
              key={id}
              equity={equity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;
