import React from "react";
import "./textSlideup.css";

const TextSlideUp = () => {
  return (
    <>
      <div class="text-slider d-flex align-items-center">
        <p className="text-light h-font mb-0 pb-0">Discover</p>
        <div class="loader">
          <div class="words h-font">
            <span class="word">explora</span>
            <span class="word">MENTE CLARA</span>
            <span class="word">VUELA ALTO</span>
            <span class="word">explora</span>
            <span class="word">MENTE CLARA</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextSlideUp;
