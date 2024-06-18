/* eslint-disable react/prop-types */

import { useRef, useState } from "react";

function Button_Lecture({ videoSrc }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const autoPlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} width="600" height="400" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Button_Lecture;