import {useParams} from "react-router-dom";
import {projectList} from '../helpers/ProjectList';
import GithubIcon from "@mui/icons-material/GitHub";
import '../styles/ProjectDisplay.css';


function ProyectoDisplay() {
    const {id} = useParams();
    const project = projectList[id];
  return <div className="project" data-aos='zoom-in-down' data-aos-duration="500">
    <h1>{project.name}</h1>
    <img src={project.image} alt="" />
    <p>
        <b>Skills:</b> {project.skills}
    </p>
    <GithubIcon/>
  </div>
}

export default ProyectoDisplay;