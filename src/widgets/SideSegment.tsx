import React from 'react'
import SideSegmentType from '../types/SideSegmentType'
import Section from './Section'
import Image from './Image'
import "../styles/sidesegment.scss"

function SideSegment(props: SideSegmentType) {
    var isLeftClassName = "";

    if (props.isLeft) {
        isLeftClassName = "left";
    } else {
        isLeftClassName = "right";
    }

    return (
        <Section inverse={props.inverse}>
            <div className={`sideSeg ${isLeftClassName}`}>
                <div className="media">
                    {props.children}
                </div>
                <div className="content">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default SideSegment