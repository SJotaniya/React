import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import homofy from "../assets/img/homofy.png";
import restaurant from "../assets/img/restaurant.png";
import fashion from "../assets/img/fashion.png";
import timezone from "../assets/img/timezone.png";
import dental from "../assets/img/dental.png";
import zomato from "../assets/img/zomato.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const project1 = [
    {
      title: "HOMOFY",
      description: "HTML & CSS",
      imgUrl: homofy,
      live: 'https://lucent-chimera-371d62.netlify.app/'
    },
    {
      title: "Reataurant",
      description: "HTML & CSS",
      imgUrl: restaurant,
      live: 'https://sage-rolypoly-c6db66.netlify.app/',
    },
    {
      title: "SHOPMAX",
      description: "HTML & CSS",
      imgUrl: fashion,
    },
  ];

  const project2 = [
    {
      title: "TimeZone",
      description: "Bootstrap",
      imgUrl: timezone,
      live: 'https://stirring-zabaione-8cffa1.netlify.app/',
    },
    {
      title: "Dental Clinic",
      description: "Bootstrap",
      imgUrl: dental,
      live: 'https://vocal-unicorn-1a56e6.netlify.app/',
    },
    {
      title: "Zomato",
      description: "Bootstrap",
      imgUrl: zomato,
      live: 'https://vocal-palmier-c03781.netlify.app/',
    },
  ];

  const project3 = [
    {
      title: "Business Startup",
      description: "JavaScript",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "JavaScript",
      imgUrl: projImg3,
    },
  ];
  
  const live1 = ()=>{
    window.open('https://sage-rolypoly-c6db66.netlify.app/')
  }
  return(
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
                <p>Explore my diverse range of projects showcasing expertise in front-end development. From responsive web designs built with HTML, CSS, and Bootstrap to dynamic and interactive applications powered by JavaScript, each project demonstrates a commitment to clean code and user-friendly design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" id="pills-tab" className='pills-tab mb-5 justify-content-center align-item-center'>
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTML & CSS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">BootStrap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">JavaScript</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            )
                          })
                        }
                      </Row>
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

export default Projects