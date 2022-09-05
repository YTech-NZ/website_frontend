import '../styles/values.scss'
import Section from '../widgets/Section'
import Image from '../widgets/Image'

function Values() {
  return (
    <Section>
        <div id="values">
            <h1>Our Values</h1>

            {/* TODO: Replace placeholder images to real images, cropped into a square.*/}

            <div id="pillars">
                <div className="pillar" id="pink-pillar">
                    <Image src="https://drive.google.com/file/d/1uMAYwP44W9pNQkc5n0JXfNFn3Oj5Q0Kd/view?usp=sharing"/>
                    <h2>Growth</h2>
                </div>

                <div className="pillar" id="blue-pillar">
                    <Image src="https://drive.google.com/file/d/1UkkhT1jQuDLfqecq5DPFHwj3SCBbTinJ/view?usp=sharing" />
                    <h2>Youth Powered</h2>
                </div>

                <div className="pillar" id="yellow-pillar">
                    <Image src="https://drive.google.com/file/d/1OwjqnDoiIJL2WSz0Bt4lB98w4xKWDECr/view?usp=sharing" />
                    <h2>Community Focused</h2>
                </div>

            </div>

        </div>
    </Section>
  )
}

export default Values