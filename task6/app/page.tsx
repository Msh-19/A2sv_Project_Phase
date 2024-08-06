import React from 'react'
import { Job } from '@/types/job';
import path from 'path';
import fs from "fs"
import Card from "@/component/Card"
import { log } from 'console';
import Link from 'next/link';
// import style from ""


const getjobs = async (): Promise<Job[] | undefined> => {
  const filePath = path.join(process.cwd(), "asset", "jobs.json");
  const json = await fs.promises.readFile(filePath, "utf-8");
  const jobs = JSON.parse(json);
  const currentJob: Job[] = jobs.job_postings;
  return currentJob
};


const Home = async() => {
  const allJobs =  await getjobs()
  
  return (
    <div className='w-[60%] pl-20 mt-16'>Home
      <div className=''>
        {allJobs?.map(it => (
          <Card key={it.id} title= {it.title} company= {it.company} id ={it.id} description={it.description} location={it.about.location} />
        ))}
      </div>
    </div>
  )
}

export default Home