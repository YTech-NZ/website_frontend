import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Splash from '../components/Splash';
// import Contact from '../components/Contact';
import Section from '../widgets/Section';
import SideSegment from '../widgets/SideSegment';
import Image from '../widgets/Image';
import YouTubeVideo from "../widgets/YoutubeVideo";
import Intro from '../components/Intro';
import Values from '../components/Values';
import MeetTheTeam from '../components/MeetTheTeam';

function Landing() {
    return (
        <>
            {/*Navigation bar at the website header*/}
            <NavBar />

            {/*Splash section*/}
            <Splash />

            {/*White section with green text*/}
            <Intro />

            {/*Green section with white text*/}


            <SideSegment isLeft inverse title={"Founded by 7 South Auckland HS Students"} description={"Inspired by their own love for technology with the help of CreateOps, who are passionate about providing insight for their fellow students into how tech is being used in various industries."}>
                <Image src="https://drive.google.com/file/d/1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG/view" />
            </SideSegment>

            <SideSegment isLeft={false} inverse={false} title={"Check out our events!"} description={"Since YTech NZ’s first event in 2018, the team has continued to educate students about the opportunities that tech pathways hold through events targeting various tech-related themes. Our latest event, ‘Beyond The Code’, showcased how tech is used in a wide range of industries and left students feeling inspired by hearing about a diverse range of techxpert’s journeys into both technical and non-technical roles. Check out this brief recap from our first major event, Walking on Mars, where students had a virtual tour of NASA’s JPL."}>
                <YouTubeVideo src="https://www.youtube.com/watch?v=iy3VW4L0dAY" />
            </SideSegment>

            {/* <Section>
                <div></div>
            </Section> */}
            
            <Section inverse>
                <MeetTheTeam />
            </Section>

            <Values />

            {/*Image*/}
            {/* <Section >
                <h1>Image</h1>
                <Image src="https://drive.google.com/file/d/1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG/view" />
            </Section> */}

            {/*Video*/}
            {/* <Section>
                <h1>YouTube Video</h1>
                <YouTubeVideo src="https://www.youtube.com/watch?v=iy3VW4L0dAY" />
            </Section> */}

            {/*Contact Us*/}
            {/* <Contact /> */}

            <Footer />
        </>
    )
}

export default Landing