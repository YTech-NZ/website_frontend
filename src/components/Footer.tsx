import Section from '../widgets/Section'
import '../styles/footer.scss';
import LOGO_BLACK from "../assets/CreateOpsYTech.png";
import LINKEDIN from "../assets/linkedin.png";
import FACEBOOK from "../assets/facebook.png";
import INSTAGRAM from "../assets/instagram.png";
import EMAIL from "../assets/email.png";



function Footer() {
    const LINKEDINURL = "https://www.linkedin.com/company/ytechnz";
    const FACEBOOKURL = "https://www.facebook.com/ytechnz";
    const INSTAGRAMURL = "https://www.instagram.com/ytechnz/";
    const EMAILMAILTO = "mailto:ytech.committee@gmail.com";

    return (
        <Section black>
            <div className="footer">
                <div className="footer__container">
                    <img src={LOGO_BLACK} alt="YTech NZ logo black"/>
                    <div className="footer__container__row">
                        <div>
                            <a href={LINKEDINURL} target="_blank">
                                <img src={LINKEDIN} alt="LinkedIn logo"/>
                            </a>
                        </div>
                        <div>
                            <a href={FACEBOOKURL} target="_blank"> 
                                <img src={FACEBOOK} alt="Facebook logo"/>
                            </a>
                        </div>
                        <div>
                            <a href={INSTAGRAMURL} target="_blank"> 
                                <img src={INSTAGRAM} alt="Instagram logo"/>
                            </a>
                        </div>
                        <div>
                            <a href={EMAILMAILTO}>
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