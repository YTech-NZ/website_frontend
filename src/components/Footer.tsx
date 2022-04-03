import Section from '../widgets/Section'
import '../styles/footer.scss';
import LOGO_BLACK from "../assets/CreateOpsYTech.png";
import LINKEDIN from "../assets/linkedin.png";
import FACEBOOK from "../assets/facebook.png";
import INSTAGRAM from "../assets/instagram.png";
import EMAIL from "../assets/email.png";



function Footer() {
    return (
        <Section black>
            <div className="footer">
                <div className="footer__container">
                    <img src={LOGO_BLACK} alt="YTech NZ logo black"/>
                    <div className="footer__container__row">
                        <div className='linkedin'>
                            <a href='https://www.linkedin.com/company/ytechnz' target="_blank">
                                <img src={LINKEDIN} alt="LinkedIn logo"/>
                            </a>
                        </div>
                        <div className='facebook'>
                            <a href='https://www.facebook.com/ytechnz' target="_blank"> 
                                <img src={FACEBOOK} alt="Facebook logo"/>
                            </a>
                        </div>
                        <div className='instagram'>
                            <a href='https://www.instagram.com/ytechnz/' target="_blank"> 
                                <img src={INSTAGRAM} alt="Instagram logo"/>
                            </a>
                        </div>
                        <div className='email'>
                            <a href="mailto:ytech.committee@gmail.com">
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