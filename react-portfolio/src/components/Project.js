import { CardColumns, Card } from "react-bootstrap";

import Code_Quiz from "../images/code-quiz.png";
import Password_Generator from "../images/password-generator.png";
import Avengers_Unite from "../images/avengers-unite.png";
import Workout_Tracker from "../images/workout-tracker.png";
import Premiere_Show from "../images/premiere-show.png";
import Employee_Directory from "../images/employee-directory.png";

function Project({ theme }) {
 
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center align-items-center text-center`;

  return (
    <section id="projects" className={newTheme}>
      <div className="container">
        <h2>Projects</h2>
        <hr />
        <CardColumns>
              <Card >
                <Card.Body>
                  <a href="https://dora-o.github.io/Code_Quiz/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      Code Quiz
                    </Card.Title>
                  </a>
                  <Card.Img variant="top" src={Code_Quiz} />
                </Card.Body>
                <a href="https://github.com/Dora-O/Code_Quiz" target="_blank" rel="noreferrer">Code Quiz Repo</a>
              </Card>
              <Card >
                <Card.Body>
                  <a href="https://dora-o.github.io/PasswordGenerator/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      Password Generator
                    </Card.Title>
                  </a>
                  <Card.Img variant="top"src={Password_Generator}/>
                </Card.Body>
                <a href="https://github.com/Dora-O/PasswordGenerator" target="_blank" rel="noreferrer">Password Generator Repo</a>
              </Card>
              <Card >
                <Card.Body>
                  <a href="https://manuelg139.github.io/Project_1/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      Avengers Unite
                    </Card.Title>
                  </a>
                  <Card.Img variant="top" src={Avengers_Unite}/>
                </Card.Body>
                <a href="https://github.com/manuelg139/Project_1" target="_blank" rel="noreferrer">Avengers Unite Repo</a>
              </Card>
              <Card >
                <Card.Body>
                  <a href="https://enigmatic-dawn-65751.herokuapp.com/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      Workout-Tracker
                    </Card.Title>
                  </a>
                  <Card.Img variant="top" src={Workout_Tracker} />
                </Card.Body>
                <a href="https://github.com/Dora-O/Workout-Tracker" target="_blank" rel="noreferrer">Workout-Tracker Repo</a>
              </Card>
              <Card >
                <Card.Body>
                  <a href="https://hidden-reaches-62484.herokuapp.com/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      Premiere Show
                    </Card.Title>
                  </a>
                  <Card.Img variant="top" src={Premiere_Show}/>
                </Card.Body>
                <a href="https://github.com/Dora-O/Project-2" target="_blank" rel="noreferrer">Premiere Show Repo</a>
              </Card>
              <Card >
                <Card.Body>
                  <a href="https://dora-o.github.io/Employee-Directory/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      Employee Directory
                    </Card.Title>
                  </a>
                  <Card.Img variant="top" src={Employee_Directory} />
                </Card.Body>
                <a href="https://github.com/Dora-O/Employee-Directory" target="_blank" rel="noreferrer">Employee Directory Repo</a>
              </Card>
            
          
        </CardColumns>
      </div>
    </section>
  );
};

export default Project;
