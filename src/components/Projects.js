import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projeto1.png";
import projImg2 from "../assets/img/projeto2.png";
import projImg3 from "../assets/img/projeto3.png";
import projImg4 from "../assets/img/projeto4.png";
import projImg5 from "../assets/img/projeto5.png";
import projImg6 from "../assets/img/projeto6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Paixão das Mulheres Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Real-time device clock Web",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "3D Modeling",
      description: "Blender",
      imgUrl: projImg3,
    },
    {
      title: "Real Time Camera in Web",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Pacman Game With Tracking AI",
      description: "Artificial Intelligence",
      imgUrl: projImg5,
    },
    {
      title: "Mindel-Driving",
      description: "Android Studio",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>🛠Projects🛠</h2>
                <p>Here are some of the projects I’ve developed throughout my journey as a programmer. Each one represents a challenge overcome and a learning opportunity, using different languages, tools, and frameworks.
                   Feel free to explore!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>👋 About Me
                         Hello! My name is Dénis Morais. I’m a web developer with a passion for technology and creativity. I have experience with JavaScript, React, Node.js, among other technologies, and I enjoy turning ideas into functional and intuitive applications.
                         I’m always looking for new challenges, continuously learning, and growing as a professional. My focus is on building efficient solutions with clean and well-structured code.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>👋 About Me
                         Hello! My name is Dénis Morais. I’m a web developer with a passion for technology and creativity. I have experience with JavaScript, React, Node.js, among other technologies, and I enjoy turning ideas into functional and intuitive applications.
                         I’m always looking for new challenges, continuously learning, and growing as a professional. My focus is on building efficient solutions with clean and well-structured code.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
