import { Link } from "react-scroll";
import { FaChevronCircleUp } from "react-icons/fa";

function Contact ({ theme }){
  const newTheme = `${theme} d-flex flex-column justify-content-center`;

  return (
    <section id="contact" className={newTheme}>
      <div className="container text-center">
        <h2>Contact Info</h2>
        <div className="row align-items-center">
          <div className="col-md-6">Email: <span>dorozco2390@utexas.edu</span></div>
          <div className="col-md-6">Phone: <span>512.905.3493</span></div>
        </div>
        <br></br>
        <div className="row align-items-center">
          <div className="col-md-4"><a href="https://www.linkedin.com/in/dora-orozco-3332771b/" target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div className="col-md-4"><a href="https://github.com/Dora-O" target="_blank" rel="noreferrer">GitHub</a></div>
          <div className="col-md-4"><a href="../../assets/Resume.pdf" download="../../assets/Resume.pdf">Resume</a></div>
        </div>
        <div>
          <Link className="scroll" to="about" smooth={true} duration={750}>
            <FaChevronCircleUp id="scroll-up" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
