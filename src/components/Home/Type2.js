import React from "react";
import Typewriter from "typewriter-effect";

function Type2() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer Engineer",
          "Machine Learning Engineer",
        ],
        autoStart: true,
        loop: true,
        pauseFor: 1000,
        cursor: '',
      }}
    />
  );
}

export default Type2;
