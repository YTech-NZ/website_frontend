import "../styles/image.scss";

// This function takes in the props object and converts the url into a usable form for website display. 
function Image(props: any) {

  //  Split string into substrings at the '/' and remove the blank space. 
  var url = props.src;
  var parts = url.split("/");

  //  Obtain google drive image ID. 
  var id = parts[parts.length-2];

  //  Construct the image URL for website display. 
  var output = 'https://drive.google.com/uc?export=view&id=' + id;

  return <img className="cust-image" alt="YTech NZ drive" src={output}/>
}


export default Image