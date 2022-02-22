import NavBar from '../components/Navbar';
import Splash from '../components/Splash';
import Section from '../widgets/Section';

function Landing() {
    return (
        <>
            <NavBar />
            <Splash />
            <Section>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>
            </Section>
            <Section inverse>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>
            </Section>
            <Section >
                {/* <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div> */}
                <img src="https://drive.google.com/uc?export=view&id=1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG"/>
            
            </Section>
            <Section inverse>
                <div>Footer stuff</div>
            </Section>
        </>
    )
}

export default Landing