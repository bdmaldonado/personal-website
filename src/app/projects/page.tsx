import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Below is a list of projects which <i>can be shown</i> (are not bound by non-disclosure agreements). If you wish to see the full list of my experience, please check the <Link legacyBehavior href="/experience"><a>experience</a></Link> page!</p>
      <h2>Machine Learning/Statistics Projects</h2>
      <ul>
        <li><Link legacyBehavior href="/projects/eeg-correlates"><a>EEG Correlates Machine Learning Project</a></Link></li>
        <li><Link legacyBehavior href="/projects/covid-static-dashboard"><a>COVID Static Dashboard in R</a></Link></li>
        <li><Link legacyBehavior href="/projects/covid-dynamic-dashboard"><a>COVID Dynamic Dashboard in R Shiny</a></Link></li>
        <li><Link legacyBehavior href="/projects/hiv-viral-load"><a>HIV Viral Load Machine Learning Project</a></Link></li>
        <li><Link legacyBehavior href="/projects/paper-airplanes"><a>Paper Airplanes Experimental Design Project</a></Link></li>
        <li><Link legacyBehavior href="/projects/rootkits"><a>Rootkits Presentation</a></Link></li>
        <li><Link legacyBehavior href="/projects/fifa-analysis"><a>FIFA Player Analysis</a></Link></li>
        <li><Link legacyBehavior href="/projects/lol-analysis"><a>League of Legends Games Analysis</a></Link></li>
      </ul>
      <h2>Software Projects</h2>
      <ul>
	<li><Link legacyBehavior href="/projects/beta-breakers"><a>Beta Breakers Mobile App</a></Link></li>
	<li><Link legacyBehavior href="/projects/bootstrap"><a>JS Bootstrap Demonstration</a></Link></li>
	<li><Link legacyBehavior href="/projects/chess"><a>Chess App</a></Link></li>
        <li><Link legacyBehavior href="/projects/laravel-web-service"><a>Laravel Web Service</a></Link></li>
      </ul>
      <h2>Research Projects</h2>
      <ul>
	<li><Link legacyBehavior href="/projects/category-specific-deficits"><a>Category-Specific Deficits in Cognitive Neuroscience</a></Link></li>
        <li><Link legacyBehavior href="/projects/cognition-decisions"><a>Cognition Behind Decisions</a></Link></li>
       <li><Link legacyBehavior href="/projects/autonomous-systems"><a>Modeling Autonomous Systems with Differential Equations</a></Link></li>
   
     </ul>
  </div>
  );
};

export default ProjectsPage;
