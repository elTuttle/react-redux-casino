import React from 'react';

const ImageDiv = (props) => { //div of pngs to be displayed on blackjack page

  const images = props.imagesArray.map(image => { //map every image in props into HTML image tag
    return <img src={require(`../cards/${image}.png`)} width="130" height="200" />//use image string value to load correct png
  })

  return (
    <div>
      {images}
    </div>
  );
};

export default ImageDiv;
