

export function Header() {
  return (
    <tr>
      <td>
          <div class="header-left">
              <p class="name">Prashant Gupta</p>
              <p class="post">Full Stack Developer</p>
          </div>
      </td>
      <td>
          <div class="header-right">
              <p>prashant.gurukul6893@gmail.com<i class="far fa-envelope"></i></p>
              <p>+91-98733-90537 <i class="fas fa-mobile"></i></p>
              <p>Noida, India <i class="fas fa-map-marker-alt"></i></p>
              <p><a href="https://www.linkedin.com/in/prashant-gupta-0693/" target="_blank" class="profilelinks">linkedin.com/in/prashant-gupta-0693</a> <i class="fab fa-linkedin"></i></p>
              <p><a href="https://portfolio-prashant.netlify.app/" target="_blank"  class="profilelinks">portfolio-prashant.netlify.app</a> <i class="fas fa-link"></i></p>
          </div>
      </td>
    </tr>
  );
}

export function Description(){
  return (<tr>
    <td colspan="2">
        <p class="header-intro">
            Professional, detail-oriented Information Security Analyst and Java Developer motivated to drive projects from start to finish as part of a dynamic team. Superior capacity to solve complex problems and thrive under pressure in fast-pace environments.
            Focused on satisfying customer needs through robust, innovative and forward-thinking solutions.
        </p>
    </td>
</tr>);
}

export function HeadingTitle(props){
  return(<p class="heading-title">{props.title} </p>);
}

export function Underline(){
  return(<div class="about-border"></div>);
}

export function Heading1(){
  return (<tr>
    <td width="50%">
      <HeadingTitle title="Work Experience" /><br/>
      <Underline />
    </td>
    <td width="50%">
      <HeadingTitle title="Skills" /><br/>
      <Underline />
    </td> 
</tr>);
}

export function Experience(){
  return (<tr>
    <td width="50%">
    <HCLExperience />
    <GLExperience />
    <ISExperience />
    </td>
    <td width="50%">
      <Skills />
      <HeadingTitle title="Personal Projects" /><br/>
      <Underline />
      <PersonalProjects1 />
      <PersonalProjects2 />
      <br/>
      <HeadingTitle title="Certifications" /><br/>
      <Underline />
      <Certificates />
    </td>
  </tr>);
}

export function HCLExperience(){
  return(<div class="line-1">
  <p class="job-title">Senior Software Engineer (Java Developer)</p>
  <p class="job-company">HCL Technologies</p>
  <p class="job-location">
      <span class="text-left">May 2017 - Present</span>
      <span class="text-right">Chennai, India</span>
  </p><br/>
  <div class="line-2">
      <p class="job-desc-head">Linedata - Capitalstream Project</p>
      <p class="job-description">
          <div class="list-type">
              <ol>
                  <li>
                      <span>
                          Capitalstream is a credit origination and risk management solution that integrates 
                          and automates previously disparate processes to streamline lending.
                      </span>
                  </li>
                  <li>
                      <span>
                          Works to enhance product and provide support to all the reported issues.
                      </span>
                  </li>
                  <li>
                      <span>
                           Experienced in JAVA, JSP, JS, JQuery, HTML, Velocity script and many other languages.
                  </span>
                  </li>
                  <li>
                      <span>
                           Experience on MSSQL and PL/SQL.
                      </span>
                  </li>
                  <li>
                      <span> 
                           Designed and Developed new automated Web App tool for Hosting to handle all servers 
                           actions on one Web App. Web tool has features to handle all daily manual tasks to be 
                           done automatically on single click.
                      </span>
                  </li>

              </ol>
          </div>
      </p>
  </div>
</div>);
}

export function GLExperience(){
  return(<div class="line-1">
  <p class="job-title">Project Mentor</p>
  <p class="job-company">Freelancing at Great Learning, India</p>
  <p class="job-location">
      <span class="text-left">August 2020 - Present</span>
      <span class="text-right">India</span>
  </p><br/>
  <div class="line-2">
      <p class="job-desc-head">Stanford Advanced Computer Security Program</p>
      <p class="job-description">
          <div class="list-type">
              <ol>
                  <li>
                      <span>
                          Provides project sessions and support on "Exploiting Web Applications" and "Network Security".
                      </span>
                  </li>
                  <li>
                      <span>
                          Evaluation of module projects.
                      </span>
                  </li>
                  <li>
                      <span>
                          Assists in updating course content of the program.
                      </span>
                  </li>
              </ol>
          </div>
      </p>
  </div>
</div>);
}

