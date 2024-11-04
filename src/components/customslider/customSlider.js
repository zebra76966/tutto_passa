import React, { useState, useEffect } from "react";
import "./customcar.css";
import { motion } from "framer-motion";
const CustomCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevactive) => (prevactive < 4 ? prevactive + 1 : 0));
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const colors = ["#22FFAA", "#48FFDC", "#dcc5ff", "#22FFAA", "#48FFDC", "#dcc5ff"];

  return (
    <div className="custom-car ">
      <div className="clipped">
        <div className={`rotate-block ${`active${active}`}`}>
          <img src="./1.png" className={`slide ${active == 0 && "active"}`} />
          <img src="./2.png" className={`slide ${active == 1 && "active"}`} />
          <img src="./3.png" className={`slide ${active == 2 && "active"}`} />

          <img src="./1.png" className={`slide ${active == 3 && "active"}`} />
          <img src="./2.png" className={`slide  ${active == 4 && "active"}`} />
        </div>
      </div>

      <h1
        className="h-font text-center w-100 cham-font"
        style={{
          color: colors[active],

          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        MENTAL CLARITY
      </h1>
    </div>
  );
};

export default CustomCarousel;
