import { AnotherCalendar, CalendarIcon, FireIcon, LocationIcon, PlusIcon } from "@/lib/icons";

interface DashboardProps {
  description: string;
  responsibilities: string[];
  ideal_candidate: string[];
  when_where: string;
  // posted_on: string;
  about: string[];
  category: string[];
  categories: string[];
  posted_on: string,
  deadline: string,
  location: string,
  start_date: string,
  end_date: string,
  required_skills: string[]
  age: string
}

// export interface IdealCandidate {
//   age: string;
//   gender: string;
//   traits: string[];
// }

// export interface About {
//   posted_on: string;
//   deadline: string;
//   location: string;
//   start_date: string;
//   end_date: string;
//   categories: string[];
//   required_skills: string[];
// }

// export interface Category {
//   Design: string;
//   Technology: string;
//   Health: string;
//   Marketing: string;
// }

const Dashboard = ({
  description,
  responsibilities = [],
  ideal_candidate = { age: "", gender: "", traits: [] },
  when_where,
  posted_on,
  deadline,
  location,
  start_date,
  end_date,
  categories,
  required_skills
}: DashboardProps) => {
  return (
    <div className="grid grid-cols-3">
      <div className="w-[70%]  col-span-2 mb-2 p-12">
        <div className=" m-3">
          <h1 className="font-bold text-2xl">Description</h1>
          <p className="font-headers">{description}</p>
        </div>
        <div className="m-3 mt-2">
          <h1 className="font-bold text-2xl">Responsibilities</h1>
          <ul className="font-headers">
            {responsibilities.map((responsibility, index) => (
              <li key={index}> - {responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="m-3">
          <h1 className="font-bold text-2xl">Ideal Candidate we want</h1>
          <p className="font-headers"> <span className="font-bold">Age:</span> {ideal_candidate.age}</p>
          <p className="font-headers"><span className="font-bold">Gender:</span>  {ideal_candidate.gender}</p>
          <ul className="font-headers">
            {ideal_candidate.traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>
        <div className="m-3">
          <h1 className="font-bold text-2xl">When & Where</h1>
          <div className="flex items-start">
            <LocationIcon />
            <p className="font-headers ">{when_where}</p>
          </div>
        </div>
      </div>
      <div className=" mt-3 rounded-2xl space-x-6 col-span-1 p-12">
        <div className="mb-3">
            <h1 className="font-bold p-2">About</h1>
          <div className="flex items-start gap-3 mb-2 ">
            <PlusIcon />
            <div>
              <h3 className="text-gray-400">Posted on:</h3>
              <h3 className="font-light">{posted_on}</h3>
            </div>
        
          </div>
              <div className="flex items-start gap-3 mb-2">
              <FireIcon />
                        <div>
                          <h3 className="text-gray-400">Deadline on:</h3>
                          <h3 className="font-light">{deadline}</h3>
                        </div>
              </div>
            <div className="flex items-start gap-3 mb-2 ">
              <LocationIcon />
              <div className="m-1">
              <h3 className="text-gray-400">Location:</h3>
              <h3 className="font-light">{location}</h3>
              </div>
        
          </div>
          <div className="flex items-start gap-3 mb-2">
            <CalendarIcon />
            <div>
              <h3 className="text-gray-400">Start Date:</h3>
              <h3 className="font-light">{start_date}</h3>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <AnotherCalendar />
            <div>
              <h3 className="text-gray-400">End Date:</h3>
              <h3 className="font-light">{end_date}</h3>
            </div>
          </div>
        
      </div>
        <div>
          <h1 className="font-bold mb-3 ">Categories</h1>
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-[#FFB836] text-[#FFB836] bg-opacity-25 font-semibold py-1 px-2 rounded-full text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-3">Required Skills</h1>
          <div className="flex flex-wrap gap-2">
            {required_skills.map((skill, index) => (
              <button
                key={index}
                className="bg-[#4640DE] text-black font-light bg-opacity-20 py-1 px-2 rounded-md text-sm"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
