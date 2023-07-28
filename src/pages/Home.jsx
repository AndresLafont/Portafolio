import '../styles/Home.css'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GithubIcon from "@mui/icons-material/GitHub";
import { Link } from 'react-router-dom';

function Home() {
  return <div className="home">
    <div className="about" data-aos='fade-down' data-aos-duration="500">
      <h2>Hi, I'm Andrés</h2>
      <div className="prompt container">
        <p className='typewriter'>Front-end Developer</p>
        <Link to="https://www.linkedin.com/in/andrés-ruiz-orzáez-974659aa/"><LinkedInIcon/></Link>
        <GithubIcon/>
      </div>
    </div>
    <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>ReactJS, HTML, CSS, NPM, Javascript, Sass, Cypress, Git, GitHub</span>
        </li>
        <li className="item">
          <h2>Soft-Skills</h2>
          <span>Team work, Problem solving, Fast learner, Flexibility, Writen and oral communication </span>
        </li>
        <li className="item">
          <h2>Software</h2>
          <span>Visual Studio Code, Adobe Photoshop, Adobe Premiere, Jira, </span>
        </li>
      </ol>
    </div>
  </div>
}

export default Home;
