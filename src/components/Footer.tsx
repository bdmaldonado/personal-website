import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-auto">
            <a target="_blank" href="https://github.com/bdmaldonado/" className="text-light me-3"><FaGithub /></a>  
            <a target="_blank" href="https://www.linkedin.com/in/bdmaldonado/" className="text-light me-3"><FaLinkedin /></a>
            <a target="_blank" href="mailto:benjamindmaldonado@gmail.com" className="text-light"><MdEmail /></a>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-lg-auto">
            <p className="m-0">&copy; {new Date().getFullYear()} Ben Maldonado</p>
          </div>
        </div>
      </div>
    </footer>
);
}

export default Footer;
