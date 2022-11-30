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


            <SideSegment isLeft inverse title={"Founded by 7 South Auckland HS Students"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu felis. Mauris vitae magna at justo gravida lobortis nec ut lacus. Morbi tempus urna laoreet velit dictum"}>
                <Image src="https://drive.google.com/file/d/1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG/view" />
            </SideSegment>

            <SideSegment isLeft={false} inverse={false} title={"Bla Bla Events Bla Bla"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu felis. Mauris vitae magna at justo gravida lobortis nec ut lacus. Morbi tempus urna laoreet velit dictum"}>
                <YouTubeVideo src="https://www.youtube.com/watch?v=iy3VW4L0dAY" />
            </SideSegment>

            <Section>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>
            </Section>
            
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