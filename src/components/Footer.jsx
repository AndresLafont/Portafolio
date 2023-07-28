import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {

    const fecha = new Date().getFullYear();
  return (
    <div className="footer">
        <div className="socialMedia">
        <Link to="https://www.linkedin.com/in/andrés-ruiz-orzáez-974659aa/"><LinkedInIcon/></Link>
        <Link to="mailto:andresruizorzaez@gmail.com"><MailIcon/></Link>
        </div>
        <p> &copy; {fecha} andresruizdev.com</p>
    </div>
  )
}

export default Footer;