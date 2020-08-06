import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import JobPagination from "./JobPagination";
import SearchForm from "./SearchForm";
export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  return (
    <Container className="my-4">
      <h1>GitHub Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>loading...</h1>}
      {error && <h1>Error try again</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}
