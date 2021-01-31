const WorkSchedule = (props) => (

    <div class=" ml-4 mr-4 mt-4 border-2 rounded-lg w-auto border-black-50 p-4 ">
    <div class="flex flex-col ">
      <div class="ml-0 flex flex-row">
          <div>
        <p class="font-bold "> WORK SCHEDULE </p>
        </div>
      </div>

      <div class="flex flex-col">
       
        {Array.from(props.WorkScheduleData).map((workSchedule) => {
          return (
            <div>
              <p>
                {workSchedule.key} ({workSchedule.doc_count})
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>

);
export default WorkSchedule;