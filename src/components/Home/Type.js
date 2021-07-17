import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Engineer",
        ],
        autoStart: true,
        loop: true,
        pauseFor: 10000000,
        cursor: '',
      }}
    />
  );
}

export default Type;
