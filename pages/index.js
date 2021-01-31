import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import JobType from "./components/jobType";
import Postings from "./components/postings";
import Department from "./components/department";
import WorkSchedule from "./components/workSchedule";
import Experience from "./components/experience";

import useSWR from 'swr'
import fetch from 'unfetch'
const fetcher = url => fetch(url).then(r => r.json())


/*
 function getAllJobs() {
  
  let part_total = 0;
 fetch("/api/everythingJobs/money")
    .then((response) => response.json())
    .then((data) => {
     // var newdat = [];
     // newdat=data;
       console.log(data.jobs[0].name);
      for (var i of data.jobs) {
      // console.log("I am here ------- " + i.items[0].job_type);
        for(var j=0;j<i.items.length;j++){
          if(i.items[j].job_type === "Part-time"){
part_total = part_total + 1;
console.log("I hit " + i.items[j].job_type );
          }else{
          //  console.log("I missed " + i.items[j].job_type );
          }
        } 
     }
      console.log("Part time total is " + part_total);

    });
 
} */


function getJobType () {
    const { data, error } = useSWR('/api/everythingFilters/jobtype', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <JobType JobTypeData={data} /> 
    // ...
  }

  function getDepartment () {
    const { data, error } = useSWR('/api/everythingFilters/department', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <Department DepartmentData={data} /> 
    // ...
  }

  function getWorkSchedule(){
    const { data, error } = useSWR('/api/everythingFilters/workschedule', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <WorkSchedule WorkScheduleData={data} /> 
  }

  function getExperience(){
    const { data, error } = useSWR('/api/everythingFilters/experience', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <Experience ExperienceData={data} /> 
  }

  function getPostings(){
    const { data, error } = useSWR('/api/everythingJobs/all', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   return  <Postings PostingsData={data.alljobs} PostingsJobsData={data.alljobitems} TotalJobPostings={data.totaljobpostings} /> 
  }

const Index = () => (
  <div>
    <NavBar />
    <SearchBar />
    <div class=" container flex flex-row">
      <div class=" w-auto flex flex-col">
      {getJobType()}
      {getDepartment()}
     {getWorkSchedule()}
     {getExperience()}
      </div>{" "}
      {getPostings()}
    </div>{" "}
  </div>
);
export default Index;
