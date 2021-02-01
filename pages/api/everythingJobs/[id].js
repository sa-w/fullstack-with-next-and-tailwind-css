import jobs from "../../../data/jobs";
import { useRouter } from "next/router";

export default async (req, res) => {
  // const router = useRouter()
  // const { id } = router.query
  console.log("The id is " + req.query.id);

  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  //if(id){
  //  console.log(jobs);
  var alljobs = [];
  var alljobitems = [];
  var temporaryName = "";
  var totaljobpostings = 0;
  var alljobpostingsdata = [];
  if (req.query.id === "all") {
    for (var i of jobs) {
      temporaryName = i.name;
      alljobs.push({
        badge: temporaryName.slice(0, 2).toUpperCase(),
        number: i.total_jobs_in_hospital,
        name: i.name,
        unique_id: Math.random().toString(),
      });
      for(var j = 0; j < i.items.length; j++){
          totaljobpostings = totaljobpostings + i.items.length;
          alljobitems.push({
              job_title: i.items[j].job_title,
              job_type: i.items[j].job_type,
              salary_range: "$"+i.items[j].salary_range[0] + "-" + "$"+i.items[j].salary_range[1] ,
              city: i.items[j].city,
              department: i.items[j].department.toString(),
            hours: i.items[j].hours.toString(),
            description: i.items[j].description,
          });
          alljobpostingsdata.push({
            department: i.items[j].department.toString(),
            hours: i.items[j].hours.toString(),
            description: i.items[j].description,
          })
      }
    }
    res.json({ alljobs: alljobs, alljobitems: alljobitems, totaljobpostings: totaljobpostings, alljobpostingsdata: alljobpostingsdata });
  } else if (req.query.id === "department") {
  } else if (req.query.id === "workschedule") {
  } else if (req.query.id === "experience") {
  } else {
    res.statusCode = 400;
  }
  //res.json({ jobs: jobs });
  //}
};
