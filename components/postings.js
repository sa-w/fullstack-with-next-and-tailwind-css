import React, { useState } from "react";

function revealJobs(va) {
  if (document.getElementById(va).className == "hidden") {
    document.getElementById(va).className = "";
  } else {
    document.getElementById(va).className = "hidden";
  }
}

const Postings = (props) => (
  <div class="w-auto md:ml-4 mr-4 mt-4 border-2 rounded-lg border-black-50 p-4 ">
    <div class="flex flex-col">
      <div class="ml-0 flex flex-row justify-between ">
        <div>
          {" "}
          <span class="font-bold"> {props.TotalJobPostings} </span> job postings{" "}
        </div>

        <div class="hidden md:flex flex-row">
          <div class="mr-2 font-thin ">Sort by</div>

          <div class="mr-2">
            <button type="button" onclick="sortByLocation()">
              Location
            </button>
          </div>

          <div class="mr-2">
            <button type="button" onclick="sortByRole()">
              Role
            </button>
          </div>

          <div class="mr-2">
            <button type="button" onclick="sortByDepartment()">
              Department
            </button>
          </div>

          <div class="mr-2">
            <button type="button" onclick="sortByEducation()">
              Education
            </button>
          </div>

          <div class="mr-2">
            <button type="button" onclick="sortByExperience()">
              Experience
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-4 overflow-hidden md:overflow-hidden ">
        {Array.from(props.PostingsData).map((posting) => {
          return (
            <div class="mb-4 divide-y-2">
              <button
                type="button"
                onClick={() => revealJobs(posting.unique_id)}
              >
                <div class="flex flex-row justify-start">
                  <div class="mr-4 overflow-hidden border-gray-500 border-2 w-12 md:w-12 h-6 md:h-6 rounded-md bg-gray-500 text-white ">
                    {posting.badge}
                  </div>
                  <div class="md:overflow-hidden ml-0">
                    {posting.number} jobs for {posting.name}
                  </div>
                </div>

                {/*  <span class="mr-4 border-gray-500 border-2 p-1 rounded-md bg-gray-500 text-white ">
                  {" "}
                  {posting.badge}{" "}
                </span>{" "}
          {posting.number} jobs for {posting.name} */}
              </button>

              <div id={posting.unique_id} class="hidden divide-y-2">
                {Array.from(props.PostingsJobsData).map((postingjob) => {
                  return (
                    <div class="mb-4 mt-4 divide-y-2 ">
                     
                      <p class="mt-2 divide-y-2">
                        <span class="mr-4 font-bold ">
                          {" "}
                          {postingjob.job_title}{" "}
                        </span>{" "}
                        <br />
                        {postingjob.job_type} | {postingjob.salary_range} an
                        hour | {postingjob.city}
                      </p>
                   
                      

                      <div class="mb-4 mt-4 flex flex-col">
                        <div class="flex mt-4 flex-row justify-between">
                          <div class="w-2/3">
                            <div class="flex flex-row ">
                              <div class="">Department:</div>
                              <div>{postingjob.department}</div>
                            </div>

                            <div class="flex flex-row ">
                              <div>Hours/shifts:</div>
                              <div>{postingjob.hours}</div>
                            </div>

                            <div class="flex flex-row ">
                              <div>Summary:</div>
                              <div>{postingjob.description}</div>
                            </div>
                          </div>
                          <div class="w-1/3 ">
                           <div class="ml-10"> 
                             <button class="bg-blue-700 text-white p-2 rounded-lg " type="button">Job details</button>
                             </div>
                            
                           <div  class="ml-10">
                              <button class=" border-4 mt-2 border-gray-500 p-2 rounded-lg" type="button">Save job</button>
                              </div>
                          </div>
                        </div>
                      </div>
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
