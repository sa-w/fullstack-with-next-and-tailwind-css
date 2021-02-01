import React, { useState } from 'react';

//import { useRouter } from 'next/router'

//const router = useRouter()

function sortByLocation() {}

function sortByRole() {}

function sortByDepartment() {}

function sortByEducation() {}

function sortByExperience() {}

function runRandom(){
   // const [random, setRandom] = useState(0)
     
}

function setRandom(ra){
  //  setRandom(ra)
}

function revealJobs(va){
    if(document.getElementById(va).className == "hidden"){
        document.getElementById(va).className = "";
    }else{
        document.getElementById(va).className = "hidden";
    }
}
    
var random = "";
const Postings = (props) => (

    

  <div class=" ml-4 mr-4 mt-4 border-2 rounded-lg w-screen border-black-50 p-4 ">
   
    <div class="flex flex-col">
      <div class="ml-0 flex flex-row justify-between ">
        <div > <span class="font-bold"> {props.TotalJobPostings} </span> job postings </div>

        <div class="hidden md:flex flex-row" >
          <div class="mr-2 font-thin " >
            Sort by
          </div>

          <div class="mr-2" >
            <button  type="button" onclick="sortByLocation()">
              Location
            </button>
          </div>

          <div class="mr-2" >
            <button  type="button" onclick="sortByRole()">
              Role
            </button>
          </div>

          <div class="mr-2" >
            <button  type="button" onclick="sortByDepartment()">
              Department
            </button>
          </div>

          <div class="mr-2" >
            <button  type="button" onclick="sortByEducation()">
              Education
            </button>
          </div>

          <div class="mr-2" >
            <button  type="button" onclick="sortByExperience()">
              Experience
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-4 overflow-hidden md:overflow-hidden ">
        {Array.from(props.PostingsData).map((posting) => {
          return (
            <div class="mb-4 divide-y-2">
                       
              <button type="button"  onClick={()=>revealJobs(posting.unique_id)} >

<div class="flex flex-row" >
  <div cols="2" class="mr-4 border-gray-500 border-2 p-1 rounded-md bg-gray-500 text-white " >
  {posting.badge}
  </div>
  <div>
  {posting.number} jobs for {posting.name}
  </div>
</div>

            {  /*  <span class="mr-4 border-gray-500 border-2 p-1 rounded-md bg-gray-500 text-white ">
                  {" "}
                  {posting.badge}{" "}
                </span>{" "}
          {posting.number} jobs for {posting.name} */}
              </button>
             
              <div id={posting.unique_id} class="hidden" >
                
{Array.from(props.PostingsJobsData).map((postingjob) => {
 return(
    <div  class="mb-4 mt-4">
    <p class="mt-2">
  <span class="mr-4 font-bold ">
    {" "}
    {postingjob.job_title}{" "}
  </span>{" "}<br/>
  {postingjob.job_type} | {postingjob.salary_range} an hour | {postingjob.city}
</p>
    </div>
);
})}
</div>             

            </div>
          );
        })}
      </div>
    </div>
  </div>
);
export default Postings;
