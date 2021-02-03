const Footer = () => (
  <div class="container">
  <div class="hidden md:inline-flex flex-row mt-4 border-2 rounded-lg w-screen border-black-50 p-2 ">
    <div class="flex flex-col w-3/5">
      <div>
        {" "}
        <h3 class="font-bold "> About us </h3>
      </div>
      <div>
        we are a team of nurses, doctors, technologists and executives<br/> dedicated
        to help nurses find jobs that they love
      </div>
    </div>
    <div class="flex flex-col w-1/5">
      <div>
        {" "}
        <h3 class="font-bold "> Sitemap </h3>
      </div>
      <div>
        <ul>
          <li>Nurses</li>
          <li>Employers</li>
          <li>Social networking</li>
          <li>Jobs</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col w-1/5">
      <div>
        {" "}
        <h3 class="font-bold "> Privacy </h3>
      </div>
      <div>
        <ul>
          <li>Terms of use</li>
          <li>Privacy polocy</li>
          <li>Cookie policy</li>
        </ul>
      </div>
    </div>
  </div>


  <div class="inline-flex flex-col mt-4 border-2 rounded-lg w-screen border-black-50 p-2 md:hidden">
    <div class="flex flex-col w-screen">
      <div>
        {" "}
        <h3 class="font-bold "> About us </h3>
      </div>
      <div>
        we are a team of nurses, doctors, technologists and executives<br/> dedicated
        to help nurses find jobs that they love
      </div>
    </div>
    <div class="flex flex-col w-screen">
      <div>
        {" "}
        <h3 class="font-bold mt-4 "> Sitemap </h3>
      </div>
      <div>
        <ul>
          <li>Nurses</li>
          <li>Employers</li>
          <li>Social networking</li>
          <li>Jobs</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col w-screen">
      <div>
        {" "}
        <h3 class="font-bold mt-4 "> Privacy </h3>
      </div>
      <div>
        <ul>
          <li>Terms of use</li>
          <li>Privacy polocy</li>
          <li>Cookie policy</li>
        </ul>
      </div>
    </div>
  </div>



  </div>
);
export default Footer;
