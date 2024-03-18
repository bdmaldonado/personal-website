import Link from 'next/link';

const Header = () => {
  return (
    <header className="container bg-dark">
       <div className="bg-dark text-light py-4 row justify-content-start align-items-center">
          <div className="col-lg-auto">
            <Link legacyBehavior href="/" passHref>
              <a>Home</a>
            </Link>
            <Link legacyBehavior href="/experience" passHref>
              <a>Experience</a>
            </Link>
            <Link legacyBehavior href="/projects" passHref>
              <a>Projects</a>
            </Link>
          </div>
      </div>
    </header>
  );
}

export default Header;
