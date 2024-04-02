import React from 'react';
import Link from 'next/link';

const AwardsPage = () => {
  return (
    <div>
      <h1>Awards, Achievements, and Appearances</h1>
      <h2>Education</h2>
      <ul>
	<li>Bachelor of Science in Computer Science, Magna Cum Laude, College Honors with Distinction - <i>Miami University, May 2023</i></li>
	<li>Master of Computer Science - <i>Miami University, August 2023</i></li>
      </ul>
      <h2>Awards</h2>
      <ul>
        <li>President&apos;s List (Fall 2019, Spring 2020, Spring 2022)</li>
        <li>Dean&apos;s List (Fall 2020, Spring 2021, Spring 2023)</li>
        <li>Computer Science Department Student of the Year (2020)</li>
        <li>Google Latinx Student Leadership Summit Invitee (2022)</li>
        <li>FIRST Tech Challenge State Tournament Attendee (2017)</li>
        <li>Stratysys Award (2017)</li>
        <li>Eagle Scout with Bronze Palm (2018)</li>
        <li>Third Degree Black Belt for American Taekwondo Association (2016)</li>
      </ul>

      <h2>Scholarships</h2>
      <ul>
        <li>Computing and Engineering Undergraduate Scholar: $2,000 / year</li>
        <li>Redhawk Excellence Scholarship: $36,000 / year</li>
        <li>Bridges Scholar: $6,000 / year</li>
        <li>Louis Stokes Association for Minority Participation (LSAMP) Scholar: $600 / year</li>
        <li>Miami Summer Internship Award (2020): $1500</li>
        <li>Accenture Scholarship (2022): $1600</li>
        <li>Lawrence J. Prince Scholarship (2023): $1400</li>
        <li>Miami University Hope Scholarship (2021): $815</li>
        <li>Hispanic Scholarship Fund Scholarship (2019, 2020, 2021): $500</li>
        <li>Miami University Diversity Scholars Scholarship (2023): $500</li>
	<li>DARE Scholarship (2018): $1000</li>
	<li>Hispanic Association of Colleges and Universities (HACU) Google Career Certificate Scholarship</li>
      </ul>

      <h2>Appearances</h2>
      <ul>
        <li>Podcast Episodes</li>
        <ul>
          <li><Link legacyBehavior href="https://miamioh.edu/news/podcasts/major-insight/2023/02/ep-51-dream-of-neural-networks.html"><a>Daring to Dream of Neural Networks</a></Link></li>
        </ul>
        <li>Articles</li>
        <ul>
          <li><Link legacyBehavior href="https://www.miamistudent.net/article/2021/02/covid-19-communications-part-2">&quot;Miami moves toward transparency with improved COVID-19 communication&quot;</Link> - February 17, 2021</li>
          <li><Link legacyBehavior href="https://www.miamistudent.net/article/2021/02/asg-passes-resolution-calling-for-creditno-credit-extension">&quot;ASG passes resolution calling for credit/no credit extension&quot;</Link> - February 2, 2021</li>
          <li><Link legacyBehavior href="https://www.swnewsmedia.com/prior_lake_american/news/education/prior-lake-high-school-students-accept-the-tension-at-new-controversy-club/article_6ec620df-5eaa-529e-9170-8e17e86af8e2.html">&quot;Prior Lake High School students &apos;accept the tension&apos; at new controversy club&quot;</Link> - Mar 5, 2019</li>
          <li><Link legacyBehavior href="https://www.swnewsmedia.com/prior_lake_american/news/two-new-robotics-teams-build-momentum/article_13c5ae81-cd19-5858-87c3-eef5ba27f77c.html">&quot;Two new robotics teams build momentum&quot;</Link> - Dec 3, 2012</li>
          <li><Link legacyBehavior href="https://starstudiomn.org/the-clubhouse-12-23-20-kayli-and-friends/">Children’s Hospital of Minnesota Music Performance</Link> - Dec 20, 2020</li>
        </ul>
      </ul>
    </div>
  );
};

export default AwardsPage;
