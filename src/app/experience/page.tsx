"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const ExperiencePage = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const roles = document.querySelectorAll<HTMLElement>(".role");
    roles.forEach((role) => {
      const rect = role.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const distanceFromCenter = Math.abs((rect.top + (rect.height / 2)) - centerY);
      var scale = 1 - (distanceFromCenter / centerY) * 0.5;
      scale = scale > 0.75 ? scale : 0.75  /* Set it to .75 at the floor */
      role.style.transform = `scale(${scale})`;
    });
  };

  return (
    <div className="roles">
      <h2>Roles</h2>
      <div className="role">
        <h3>Software Engineer Intern at Amazon Web Services</h3>
        <p>May 2023 - Aug 2023 | New York, New York, United States</p>
        <p><b>Project:</b> Key Performance Indicator (KPI) Anomaly Observer</p>
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
        <h3>Lead Research Engineer at Miami University</h3>
        <p>May 2022 - May 2023 | Oxford, Ohio, United States</p>
        <p><b>Project:</b> CDC Adolescent Suicide Simulations Platform</p>
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
            <li>Conducted additional supporting research tasks, such as categorizing and aligning dataset variables
              from disparate sources, writing official research reports, and creating comprehensive user documentation.
            </li>
            <li><b>Skills:</b> PHP (Laravel), Python (Numpy, Matplotlib), Docker, Nginx, Redis, SQLite</li>
            <li><b>Publication in CDC Review:</b><br /> <i>&quot;An Artificial Intelligence Approach to 
              Support Youth Suicide Prevention Initiatives in the U.S.A&quot;</i><br />
              L. Liang, R. Schuerkamp, K. L. Rice, M. M. Brown, N. Nataraj, J. Mendoza-Alonzo, 
              C. R. Harper, C. Florence, <b>B. D. Maldonado</b>, B. Moran, P. J. Giabbanelli
              </li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Software Engineer Intern at Amazon Web Services</h3>
        <p>May 2022 - Aug 2022 | New York, New York, United States</p>
        <p><b>Project:</b> Deep Learning Model Serving and Load-Testing</p>
        <p>
          <ul>
            <li>Researched and tested machine learning model serving platforms.</li>
            <li>Rigorously verified that these platforms met the team&apos;s domain requirements of
                low-latency, high-throughput, and system stability.</li>
            <li>Designed parallel load testing system to test platforms under realistic load.</li>
            <li>Collected comparative metrics on various systems and delivered resulting metrics in a report to the team.</li>
            <li>Implemented the highest-performing platform, which has reduced load times between model retrainings by 7%.</li>
            <li><b>Skills:</b> Python, Typescript, AWS Sagemaker, S3, Lambda, Unit-testing, CI/CD</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Machine Learning Intern at Miami University</h3>
        <p>Jan 2022 - Mar 2022 | Oxford, Ohio, United States</p>
        <p><b>Project:</b> Center for Analytics and Data Science (CADS) Field Hockey Statistics</p>
        <p>
          <ul>
            <li>Collected and cleaned data about player movements, actions, and decisions for the Miami Women&apos;s Field Hockey Team.</li>
            <li>Delivered key insights from the data to the coaching staff of the team to help the players improve.</li>
            <li><b>Skills:</b> R, Data Collection, Data Cleaning, Data Engineering</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Lead Research Assistant at Miami University</h3>
        <p>Oct 2021 - Mar 2022 | Oxford, Ohio, United States</p>
        <p><b>Project:</b> CDC Adolescent Suicide Model Analysis and Comparison</p>
        <p>
          <ul>
            <li>Headed a team of student researchers to deliver results to key stakeholders at the Centers for Disease Control and Prevention.</li>
            <li>Facilitated communication as head researcher between research advisor, CDC experts, and student researchers.</li>
            <li>Analyzed several previous network-based models of adolescent suicide.</li>
            <li>Compared and contrasted key structural and contextual elements of these models with each other, such as node centrality,
              edge density, and node neighborhood size and similarity.
            </li>
            <li>Applied <a target="_blank" href="https://www.cdc.gov/suicide/prevention/index.html">existing CDC adolescent suicide prevention strategies</a> to the models 
              to demonstrate how the model can represent intervention.
            </li>
            <li><a target="_blank" href="https://drive.google.com/file/d/1b6HlIy0dGpdp-xYRKUpq3slm0CkiPU1c/view?usp=sharing">
              Presented results</a> of the research to experts from the CDC, and subsequently co-authored a report with them on the results.</li>
            <li><b>Skills: </b> Lead Research, Lead Research Communication/Presentation, Python (NetworkX), Graph Theory, Computer Networks, LaTeX</li>
            <li><b>Publication in Peer Review at the Cambridge Journal for Network Science:</b><br />
              <i>&quot;Guiding Prevention Initiatives by Applying Network Analysis to Causal Maps of Adverse Childhood Experiences and Adolescent Suicide&quot;</i><br />
              <b>B. D. Maldonado</b>, R. Schuerkamp, C. M. Martin, K. L. Rice, Nisha Nataraj, M. M. Brown, C. R. Harper, C. Florence, P. J. Giabbanelli
            </li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Software Engineer Intern at Amazon Web Services</h3>
        <p>May 2021 - Aug 2021 | Seattle, Washington, United States</p>
        <p><b>Project:</b> Centralized Alarm Management System</p>
        <p>
          <ul>
            <li>Designed generic alarm management system with the intent 
              to decrease redundant developer effort in manual alarm configuration updates.</li>
            <li>Worked in the context of a globally regionalized AWS product that optimized Amazon.com fulfillment 
              warehouse througput to ensure promised delivery dates to customers.
            </li>
            <li>Developed and tested  system which used a central AWS DynamoDB database to maintain 
              on-call alarm configurations and AWS Lambda to send alarm configuration updates to all fulfillment centers globally.
            </li>
            <li>Lead design discussions with team leadership on the pros and cons of the prototype, using
              data from the tests to help the team decide whether the approach met the team&apos;s needs.
            </li>
            <li><b>Skills:</b> Typescript, Java, Java Unit Testing, Java Dependency Injection, AWS DynamoDB, Lambda</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Research Assistant at Miami University</h3>
        <p>Jan 2020 - Dec 2021 | Oxford, Ohio, United States</p>
        <p><b>Project:</b> Cognitive Neuroscience and Vision Electroencephalography (EEG) Correlations</p>
        <p>
          <ul>
            <li>Conducted research with EEG brainwave data from five Air Force research subjects.</li>
            <li>Trained machine learning models to predict which version of a <a target="_blank" href="https://cdn.sinauer.com/wolfe4e/wa03.03.html">Gabor patch</a> a 
            subject saw using only their brain activity with an 85.6% accuracy. </li>
            <li>Analyzed data underlying model using factorial experiments to determine which data signals resulted in a model.
            </li>
            <li>Performed confirmatory experiment to verify whether favored hand dominance affected any of the data, 
              as other recent data suggested this could be a confounding factor.
            </li>
            <li>Presented findings that the <a target="_blank" href="https://en.wikipedia.org/wiki/N200_(neuroscience)">N200</a> peak 
            amplitude was responsible for 96.3% of the results, regardless of handedness (consistent with prior research).</li>
            <li><b>Skills: </b>Machine Learning, Statistical Modeling, EEG, Cognitive Neuroscience, Research, Signal Analysis, Fourier Transforms, Jupyter Notebooks</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Machine Learning Intern at Neurolex Labs</h3>
        <p>Feb 2020 - Sept 2020 | Virtual</p>
        <p><b>Project:</b> Machine Learning Models for ADHD Detection</p>
        <p>
          <ul>
            <li>Compiled, cleaned, and balanced patient vocal data from proprietary dataset.</li>
            <li>Analyzed trends in data to find possible signals for ADHD diagnosis.</li>
            <li>Trained several rounds of models to detect ADHD in sample data, applying
               industry standard practices such as parameter optimization where appropriate.
            </li>
            <li>Presented research findings that there was no statistically significant signal in the data, proposing
              where the experimental error came from and how a future experiment might extract the signal better.
            </li>
            <li><b>Skills:</b> Machine Learning, Python (PyTorch, Pandas, Numpy, SciKit-Learn), Research, Research Presentation, Statistical Modeling</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Artificial Intelligence Intern at Discovery Lab Global</h3>
        <p>Jan 2020 - Sept 2020 | Virtual</p>
        <p><b>Project:</b> Self-Driving Cars with Computer Vision</p>
        <p>
          <ul>
            <li>Researched existing body of information around reinforcement and deep learning.</li>
            <li>Completed course in Computer Vision in Python to understand and apply concepts to a physical car</li>
            <li>Constructed a small electronic car utilizing the NVIDIA Jetson Nano Developer Kit.</li>
            <li>Applied concepts of deep learning and computer vision to teach the car to drive and avoid obstacles.</li>
            <li>Demonstrated results and research findings in an end-of-internship presentation to the rest of my team.</li>
            <li><b>Skills:</b> Deep Learning, Reinforcmeent Learning, Computer Vision, Python (PyTorch, OpenCV), NVIDIA Jetson Nano</li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Research Assistant at Miami University</h3>
        <p>Mar 2020 - May 2020 | Oxford, Ohio, United States</p>
        <p><b>Project:</b> Computer Vision for Shortcutting HIV Simulations</p>
        <p>
          <ul>
            <li>Conducted research into shortcutting large and costly HIV simulations.
            </li>
            <li>
              Improved and optimized existing cellular automata (CA)-based models of HIV to run more 
              efficiently at a vastly increased simulation size.
            </li>
            <li>Utilized pre-trained image machine learning models to extract visual features from the simulation 
              models at various timesteps.
            </li>
            <li>Trained machine learning models to intake simulation model start case and use extracted visual
              features to predict the simulation end case.
            </li>
            <li>Ran this experiment with various simulations for HIV which included a number of effects on the HIV outcome
               such as drug introduction, drug interaction, and drug adhereance.
            </li>
            <li>Communicated research findings in a final report.</li>
            <li><b>Skills: </b>Research, Machine Learning, Simulations, Python (Numpy, Cython, SciKit-Learn, SciKit-Image), High Perfomance Computing (HPC) Cluster</li>
            <li><b>Unpublished Paper:</b><br />
            <a href="/assets/predicting-viral-loads-paper.pdf" download><i>&quot;Predicting HIV Viral Body Load through Image Analysis&quot;</i></a><br />
            J. Li, <b>B. D. Maldonado</b>, G. Skidmore, Z. Xu, D. Calovini
            </li>
          </ul>
        </p>
      </div>
      <div className="role">
        <h3>Research Assistant at Miami University</h3>
        <p>Sept 2019 - Dec 2019 | Oxford, Ohio, United States</p>
        <p><b>Project:</b> Motion Sickness Prevention</p>
        <p>
          <ul>
            <li>Implemented research codes from pseudocode into Java.</li>
            <li>Learned basics of lab research and operation.</li>
            <li><b>Skills:</b> Research, Pseudocode Translation, Java</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ExperiencePage;
