import React from 'react';
import Link from 'next/link';

const AwardsPage = () => {
  return (
    <div>
      <h1>Awards, Achievements, and Appearances</h1>
      <h2>Education</h2>
        <div>
          <h3><u>Master of Computer Science</u></h3>
          <p>August 2020 - August 2023 | Miami University | Oxford, Ohio, United States</p>
          <p><b>Magna Cum Laude</b>, GPA: 3.8/4.0</p>
          <p><b>Coursework:</b> Artificial Intelligence, Network Analysis and Modeling, Computer and Network Security, 
            Research Methods, High Performance Computing, Quantum Computing, Machine Learning, Cryptography</p>
        </div>
        <br /><br />
        <div>
          <h3><u>Bachelor of Science in Computer Science</u></h3>
          <p>Aug 2019 - May 2023 | Miami University | Oxford, Ohio, United States</p>
          <p><b>Magna Cum Laude</b>, GPA: 3.91/4.0</p>
          <p><b>College Honors with Distinction</b><br />
            <ul>
              <li><b>Honors Thesis:</b> &quot;Guiding Prevention Initiatives by Applying Network Analysis to 
              Causal Maps of Adverse Childhood Experiences and Adolescent Suicide&quot;</li>
              <li><b>Honors Advisor:</b> Dr. Philippe Giabbanelli</li>
            </ul>
          </p>
          <p><b>Coursework:</b></p>
          <ul>
            <li><b>Computer Science:</b> Object-Oriented Programming, Machine Learning, Data Structures, Computer Systems, Operating Systems, 
            Cloud Computing and DevOPs, Algorithms, Web Apps, Software Engineering, Mobile App Development, Image Processing, 
            Comparative Programming Languages</li>
            <li><b>Math/Statistics:</b> Linear Algebra, Calculus 3, Differential Equations, Intro to Stat Modeling, Proofs, Probability, 
            Data Visualization, Optimization, Regression Analysis, Statistical Learning, Experimental Design</li>
            <li><b>Other:</b> Biopsychology, Cognitive Neuroscience, Tech Ethics</li>
          </ul>
        </div>

      <br /><br />
      <h2>Awards</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Award</th>
            <th>Organization</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Latinx Student Leadership Summit Invitee</td>
            <td>Google</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>President&apos;s List </td>
            <td>Miami University</td>
            <td>Fall 2019, Spring 2020, Spring 2022</td>
          </tr>
          <tr>
            <td>Dean&apos;s List </td>
            <td>Miami University</td>
            <td>Fall 2020, Spring 2021, Spring 2023</td>
          </tr>
          <tr>
            <td>Computer Science Department Student of the Year</td>
            <td>Miami University</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Eagle Scout with Bronze Palm</td>
            <td>Scouts of America</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Order of the Arrow Invitee</td>
            <td>Scouts of America</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Stratysys Award</td>
            <td>FIRST Robotics</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Third Degree Black Belt</td>
            <td>American Taekwondo Association</td>
            <td>2016</td>
          </tr>
        </tbody>
      </table>

      <br /><br />
      <h2>Scholarships</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Scholarship</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lawrence J. Prince Scholarship</td>
            <td>2023</td>
            <td>Single</td>
          </tr>
          <tr>
            <td>Miami University Diversity Scholars Scholarship</td>
            <td>2023</td>
            <td>Single</td>
          </tr>
          <tr>
            <td>
              Hispanic Association of Colleges and Universities (HACU) Google
              Career Certificate Scholarship
            </td>
            <td>2022</td>
            <td>Single</td>
          </tr>
          <tr>
            <td>Accenture Scholarship</td>
            <td>2022</td>
            <td>Single</td>
          </tr>
          <tr>
            <td>Miami University Hope Scholarship</td>
            <td>2021</td>
            <td>Single</td>
          </tr>
          <tr>
            <td>Miami Summer Internship Award</td>
            <td>2020</td>
            <td>Single</td>
          </tr>
          <tr>
            <td>Computing and Engineering Undergraduate Scholar</td>
            <td>2019-2023</td>
            <td>Annual</td>
          </tr>
          <tr>
            <td>Redhawk Excellence Scholarship</td>
            <td>2019-2023</td>
            <td>Annual</td>
          </tr>
          <tr>
            <td>Bridges Scholar</td>
            <td>2019-2023</td>
            <td>Annual</td>
          </tr>
          <tr>
            <td>
              Louis Stokes Association for Minority Participation (LSAMP)
              Scholar
            </td>
            <td>2019-2023</td>
            <td>Annual</td>
          </tr>
          <tr>
            <td>Hispanic Scholarship Fund Scholarship</td>
            <td>2019-2021</td>
            <td>Annual</td>
          </tr>
          <tr>
            <td>DARE Scholarship</td>
            <td>2018</td>
            <td>Single</td>
          </tr>
        </tbody>
      </table>

      <br /><br />
      <h2>Presentations</h2>
      <p><b>Notable Presentations:</b>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Presentation Name</th>
                  <th>Venue</th>
                  <th>Date</th>
                  <th>Link (if available)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><i>CDC Adolescent Suicide Simulations Developer/Usage Presentations</i></td>
                  <td>Virtual Research Presentation to CDC Experts</td>
                  <td>May 12th, 2023</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>CDC Capstone Presentation: Adolescent Suicide Simulations</i></td>
                  <td>College of Engineering and Computing Senior Capstone Showcase 2023</td>
                  <td>May 4th, 2023</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>&quot;Decomposable Obfuscation: A Framework for Building Applications of 
                    Obfuscation from Polynomial Hardness&quot;</i></td>
                  <td>Graduate Student Guest Lecture to CSE 667: Cryptography</td>
                  <td>May 2nd, 2023</td>
                  <td><a target="_blank" href="https://docs.google.com/presentation/d/1ZQO5O2crlhtc-owCx7RM_BbRbpSOaNmcvDytpZO65w0/edit?usp=sharing">Link</a></td>
                </tr>
                <tr>
                  <td><i>WebAuth(entication) Tutorial</i></td>
                  <td>Graduate Student Guest Lecture to CSE 451/551: Web Services</td>
                  <td>April 24th, 2023</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>&quot;Quantum Machine Learning&quot;</i></td>
                  <td>Graduate Student Guest Lecture to CSE 470N/570N: Quantum Computing</td>
                  <td>April 20th, 2023</td>
                  <td><a target='_blank' href="https://docs.google.com/presentation/d/1LaYH00CFHzy7XrJVHkd3hgjBj9IugFEZR3HvceaPOrc/edit?usp=sharing">Link</a></td>
                </tr>
                <tr>
                  <td><i>Route-setting Workshop</i></td>
                  <td>Lecture/Workshop at the Midwest Outdoor Leadership Conference (MWOLC) 2023</td>
                  <td>Jan 15th, 2023</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>&quot;What Makes a Useful Model for Suicide: Comparing and Contrasting Network-based Models on Adolescent Suicide&quot;</i></td>
                  <td>14th Annual Miami University Graduate Research Forum</td>
                  <td>Nov 4th, 2022</td>
                  <td><a target='_blank' href="https://docs.google.com/presentation/d/1el1R5CiKj3WQYvQIefD8BRoQJwkBcpA0vSPPCO1PAow/edit?usp=sharing">Link</a></td>
                </tr>
                <tr>
                  <td><i>&quot;A Network Science Approach to Public Health&quot;</i></td>
                  <td>Computer Science Graduate Student Poster Presentation</td>
                  <td>April 28th, 2022</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>&quot;A Brief Introduction to Network Science and Public Health&quot;</i></td>
                  <td>Grant Proposal Presentation to Cardinal Health Executives</td>
                  <td>Mar 15th, 2022</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>&quot;Suicide Causal Mapping and the New CDC Expert-build Model&quot;</i></td>
                  <td>Virtual Research Presentation to CDC Experts</td>
                  <td>Nov 2nd, 2021</td>
                  <td><a target='_blank' href="https://drive.google.com/file/d/1b6HlIy0dGpdp-xYRKUpq3slm0CkiPU1c/view?usp=drive_link">Link</a></td>
                </tr>
                <tr>
                  <td><i>&quot;How do Social Bots Affect Information Diffusion on Twitter?&quot;</i></td>
                  <td>Research Presentation to CSE 620C: Network Science</td>
                  <td>Sept 30th, 2021</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>Bob Woodward Lecture Series Introduction</i></td>
                  <td>Miami University Lecture Series</td>
                  <td>Feb 12, 2021</td>
                </tr>
                <tr>
                  <td><i>Associated Student Government COVID-19 AD-Hoc Committee Recommendations</i></td>
                  <td>Presentation to Miami University Executive Board and Leadership</td>
                  <td>January 12th, 2021</td>
                  <td><a href="https://drive.google.com/file/d/1zJ8fihP5AyDOEryWJaepdv0yEWjRbB3q/view?usp=sharing" target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><i>&quot;Mind-reading and Machine Learning&quot;</i></td>
                  <td>Cognitive Neuroscience Lab Research Presentation to PSY 451/551: Cognitive Neuroscience</td>
                  <td>Nov 13th, 2020</td>
                  <td><a href="https://docs.google.com/presentation/d/1Ej2ZN3If5EmBFX8t4voTtbyC8qe9T5SYDTmbBhm4eVs/edit?usp=sharing" target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><i>&quot;Introduction to Computer Vision in Python&quot;</i></td>
                  <td>Virutal Internship Presentation to Discovery Labs Global Intern Class</td>
                  <td>Aug 14th, 2020</td>
                  <td></td>
                </tr>
                <tr>
                  <td><i>&quot;Using Voice Analysis to Detect Adult ADHD&quot;</i></td>
                  <td>Neurolex Labs Research Demo Day</td>
                  <td>Aug 7th, 2020</td>
                  <td><a href="https://docs.google.com/presentation/d/1rmJ4pt4esQoaGHJY__hOlNx4xx9Ugr1HTfMhAeb-9SI/edit?usp=sharing" target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><i>&quot;Why Servant Leadership Matters&quot;</i></td>
                  <td>National Honor Society Retreat</td>
                  <td>Sept 16th, 2018</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </p>

      <br /><br />
      <h2>Appearances</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Podcast Episodes</strong>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a href="https://miamioh.edu/news/podcasts/major-insight/2023/02/ep-51-dream-of-neural-networks.html">
                Daring to Dream of Neural Networks
              </a>
            </td>
            <td>Feb 1st, 2023</td>
          </tr>
          <tr>
            <td>
              <strong>Articles</strong>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a href="https://www.miamistudent.net/article/2021/02/covid-19-communications-part-2">
                &quot;Miami moves toward transparency with improved COVID-19 communication&quot;
              </a>
            </td>
            <td>Feb 17, 2021</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.miamistudent.net/article/2021/02/asg-passes-resolution-calling-for-creditno-credit-extension">
                &quot;ASG passes resolution calling for credit/no credit extension&quot;
              </a>
            </td>
            <td>Feb 2, 2021</td>
          </tr>
          <tr>
            <td>
              <a href="https://starstudiomn.org/the-clubhouse-12-23-20-kayli-and-friends/">
                Children&apos;s Hospital of Minnesota Music Performance
              </a>
            </td>
            <td>Dec 20, 2020</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.swnewsmedia.com/prior_lake_american/news/two-new-robotics-teams-build-momentum/article_13c5ae81-cd19-5858-87c3-eef5ba27f77c.html">
                &quot;Two new robotics teams build momentum&quot;
              </a>
            </td>
            <td>Dec 3, 2012</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AwardsPage;
