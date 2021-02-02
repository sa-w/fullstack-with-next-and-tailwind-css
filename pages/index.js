import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import JobType from "../components/jobType";
import Postings from "../components/postings";
import Department from "../components/department";
import WorkSchedule from "../components/workSchedule";
import Experience from "../components/experience";

import useSWR from 'swr'
import fetch from 'unfetch'
const fetcher = url => fetch(url).then(r => r.json())

//Method for getting job types from api and passing the data to a component
function getJobType () {
    const { data, error } = useSWR('/api/everythingFilters/jobtype', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <JobType JobTypeData={data} /> 
    // ...
  }

  //Method for getting department from api and passing the data to a component
  function getDepartment () {
    const { data, error } = useSWR('/api/everythingFilters/department', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <Department DepartmentData={data} /> 
    // ...
  }

  //Method for getting work schedule from api and passing the data to a component
  function getWorkSchedule(){
    const { data, error } = useSWR('/api/everythingFilters/workschedule', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <WorkSchedule WorkScheduleData={data} /> 
  }

  //Method for getting experience from api and passing the data to a component
  function getExperience(){
    const { data, error } = useSWR('/api/everythingFilters/experience', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <Experience ExperienceData={data} /> 
  }

  //Method for getting postings from api and passing the data to a component
  function getPostings(){
    const { data, error } = useSWR('/api/everythingJobs/all', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <Postings PostingsData={data.alljobs} PostingsJobsData={data.alljobitems} TotalJobPostings={data.totaljobpostings} PostingsJobDetailsData={data.alljobpostingsdata} /> 
  }


const Index = () => (
  <div>
    <NavBar />
    <SearchBar />
    <div class=" container flex flex-row">
      <div class="hidden md:inline-flex w-1/3 flex flex-col">
      {getJobType()}
      {getDepartment()}
     {getWorkSchedule()}
     {getExperience()}
      </div>{" "}
     <div class="w-screen ml-4 md:w-2/3">
        {getPostings()}
        </div>
    </div>{" "}
  </div>
);
export default Index;
