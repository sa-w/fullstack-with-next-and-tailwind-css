import jobs from "../../../data/jobs";
import { useRouter } from "next/router";

export default async (req, res) => {
  // @todo: implement filters and search
  // @todo: implement automated tests

  //This variable ensures the req param passed is present in existing server process and can't be lost in case of network challenges
let reqValue = req.query.id;

  var alljobs = [];
  var alljobitems = [];
  var temporaryName = "";
  var totaljobpostings = 0;
  var alljobpostingsdata = [];
 
    if (reqValue === "all") {
      function dataLoop(){
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
    }

    //Function to commense data retrieval
     dataLoop();

      //Conditional statement to make sure all values are duly filled from database
      if(alljobs.length != 0 && alljobitems.length != 0 && totaljobpostings != 0 && alljobpostingsdata.length != 0 ){
        res.json({ alljobs: alljobs, alljobitems: alljobitems, totaljobpostings: totaljobpostings, alljobpostingsdata: alljobpostingsdata });
reqValue = "";
      }else{
        //This function retrieves data retrieval if data is not duly lifted
dataLoop()
      }
    } 
  else{
      res.statusCode = 400;
    }



  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));
  
  
  
  
  
};
