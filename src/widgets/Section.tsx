import "../styles/section.scss";

function Section(props: any) {

    return (
        <div className={`section ${props.inverse ? "inverse" : ""}`}>
            {props.children}
        </div>
    )
}

export default Section