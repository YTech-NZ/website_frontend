  //  Split string into substrings at the '/' and remove the blank space. 
  var url = "https://drive.google.com/file/d/1GD4DUn3ehKOqwz32R-tMjGnWSZw6wVlG/view";
  var url = url.split("/");

  //  Obtain google drive image ID. 
  var ID = url[url.length-2];

  //  Construct the image URL for website display. 
  var output ='https://drive.google.com/uc?export=view&id=' + ID
  
  console.log(output)