import React from 'react';

const ImageDiv = (props) => {

  const images = props.imagesArray.map(image => {
    return <img src={require(`../cards/${image}.png`)} width="130" height="200" />
  })

  return (
    <div>
      {images}
    </div>
  );
};

export default ImageDiv;
