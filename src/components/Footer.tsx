import Section from '../widgets/Section'
import '../styles/footer.scss';
import LOGO_BLACK from "../assets/logo_black.jpg";

function Footer() {
    return (
        <Section black>
            <div className="footer">
                <div className="footer__container">
                    <img src={LOGO_BLACK}/>
                    <div className="footer__container__list">
                        <li>Social Media Links</li>
                        <li>Sponsors</li>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Footer