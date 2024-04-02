import React from 'react';
import Link from 'next/link';

const AwardsPage = () => {
  return (
    <div>
      <h1>Awards, Achievements, and Appearances</h1>
      <h2>Education</h2>
      <ul>
        <li>
          Bachelor of Science in Computer Science, Magna Cum Laude, College
          Honors with Distinction - <i>Miami University, May 2023</i>
        </li>
        <li>
          Master of Computer Science - <i>Miami University, August 2023</i>
        </li>
      </ul>

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
