const Experience = (props) => (
    <div class="hidden md:inline-flex ml-4 mr-4 mt-4 border-2 rounded-lg w-auto border-black-50 p-4 ">
      <div class="flex flex-col ">
        <div class="ml-0">
          <h3 class="font-bold "> EXPERIENCE </h3>
        </div>
  
        <div class="flex flex-col">
         
          {Array.from(props.ExperienceData).map((experience) => {
            return (
              <div>
                <p>
                  {experience.key} ({experience.doc_count})
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  export default Experience;