import React from "react";
// import Job from '@/component/job'
import { Job } from "@/types/job";
import { Exo } from "next/font/google";
import path from "path";
import fs from "fs";
import Dashboard from "@/components/Dashboard";

const getjob = async (id: string): Promise<Job | undefined> => {
  const filePath = path.join(process.cwd(), "asset", "jobs.json");
  const json = await fs.promises.readFile(filePath, "utf-8");
  const jobs = JSON.parse(json);
  const currentJob: Job[] = jobs.job_postings;
  return currentJob.find((iter) => iter.id === id);
};

interface props {
  params: { id: string };
}

const JobPost = async ({ params }: props) => {
  const { id } = params;
  const result = await getjob(id);

  return (
    <div>
      <Dashboard
        description={result?.description || ""}
        responsibilities={result?.responsibilities||""}
        ideal_candidate={result?.ideal_candidate || ""}
        when_where={result?.when_where || ""}
        posted_on={result?.about.posted_on}
        deadline={result?.about.deadline}
        location={result?.about.location}
        start_date={result?.about.start_date}
        end_date={result?.about.end_date}
        categories={result?.about.categories}
        required_skills={result?.about.required_skills}
      />
    </div>
  );
};

export default JobPost;
