import React from "react";
// import Job from '@/component/job'
import { Job } from "@/types/job";
import { Exo } from "next/font/google";
import path from "path";
import fs from "fs";
import Dashboard from "@/component/Dashboard";

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

  return <div><Dashboard /></div>;
};

export default JobPost;
