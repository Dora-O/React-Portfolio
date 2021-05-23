import { Link } from "react-scroll";
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "./Header";


// Image
import logo from "../images/IMG_4061.JPG";

function About ({ theme, setTheme }) {
    const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

    return (
        <header id="about" className={newTheme}>
            <NavBar theme={theme} setTheme={setTheme} />
            <div className="container text-center">
                <img
                    className="logo spin img-fluid"
                    src={logo}
                    alt="React Logo"
                    height="25%"
                    width="25%"
                />
                <h1>Dora Orozco</h1>
                <hr />
                <p>I was born in Houston, Texas and moved to Austin, Texas in August of 2008 to attend The
                University of Texas.
                I graduated in May of 2012 with a Bachelor of Arts in Spanish and a minor in Mathematics.
                </p>
                <br></br>
                <p>
                    I currently work for Apple as an AppleCare Senior Advisor and
                    have
                    experience with troubleshooting iOS, watchOS, macOS and iPadOS, as well as the hardware of it. I
                    have a
                    passion for helping people and love finding solutions for complex issues.
                </p>
                <br></br>
                <p>
                    I am currently enrolled in the UT Austin BootCamp for Full Stack-Flex
                    Development and would love to be in a role where I can utilize all my skill sets.
                </p>
                <Link className="scroll" to="skills" smooth={true} duration={750}>
                    <FaChevronCircleDown id="scroll-down" />
                </Link>
            </div>
        </header>
    );
};

export default About;