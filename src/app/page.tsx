const IndexPage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <div className="about">
          <h2>Why I might be of professional interest to you</h2>
          <p>
	     Hello! My name is Ben Maldonado, and I am a recent graduate from Miami University in Oxford, Ohio, where I studied Computer Science, Statistics/Data Science, 
	     and their applications to Public Health, Psychology, and Public Policy. I eventually in May 2023 with a B.S. in Computer Science and a minor in Statistics, graduating Magna Cum Laude and College Honors with Distinction (honors which few of my peers were able to obtain).
	     Soon after, in August 2023, I graduated with my Master`&apos;`s of Computer Science, also graduating Magna Cum Laude.  
	     With these degrees (and the experience that can be found in the Projects and Experience tabs!),
	     I hope to take on jobs with a data-oriented focus on public health, technology, and human rights. Please message me if you wish to connect.
          </p>
	  
	  <h2>A little about me...</h2>
	  <p>
	    If you truly wish to read more about my experience and curriculum vitae, please select the relevant tabs. But for now... allow me to introduce <i>you</i> to <i>me</i>!
	    Born and raised in Minnesota, I grew up in a very large family so I`&apos;`m a huge people person! I also love animals, and have an adorable cat named Billy D that I 
	    adopted this last year. I love to spend time with my friends, family, and cat doing a whole wide range of things.
	    <br />
	    Some of my favorite hobbies include hiking, camping, rock climbing (both indoor and outdoor), reading, watching movies, cooking, and playing games of all forms.
	  </p>

	  <h2>About this site</h2>
	  <p>
	     This site uses a few fun pieces of technology. First, it uses an EC2 instances with a Route53 name server for domain name resolution. Once
	     the client hits the website, Nginx is used to serve the user to a Next.js/React framework-based website. All of this is controlled by the 
	     GitHub repository linked in the footer. 
	  </p>
      </div>
    </div>
  );
};

export default IndexPage;
