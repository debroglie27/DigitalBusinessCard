import LauraImage from "../assets/laura.png"
import MailIcon from "../assets/mail-icon.svg"
import LinkedInIcon from "../assets/linkedin-icon.svg"

const Info = () => {
  return (
    <div className="info-section">
        <img src={LauraImage} alt="Image of Laura" className="info--image" />
        <h1 className="info--name">Laura Smith</h1>
        <h3 className="info--role">Frontend Developer</h3>
        <p className="info--website">laurasmith.website</p>
        <div className="info--button-container">
            <button className="info--button info--button-mail">
                <img src={MailIcon} alt="Mail Icon" />
                <p className="info--button-mail-text">Email</p>
            </button>
            <button className="info--button info--button-linkedin">
                <img src={LinkedInIcon} alt="LinkedIn Icon" />
                <p className="info--button-linkedin-text">LinkedIn</p>
            </button>
        </div>
    </div>
  )
}
export default Info;