export function ISExperience(){
  return(<div class="line-1">
  <p class="job-title">Information Security Analyst</p>
  <p class="job-company">Upwork Freelancer</p>
  <p class="job-location">
      <span class="text-left">July 2017 - Present</span>
      <span class="text-right">India</span>
  </p><br/>
  <div class="line-2">
      <p class="job-desc-head">Expertised/Tasks</p>
      <p class="job-description">
          <div class="list-type">
              <ol>
                  <li>
                      <span>
                          Experience in Penetration testing on Web Applications.
                      </span>
                  </li>
                  <li>
                      <span>
                          Experience in performing in Vulnerability scanning using Nessus and Accunetix. Also 
                          expertise in other security operating systems and tools as KALI, Arch Linux, Parrot,
                          and many more tools of them.
                      </span>
                  </li>
                  <li>
                      <span>
                          Deep knowledge of multiple types of attacks like SQL injection, Cross-site scripting, 
                          buffer overflows, CSRF, LFI, RFI, and many others.
                      </span>

                  </li>

                  <li>
                      <span>
                          Experience in writing automate scripts for performing  different actions.
                      </span>

                  </li>
                  <li>
                      <span>
                          Deep knowledge on OWASP 10.
                      </span>
                  </li>
              </ol>
          </div>
      </p>
  </div>
</div>);
}

export function Skills(){
  return(<p class="skills">
  <span>
      Java
  </span>
  <span>
      Javascript
  </span>
  <span>
      Python
  </span>
  <span>
      PHP
  </span>
  <span>
      ReactJS
  </span>
  <span>
      NodeJS
  </span>
  <span>
      MySQL
  </span>
  <span>
      MSSQL
  </span>
  <span>
      MongoDB
  </span>
  <span>
      XSS Scripting
  </span>
  <span>
      Web App Penetration Testing
  </span>
  <span>
      SQL Injection
  </span>
  <span>
      Vulnerability Assesments
  </span>
  <span>
      System Penetration testing
  </span>
</p>);
}

export function PersonalProjects1(){
  return(  <div class="line-1">
  <p class="job-title">Automatic Huge quantity WhatsApp message sender</p>
  <p class="job-company">Created script in both JAVA and Python to send any no of text messages to any WhatsApp Messenger No.</p>
  <br/>
</div>    );
}

export function PersonalProjects2(){
  return(  <div class="line-1">
  <p class="job-title">Automatic Huge Quantity Text Message Sender</p>
  <p class="job-company">Working on script to send huge no. of messages to any particular mobile no. to test SMS bombing concept.</p>
  <br />
</div>  );
}

export function Certificates(){
  return(<div class="list-type2">
  <ol>
      <li>
          <span>
              Data Science with Python <br/><small>Feb, 2020</small>
          </span>
      </li>
      <li>
          <span>
              Comptia Security + <br/><small>April, 2020</small>
          </span>
      </li>
      <li>
          <span>
              Developing Ethical hacking tools with Python <br/><small>April, 2020</small>
          </span>
      </li>
      <li>
          <span>
              Machine Learning <br/><small>April, 2020</small>
          </span>
      </li>
      <li>
          <span>
              Tableau 10 <br/><small>May, 2020</small>
          </span>
      </li>
      <li>
          <span>
              Information Security Certified professional <br/><small>May, 2019</small>
          </span>
      </li>
      <li>
          <span>
              Web Application Penetration Testing <br/><small>Oct, 2018</small>
          </span>
      </li>
      <li>
          <span>
              Cryptography <br/><small>Sept, 2018</small>
          </span>
      </li>
      <li>
          <span>
              Cross-Site Scripting <br/><small>Sept, 2018</small>
          </span>
      </li>
      <li>
          <span>
              R Programming <br/><small>July, 2018</small>
          </span>
      </li>
  </ol>
</div>);
}


export function Heading2(){
  return (<tr>
    <td width="50%">
      <HeadingTitle title="Education" /><br/>
      <Underline />
    </td>
    <td width="50%">
      <HeadingTitle title="Achievements" /><br/>
      <Underline />
    </td> 
</tr>);
}

export function Heading2Values(){
  return(<tr>
    <Education />
    <Achievements />
</tr>

  );
}

export function Education(){
  return(<td>
    <div class="line-1">
        <p class="job-title">Stanford Advanced Computer Security Program (Online-Mode)</p>
        <p class="job-company">Stanford University</p>
        <p class="job-location">
            <span class="text-left">07/2019 – 01/2020</span>
        </p><br/>
    </div>

    <div class="line-1">
        <p class="job-title">Masters in Data Science(Online-Mode)</p>
        <p class="job-company">Simplilearn</p>
        <p class="job-location">
            <span class="text-left">08/2019 – 04/2020</span>
        </p><br/>
    </div>

    <div class="line-1">
        <p class="job-title">Bachelor of Technology in Aeronautical Engineering</p>
        <p class="job-company">Punjab Technical University, India</p>
        <p class="job-location">
            <span class="text-left">07/2011 – 07/2015</span>
        </p><br/>
    </div>
</td>);
}

export function Achievements(){
  return( <td>
    <div class="line-1">
        <p class="job-title">Ranked in top 500 member on Hackthebox platform with Hacker Rank</p>
        <p class="job-company "><a href="https://www.hackthebox.eu/" target="_blank"  class="acheive">hackthebox.eu</a></p>
        <br/>
    </div>

    <div class="line-1">
        <p class="job-title">Completed from basic to max level web challenges of NATAS: Overthewire</p>
        <p class="job-company"><a href="https://overthewire.org/wargames/natas/" target="_blank" class="acheive">overthewire.org/wargames/natas</a></p><br/>
    </div>
</td>);
}