import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Engineer",
          "Software Developer Engineer",
        ],
        autoStart: true,
        loop: true,
        pauseFor: 1000,
        cursor: '',
      }}
    />
  );
}

export default Type;
