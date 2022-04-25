import "../styles/contact.scss";
import Section from '../widgets/Section'

function Contact() {
    return (
        <Section>
            <div className="contact">
                <div className="contact__container"></div>
                    <h1>Get in Touch!</h1></div>
                    <div className="contact__container__row">
                        <form action ="get_in_touch_page.php">
                        <div className='form_row'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your name here.."></input>
                        </div>

                        <div className='form_row'>
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact" placeholder="youremail@address.com"></input>
                        </div>
                
                        <div className='form_row'>
                            <label htmlFor="topic">Topic</label> {/*or subject here?*/}
                            <input type="text" id="topic" placeholder="..."></input>
                        </div>

                        <div className='form_row_message'>
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message" placeholder="Let's chat :)"></input>
                        </div>
                        </form>
                    </div>
        </Section>
    )
}

export default Contact