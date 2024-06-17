import React from 'react';

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop >
      <source src="workShop_groupe/src/assets/sons/clip.mp4" type="audio/mp4" />
      Your browser does not support the audio element.
    </video>
  );
};

export default BackgroundVideo;
