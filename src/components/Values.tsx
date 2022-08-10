import '../styles/values.scss'
import Section from '../widgets/Section'
import placeHolderImg from '../assets/instagram.png';

function Values() {
  return (
    <Section>
        <div id="values">
            <h1>Our Values</h1>

            {/* TODO: Replace placeholder images to real images, cropped into a square.*/}

            <div id="pillars">
                <div className="pillar" id="pink-pillar">
                    <img src={placeHolderImg}/>
                    <h2>Growth</h2>
                </div>

                <div className="pillar" id="blue-pillar">
                    <img src={placeHolderImg}/>
                    <h2>Youth Powered</h2>
                </div>

                <div className="pillar" id="yellow-pillar">
                    <img src={placeHolderImg}/>
                    <h2>Community Focused</h2>
                </div>

            </div>

        </div>
    </Section>
  )
}

export default Values