import TwitterIcon from "../assets/twitter-icon.svg"
import FacebookIcon from "../assets/facebook-icon.svg"
import InstagramIcon from "../assets/instagram-icon.svg"
import GitHubIcon from "../assets/github-icon.svg"

const Footer = () => {
  return (
    <div className="footer-section">
        <img src={TwitterIcon} alt="Twitter Icon" />
        <img src={FacebookIcon} alt="Facebook Icon" />
        <img src={InstagramIcon} alt="Instagram Icon" />
        <img src={GitHubIcon} alt="GitHub Icon" />
    </div>
  )
}
  export default Footer;