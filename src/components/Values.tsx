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
                <div className="pillar pink-pillar">
                    <Image src="https://drive.google.com/file/d/1A5TADxFNqcwnTvXxGsSdQsvsO7im98Kr/view?usp=sharing"/>
                    <h2>Growth</h2>
                </div>

                <div className="pillar blue-pillar">
                    <Image src="https://drive.google.com/file/d/1gYdy4k5t4kGMUbD9C36JEpn-ZoH-dFCD/view?usp=sharing" />
                    <h2>Youth Powered</h2>
                </div>

                <div className="pillar yellow-pillar">
                    <Image src="https://drive.google.com/file/d/1Gtf9t6geuvIrYAfEWwwlGzsrHy5so-r4/view?usp=sharing" />
                    <h2>Community Focused</h2>
                </div>

            </div>

        </div>
    </Section>
  )
}

export default Values