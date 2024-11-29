import { Col } from "react-bootstrap";


const ProjectCard = ({ title, description, imgUrl, live }) => {
  const handleCardClick = () => {
      window.open(live, "_blank");
    
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard