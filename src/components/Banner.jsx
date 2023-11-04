import React from 'react';

function Banner({ image, alt }) {
  return (
    <container>
    <img src={ image }  alt={ alt } />
    </container>
  );
}

export default Banner;