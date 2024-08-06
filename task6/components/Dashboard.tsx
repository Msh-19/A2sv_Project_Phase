interface DashboardProps {
  description: string;
  responsibilities: string[];
  ideal_candidate: IdealCandidate;
  when_where: string;
  // posted_on: string;
  about: About;
  category: Category;
  categories: string[];
}

export interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

export interface About {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

export interface Category {
  Design: string;
  Technology: string;
  Health: string;
  Marketing: string;
}

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
      <div className="w-[70%] p-4 col-span-2 mb-2-">
        <div className=" m-3">
          <h1 className="font-bold">Description</h1>
          <p className="font-headers">{description}</p>
        </div>
        <div className="m-3 mt-2">
          <h1 className="font-bold">Responsibilities</h1>
          <ul className="font-headers">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="m-3">
          <h1 className="font-bold">Ideal Candidate we want</h1>
          <p className="font-headers">Age: {ideal_candidate.age}</p>
          <p className="font-headers">Gender: {ideal_candidate.gender}</p>
          <ul className="font-headers">
            {ideal_candidate.traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>
        <div className="m-3">
          <h1 className="font-bold">When & Where</h1>
          <p className="font-headers">{when_where}</p>
        </div>
      </div>
      <div className="border mt-3 rounded-2xl p-4 space-x-6 col-span-1">
        <h1 className="font-bold p-2">About</h1>
        {/* iCon */}
        <div>
          <h3 className="text-gray-400">Posted on:</h3>
          <h3 className="font-light">{posted_on}</h3>
        </div>

        <div>
          <h3 className="text-gray-400">Deadline on:</h3>
          <h3 className="font-light">{deadline}</h3>
        </div>
        <div>
          <h3 className="text-gray-400">Location:</h3>
          <h3 className="font-light">{location}</h3>
        </div>
        <div>
          <h3 className="text-gray-400">start Date:</h3>
          <h3 className="font-light">{start_date}</h3>
        </div>
        <div>
          <h3 className="text-gray-400">End Date:</h3>
          <h3 className="font-light">{end_date}</h3>
        </div>
        <div>
          <h1 className="font-bold"> Categories</h1>
          <div className="flex flex-wrap gap-2">
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
          <h1 className="font-bold"> Required Skills</h1>
            
              <button className="bg-[#4640DE] text-black font-light bg-opacity-20 py-1 px-2 rounded-md text-sm">
              {required_skills}
              </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
