import '../styles/Project.css';
import ProjectItem from "../components/ProjectItem";
import { projectList } from '../helpers/ProjectList'



function Proyectos() {
  return <div className="projects" data-aos='fade-down' data-aos-duration="500">
    <h1>My personal projects</h1>
    <div className="projectList">
      {projectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
    </div>
  </div>
}

export default Proyectos;
