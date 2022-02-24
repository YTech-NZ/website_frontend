import NavBar from '../components/Navbar';
import Splash from '../components/Splash';
import Section from '../widgets/Section';

import "../styles/styles.css"
import YouTubeEmbed from "../components/YouTubeEmbed";

function Landing() {
    return (
        <>
            {/*Navigation bar at the website header*/}
            <NavBar />
            
            {/*Splash section*/}
            <Splash />
            
            {/*White section with green text*/}
            <Section>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>
            </Section>

            {/*Green section with white text*/}
            <Section inverse>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>
            </Section>
            
            {/*Image*/}
            <Section >
                {/* Source: https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website  */}
                {/* Format: https://drive.google.com/uc?export=view&id=... */}
                {/* Will need to get the id. The id can be found between /d/ and /view  in the original URL*/}
                <img src="https://drive.google.com/uc?export=view&id=1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG"         // Image link
                alt="Landing image"     // Description of image. 
                width={700}            // Image width.
                height={400}            // Image height. 
                />
            </Section>
            
            {/*Video*/}
            <Section>
                <div className="App">
                    <h1>YouTube Embed</h1>
                    <YouTubeEmbed embedId="iy3VW4L0dAY"/>   {/*Video Embed ID*/}
                </div>
            </Section>
            
            {/*Footer*/}
            <Section inverse>
                <div>Footer stuff</div>
            </Section>
        </>
    )
}

export default Landing