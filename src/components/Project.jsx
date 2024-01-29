import "./Project.css"

const Project = ({projectName="Test Project"}) => {
  return (
    <div className="rounded-container">
      <img src="/projects/intellimailr/intellimailr.png" />
      <h2>{projectName}</h2>
    </div>
  );
};

export default Project;