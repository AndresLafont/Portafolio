import '../styles/Experience.css';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experiencia() {
  return <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement className="vertical-timeline-element--education" 
      date="2009 - 2013"
      iconStyle={{background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon/>} >
        <h3 className="vertical-timeline-element-title">
          Audiovisual Communication
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Murcia
        </h4>
        <p>During my years of study, I learned how to handle cameras and video editing software, as well as developed skills for working effectively in a team.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--work" 
      date="2013 - 2014"
      iconStyle={{background: "#e9d35b", color: "#fff"}}
      icon={<WorkIcon/>} >
        <h3 className="vertical-timeline-element-title">
          Camera and video editor
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Cartagena
      </h4>
      <p>My first work experience was at the communication department of the University of Cartagena. Here, I learned to work as part of a team and in a flexible and continous workflow.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--work" 
      date="2014 - 2020"
      iconStyle={{background: "#e9d35b", color: "#fff"}}
      icon={<WorkIcon/>} >
        <h3 className="vertical-timeline-element-title">
          SEO Writer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Websites such as Dexerto, Esportmaniacos, Softonic...
        </h4>
        <p>During this period, I learned about SEO, often having to use HTML to optimize the content.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--work" 
      date="2021 - 2022"
      iconStyle={{background: "#e9d35b", color: "#fff"}}
      icon={<WorkIcon/>} >
        <h3 className="vertical-timeline-element-title">
          SEO Editor and Coordinator
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          3DJuegos
        </h4>
        <p>In addition to my duties as an editor, I also managed a team of 4 people, conducting daily and weekly meetings to assess objectives and the project's progress.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--work" 
      date="2021 - 2023"
      iconStyle={{background: "#e9d35b", color: "#fff"}}
      icon={<WorkIcon/>} >
        <h3 className="vertical-timeline-element-title">
          Editor in chief and Webmaster
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Voltio
        </h4>
        <p>Alongside a colleague, I built a website from scratch using a WordPress template. Besides creating it, I also performed maintenance tasks until the project was completed.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education" 
      date="2023"
      iconStyle={{background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon/>} >
        <h3 className="vertical-timeline-element-title">
          Pixelpro
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Online Bootcamp
        </h4>
        <p>After many years of using CSS and HTML as a user, I decided to take it a step further and learn Javascript and React to acquire the necessary skills to become a Front-end developer.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
}

export default Experiencia;
