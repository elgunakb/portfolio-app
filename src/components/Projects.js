import React from 'react';
import projImg1 from '../assets/img/pz1.jpg';
import projImg2 from '../assets/img/pz2.jpg';
import projImg3 from '../assets/img/pz3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Baron Bros',
      description: 'Home page',
      imgUrl: projImg1,
    },
    {
      title: 'Baron Bros',
      description: 'Filter page',
      imgUrl: projImg2,
    },
    {
      title: 'Baron Bros',
      description: 'Shop page',
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? 'animate__animated animate__fadeIn' : ''
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      My first project, located in Tab 1, was a web project for
                      a pizza delivery site. The home page features a dynamic
                      carousel. Below that, there's a food menu that can be
                      filtered according to preferences. At the end, there's a
                      basket that shows what we have selected. I prepared the
                      project using React JS
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        {/* <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item> */}
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? 'animate__animated animate__slideInUp'
                            : ''
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </section>
  );
};

export default Projects;
