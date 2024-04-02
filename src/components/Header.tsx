import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link legacyBehavior href="/" passHref>
                  <a className="navbar-brand">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/experience" passHref>
                  <a className="nav-link">Experience</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/projects" passHref>
                  <a className="nav-link">Projects</a>
                </Link>
              </li>
	      <li className="nav-item">
		<Link legacyBehavior href="/awards" passHref>
		  <a className="nav-link">Awards and Honors</a>
		</Link>
	      </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
 );
};

export default Header;
