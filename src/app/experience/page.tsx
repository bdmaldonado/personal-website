"use client";
import React, { useEffect } from "react";

const ExperiencePage = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const roles = document.querySelectorAll(".role");
    roles.forEach((role) => {
      const rect = role.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const distanceFromCenter = Math.abs((rect.top + (rect.height / 2)) - centerY);
      const scale = 1 - (distanceFromCenter / centerY) * 0.25;
      role.style.transform = `scale(${scale})`;
    });
  };

  return (
    <div className="roles">
      <h2>Roles</h2>
      <div className="role">
        <h3>Software Engineer Intern at Amazon</h3>
        <p>May 2023 - Aug 2023 | New York, New York, United States</p>
        <p>
          <ul>
            <li>Developed high-visibility AWS application to fix product reliability problems.</li>
            <li>Worked within a low-latency and high-throughput anomaly detection system with
          dozens of deep learning models that are retrained daily on customer data.</li>
            <li>Implemented system which applies statistical methods to detect false positive
                anomaly findings caused by malformatted input data.</li>
            <li>Reduced security engineer debugging phase by several hours and reduced 
          number of incoming customer complaints about false positive scenarios.</li>
            <li><b>Skills:</b> Apache Spark, AWS Glue, DynamboDb, S3, Lambda, Java/Scala, Typescript</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Software Engineer Intern at Amazon.com</h3>
        <p>May 2022 - Aug 2022 | New York, New York, United States</p>
        <p>
          <ul>
            <li>Researched and tested machine learning model serving platforms.</li>
            <li>Rigorously verified that these platforms met the team&apos;s domain requirements of
                low-latency, high-throughput, and system stability.</li>
            <li>Designed parallel load testing system to test platforms under realistic load.</li>
            <li>Collected comparative metrics on various systems and delivered resulting metrics in a report to the team.</li>
            <li>Implemented the highest-performing platform, which has reduced load times between model retrainings by 7%.</li>
            <li><b>Skills:</b> Python Typescript, AWS Sagemaker, S3, Lambda, Unit-testing, CI/CD</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Software Engineer Intern at Amazon.com</h3>
        <p>May 2021 - Aug 2021 | Seattle, Washington, United States</p>
        <p>
          Design and build a generic alarm system using AWS services such as
          Lambda and DyanmoDB to ensure that fulfillment services that guarantee
          promised delivery dates for customer packages are performing at
          optimal levels
        </p>
      </div>
      <div className="role">
        <h3>Research Engineer at Miami University</h3>
        <p>May 2022 - May 2023 | Oxford, Ohio, United States</p>
        <p>
          <ul>
            <li>Co-developed adolescent suicide simulation model alongside experts from the
              Centers for Disease Control and Prevention (CDC)</li>
            <li>Implemented Python-based simulation model which coincided with the most
              recent research into adolescent suicide.</li>
            <li>Applied machine learning principles to optimize the model parameters based on
              the most updated suicide/attempt/ideation statistics.</li>
            <li>Designed a PHP-Laravel based web architecture to deliver the simulation model
              to the CDC experts, with key features such as a SQLite database, parallel
              simulation execution with Redis, and Docker containerization.</li>
            <li>Delivered model and platform to CDC with their approval of all features.</li>
            <li><b>Skills:</b> PHP (Laravel), Python (Numpy, Matplotlib), Docker, Nginx, Redis, SQLite</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Innovation Fellow/Machine Learning Intern at Neurolex Labs</h3>
        <p>Feb 2020 - Sept 2020 | Virtual</p>
        <p>
          As an Innovation Fellow, I am working as part of a global community
          striving to market a universal voice test for us in primary care. This
          voice test would assist and expedite the processes in early diagnosis
          and referral to specialists. Specifically, I am working on a project
          to use this vocal analysis to diagnose individuals with ADHD, a task
          which would save millions of dollars and thousands of hours used to
          provide diagnosis in the current healthcare system.
        </p>
      </div>
      <div className="role">
        <h3>Artificial Intelligence Intern at Discovery Labs Global</h3>
        <p>Jan 2020 - Sept 2020 | Virtual</p>
        <p>
          Constructed a remote-controlled car that could recognize and navigate
          its environment using contemporary Computer Vision techniques
        </p>
      </div>
      <br />
      <br />
      <h3>
        More info coming soon! Please check out my LinkedIn for a more
        up-to-date list. (Link is in the footer).
      </h3>
    </div>
  );
};

export default ExperiencePage;
