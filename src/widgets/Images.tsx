import React from 'react'
import "../styles/images.scss";

// This function takes in the props object and converts the url into a usable form for website display. 
function Images(props: any) {

  //  Split string into substrings at the '/' and remove the blank space. 
  var url = props.src;
  var url = url.split("/");
  var blank = url.splice(1,1);

  //  Obtain google drive image ID. 
  var ID = url[url.length-2];

  //  Construct the image URL for website display. 
  var output = url[0] + '//' + url[1] + '/uc?export=view&id=' + ID

  return (output)
}


export default Images