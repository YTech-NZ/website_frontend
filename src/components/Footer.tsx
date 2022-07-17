import Section from '../widgets/Section'
import '../styles/footer.scss';
import LOGO_BLACK from "../assets/CreateOpsYTech.png";
import LINKEDIN from "../assets/linkedin.png";
import FACEBOOK from "../assets/facebook.png";
import INSTAGRAM from "../assets/instagram.png";
import EMAIL from "../assets/email.png";
import Properties from '../data/Properties';



function Footer() {
    return (
        <Section black>
            <div className="footer">
                <div className="footer__container">
                    <img src={LOGO_BLACK} alt="YTech NZ logo black"/>
                    <div className="footer__container__row">
                        <div>
                            <a href={Properties.linkedinURL} target="_blank" rel="noreferrer">
                                <img src={LINKEDIN} alt="LinkedIn logo"/>
                            </a>
                        </div>
                        <div>
                            <a href={Properties.facebookURL} target="_blank" rel="noreferrer"> 
                                <img src={FACEBOOK} alt="Facebook logo"/>
                            </a>
                        </div>
                        <div>
                            <a href={Properties.instagramURL} target="_blank" rel="noreferrer"> 
                                <img src={INSTAGRAM} alt="Instagram logo"/>
                            </a>
                        </div>
                        <div>
                            <a href={'mailto:'+ Properties.emailYTech}>
                                <img src={EMAIL} alt="Email logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Footer