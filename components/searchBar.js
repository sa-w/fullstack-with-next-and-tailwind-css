import React from "react";

import useSWR from "swr";
import fetch from "unfetch";
const fetcher = (url) => fetch(url).then((r) => r.json());

var people = [];
var jobtype = [];
var workschedule = [];
var experience = [];
var alljobs = [];
var alljobsitems = [];

//Retrieving job type data
function getjobtype() {
  const { data, error } = useSWR("/api/everythingFilters/jobtype", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  jobtype = data;
  // ...
}

//Retrieving department data
function getData() {
  const { data, error } = useSWR("/api/everythingFilters/department", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  people = data;
}

//Retrieving workschedule data
function getworkschedule() {
  const { data, error } = useSWR(
    "/api/everythingFilters/workschedule",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  workschedule = data;
}

//Retrieving experience data
function getexperience() {
  const { data, error } = useSWR("/api/everythingFilters/experience", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  experience = data;
}

//Retrieving postings data
function getAll() {
  const { data, error } = useSWR("/api/everythingJobs/all", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  alljobs = data;
  alljobsitems = data.alljobitems;
}

//Search method for retrieving department data
function getPostings(vo) {
  var temp = "";
  let key = "";
  var final = "";
  for (var i = 0; i < people.length; i++) {
    if (people[i].key.match(vo)) {
      temp = temp + " " + people[i].key + " " + "(" + people[i].doc_count + ")";
    }
    if (people[i].doc_count.toString().match(vo)) {
      temp = temp + " " + people[i].key + " " + "(" + people[i].doc_count + ")";
    }
  }

  if (temp != "") {
    final = final + temp + " ";
  }

  return final;
}

//Search method for retrieving job type data
function getPostings2(vo) {
  var temp_jobtype = "";
  var final = "";

  for (var j = 0; j < jobtype.length; j++) {
    if (jobtype[j].key.match(vo)) {
      temp_jobtype =
        temp_jobtype +
        " " +
        jobtype[j].key +
        " " +
        "(" +
        jobtype[j].doc_count +
        ")";
      // return temp;
    }
    if (jobtype[j].doc_count.toString().match(vo)) {
      temp_jobtype =
        temp_jobtype +
        " " +
        jobtype[j].key +
        " " +
        "(" +
        jobtype[j].doc_count +
        ")";
      // return temp;
    }
  }

  if (temp_jobtype != "") {
    final = final + temp_jobtype + " ";
  }

  return final;
}

//Search method for retrieving work schedule data
function getPostings3(vo) {
  var temp_workschedule = "";
  var final = "";

  for (var k = 0; k < workschedule.length; k++) {
    if (workschedule[k].key.match(vo)) {
      temp_workschedule =
        temp_workschedule +
        " " +
        workschedule[k].key +
        " " +
        "(" +
        workschedule[k].doc_count +
        ")";
      // return temp;
    }
    if (workschedule[k].doc_count.toString().match(vo)) {
      temp_workschedule =
        temp_workschedule +
        " " +
        workschedule[k].key +
        " " +
        "(" +
        workschedule[k].doc_count +
        ")";
      // return temp;
    }
  }

  if (temp_workschedule != "") {
    final = final + temp_workschedule + " ";
  }

  return final;
}

//Search method for retrieving experience data
function getPostings4(vo) {
  var temp_experience = "";
  var final = "";

  for (var l = 0; l < experience.length; l++) {
    if (experience[l].key.match(vo)) {
      temp_experience =
        temp_experience +
        " " +
        experience[l].key +
        " " +
        "(" +
        experience[l].doc_count +
        ")";
      // return temp;
    }
  }

  if (temp_experience != "") {
    final = final + temp_experience + " ";
  }

  return final;
}

//Search method for retrieving postings data
function getPostings5(vo) {
  var temp_postings = "";
  var final = "";
  console.log(" ------- --------- " + alljobs.alljobs[0].name);
  for (var n = 0; n < alljobs.alljobs.length; n++) {
    if (alljobs.alljobs[n].name.match(vo)) {
      temp_postings = temp_postings + " " + alljobs.alljobs[n].name;
      // return temp;
    }
    if (alljobs.alljobs[n].number.toString().match(vo)) {
      temp_postings = temp_postings + " " + alljobs.alljobs[n].number;
      // return temp;
    }
  }

  if (temp_postings != "") {
    final = final + temp_postings + " ";
  }

  return final;
}

//Search method for retrieving detailed postings data
function getPostings6(vo) {
  var temp_postingsjobs = "";
  var final = "";
  console.log(" ------- --------- " + alljobsitems[0].title);
  for (var p = 0; p < alljobsitems.length; p++) {
    if (alljobsitems[p].job_title.match(vo)) {
      temp_postingsjobs = temp_postingsjobs + " " + alljobsitems[p].job_title;
      // return temp;
    }
    if (alljobsitems[p].job_type.match(vo)) {
      temp_postingsjobs = temp_postingsjobs + " " + alljobsitems[p].job_type;
      // return temp;
    }
    if (alljobsitems[p].salary_range.match(vo)) {
      temp_postingsjobs =
        temp_postingsjobs + " " + alljobsitems[p].salary_range;
      // return temp;
    }
    if (alljobsitems[p].job_type.match(vo)) {
      temp_postingsjobs = temp_postingsjobs + " " + alljobsitems[p].job_type;
      // return temp;
    }
    if (alljobsitems[p].city.match(vo)) {
      temp_postingsjobs = temp_postingsjobs + " " + alljobsitems[p].city;
      // return temp;
    }
    if (alljobsitems[p].department.match(vo)) {
      temp_postingsjobs = temp_postingsjobs + " " + alljobsitems[p].department;
      // return temp;
    }
    if (alljobsitems[p].hours.match(vo)) {
      temp_postingsjobs = temp_postingsjobs + " " + alljobsitems[p].hours;
      // return temp;
    }

    if (alljobsitems[p].description.match(vo)) {
      temp_postingsjobs = temp_postingsjobs + " " + alljobsitems[p].description;
      // return temp;
    }
  }

  if (temp_postingsjobs != "") {
    final = final + temp_postingsjobs + " ";
  }

  return final;
}

//Method for calling search functions and loading data in search area
function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  var results1 = !searchTerm ? "" : getPostings(searchTerm);

  var results2 = !searchTerm ? "" : getPostings2(searchTerm);

  var results3 = !searchTerm ? "" : getPostings3(searchTerm);

  var results4 = !searchTerm ? "" : getPostings4(searchTerm);

  var results5 = !searchTerm ? "" : getPostings5(searchTerm);

  var results6 = !searchTerm ? "" : getPostings6(searchTerm);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        <li>{results1}</li>
        <li>{results2}</li>
        <li>{results3}</li>
        <li>{results4}</li>
        <li>{results5}</li>
        <li>{results6}</li>
      </ul>
    </div>
  );
}

//Search bar component
const SearchBar = () => (
  <div class="container ">
    <div class=" ml-4 mr-4 mt-4 border-2 rounded-lg border-black-50 p-4 ">
      {}
      {getjobtype()}
      {getworkschedule()}
      {getData()}
      {getexperience()}
      {getAll()}

      {App()}
      {/* <div class="flex flex-row ">
                <div class="mr-4" > <svg class="w-6 h-6" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                    </path></svg> </div>
                <div class="w-4/5" > 
                  <input type="text" id="searchItem" class="w-4/5" placeholder="Search for any job, titles, keyword or company" ></input>
                  </div>
                  

            </div */}
    </div>
  </div>
);
export default SearchBar;
