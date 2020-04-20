import React from "react";
import Photo from './Photo'

const PhotoList = props => {
  
  const displayImages = () => {
    return props.images.map((image, index) => {
      return <Photo key={index} url={image.urls.small} />
  })
}

  return (
    <ul className="image-list">
      {displayImages()}
    </ul>
  );
}

export default PhotoList;
