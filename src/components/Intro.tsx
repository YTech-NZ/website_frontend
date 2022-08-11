import React from 'react'
import Section from '../widgets/Section'
import "../styles/intro.scss"

function Intro() {
  return (
    <Section>
        <div className="intro__container">
            <div className="intro__container__title">Hi. We are YTech NZ.</div>
            <div className="intro__container__text">A team of 12, consisting of young people passionate about delivering events that bring awareness to the potential in which emerging technologies carry.</div>
        </div>
    </Section>
  )
}

export default Intro