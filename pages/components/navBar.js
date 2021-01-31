const NavBar = () => (
  <div>
    <div class="container">
      <div class=" mt-4 border-2 border-black-50 p-4 flex flex-row justify-between md:justify-between">
        <div class="text-blue-700" >HEALTH EXPLORE</div>

        <div class="flex flex-row">
          <div class="mr-4"> PROFILE </div>
          <div class="mr-4"> JOBS </div>
          <div class="mr-4"> PROFESSIONAL NETWORK </div>
          <div class="mr-4"> LOUNGE </div>
          <div> SALARY </div>
        </div>

        <div class="flex flex-row">
          <div class="mr-4">
            {" "}
            <button class="rounded border-blue-700 border-2 p-1 text-blue-700 " type="button">
              {" "}
              CREATE JOB{" "}
            </button>{" "}
          </div>
          <div class="mr-4 border-blue-700 border-2 p-1 rounded-full bg-blue-700 text-white ">
            {" "}
            <label>JO</label>{" "}
          </div>
          <div> LOGOUT </div>
        </div>
      </div>

      {/*<ul class="hidden md:flex md:flex-row" id="mobileMenu">
                <li class="pr-5"><a> PROFILE </a></li>
                <li class="pr-5"><a> JOBS </a></li>
                <li class="pr-5"><a> PROFESSIONAL NETWORK </a></li>
                <li class="pr-5"><a> LOUNGE </a></li>
                <li class="pr-5"><a> SALARY </a></li>
                
</ul> */}
    </div>

    {/*    <nav class="flex-row w-1 h-1 md:justify-between">
            <div class="flex flex-row justify-between">
               <a href="#" class="md:hidden" >
               <svg class="w-6 h-6" fill="none"
                stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" 
                     stroke-linejoin="round" stroke-width="2" 
                     d="M4 6h16M4 12h16M4 18h16">
                         </path></svg>
                </a><span>HEALTH EXPLORER</span>
               <p  class="md:hidden bg-purple-800">
                   <div>
               <label>
                     JO
                </label>
             </     div>
        
               </p>
            
           
            <ul class="hidden md:flex md:flex-row" id="mobileMenu">
                <li class="pr-5"><a> PROFILE </a></li>
                <li class="pr-5"><a> JOBS </a></li>
                <li class="pr-5"><a> PROFESSIONAL NETWORK </a></li>
                <li class="pr-5"><a> LOUNGE </a></li>
                <li class="pr-5"><a> SALARY </a></li>
                
            </ul>

            <div class="flex space-x-3 mb-4 text-sm font-medium">
      <div class="flex-auto flex space-x-3">
        <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">CREATE JOB</button>
        <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
      <label>
         JO
        </label>
      </button>
    </div>


            </div>
</nav> */}
  </div>
);
export default NavBar;
