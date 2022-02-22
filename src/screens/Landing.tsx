import NavBar from '../components/Navbar';
import Splash from '../components/Splash';
import Section from '../widgets/Section';
import Video from 'react-video';

function Landing() {
    return (
        <>
            <NavBar />
            <Splash />
            <Section>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>

                <Video
                    ref={'VideoComp'}
                    cls={'custom-video'}
                    height={500} width={'100%'}

                    src={'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4'}
                >
                </Video>
                
            </Section>
            <Section inverse>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>
            </Section>
            <Section >
                {/* <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div> */}
                {/* Source: https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website  */}
                {/* Format: https://drive.google.com/uc?export=view&id=... */}
                {/* Will need to get the id. The id can be found between /d/ and /view  in the original URL*/}
                <img src="https://drive.google.com/uc?export=view&id=1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG" />

            </Section>
            <Section inverse>
                <div>Footer stuff</div>
            </Section>
        </>
    )
}

export default Landing