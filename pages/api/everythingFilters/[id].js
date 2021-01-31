// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from "../../../data/filters";

export default (req, res) => {

    if (req.query.id === "jobtype") {

        res.statusCode = 200;
        res.json(filters.job_type);

    } else if (req.query.id === "department") {

        res.statusCode = 200;
        res.json(filters.department);
  
    } else if (req.query.id === "workschedule") {

        res.statusCode = 200;
        res.json(filters.work_schedule);
  
    } else if (req.query.id === "experience") {

        res.statusCode = 200;
        res.json(filters.experience);
        
    } else {
      res.statusCode = 400;
    }

  //res.statusCode = 200;
 // res.json(filters);
};
