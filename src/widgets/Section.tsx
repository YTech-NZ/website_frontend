import "../styles/section.scss";

function Section(props: any) {
    var colourClassname = "";

    if (props.black){
        colourClassname = "black";
    } else if (props.inverse){
        colourClassname = "inverse";
    }

    return (
        <div className={`section ${colourClassname}`}>
            {props.children}
        </div>
    )
}

export default Section