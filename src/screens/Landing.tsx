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
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, numquam magni tempore sequi sed nisi nihil vero eum ipsum eligendi autem nulla dicta est. Pariatur optio quas impedit voluptates eveniet!</div>
            </Section>
            <Section inverse>
                <div>Footer stuff</div>
            </Section>
        </>
    )
}

export default Landing