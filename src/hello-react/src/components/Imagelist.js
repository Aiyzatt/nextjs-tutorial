import React from "react";

const Imagelist = (props) => {
  const images = props.images.map((image) => {
    return (
      <a 
        href={image.pageURL} 
        key={image.id} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={image.webformatURL} 
          alt={image.tags}
        />
      </a>
    );
  });
  return (
    <>
      {images}
    </>
  );
}

export default Imagelist;