import Grid from "@mui/material/Grid";

import JobCard from "./JobCard";

export default function JobSection({ jobs, page }) {
  return (
    <Grid container spacing={2} mt={0.5}>
      {jobs.map((job) => (
        <Grid key={job.id} item xs={12} md={6} lg={4}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
}
