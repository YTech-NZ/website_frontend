import "../styles/contact_box.scss";
import Section from '../widgets/Section'

function Contact() {
    return (
        <Section>
                <h1>Get in Touch!</h1>
                <form action ="get_in_touch_page.php">   
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name here.."></input>
                    </div>

                    <div>
                        <label htmlFor="contact">Contact</label>
                        <input type="text" id="contact" placeholder="youremail@address.com"></input>
                    </div>
                    
                    <div>
                        <label htmlFor="topic">Topic</label> {/*or subject here?*/}
                        <input type="text" id="topic" placeholder="..."></input>
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <input type="text" id="message" placeholder="Let's chat :)"></input>
                    </div>

                </form>
        </Section>
    )
}

export default Contact