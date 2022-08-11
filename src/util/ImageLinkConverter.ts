const ImageUrlConverter = (url: String) => {
    var parts = url.split("/");
    var id = parts[parts.length - 2];
    var output = 'https://drive.google.com/uc?export=view&id=' + id;

    return output;
}

export default ImageUrlConverter