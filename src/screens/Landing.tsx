import NavBar from '../components/Navbar';
import Splash from '../components/Splash';
import Section from '../widgets/Section';
import Image from '../widgets/Image';
import YouTubeVideo from "../widgets/Youtube_video";

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
                <h1>Image</h1>
                <Image src="https://drive.google.com/file/d/1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG/view" />
            </Section>

            {/*Video*/}
            <Section>
                <h1>YouTube Video</h1>
                <YouTubeVideo src="https://www.youtube.com/watch?v=iy3VW4L0dAY" />
            </Section>

            {/*Footer*/}
            <Section inverse>
                <div>Footer stuff</div>
            </Section>
        </>
    )
}

export default Landing