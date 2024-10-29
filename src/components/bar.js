import React, { useEffect, useState } from "react";
import "./bar.css";
import { motion } from "framer-motion";
const Bar = ({ setActiveDrink }) => {
  const [current, setCurrent] = useState("sky");
  useEffect(() => {
    setActiveDrink(current);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === "sky" ? "land" : prevCurrent === "land" ? "aqua" : "sky"));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <nav className="bottom-nav rounded-pill bg-dark shadow-sm">
      <a href="#" className={`${current == "sky" && "active"} link`} onClick={() => setCurrent("sky")}>
        {current == "sky" ? <img src="./patterns/signs/water-b.svg" /> : <img src="./patterns/signs/water-w.svg" />}
      </a>

      <a href="#" className={`${current == "land" && "active"} link`} onClick={() => setCurrent("land")}>
        {current == "land" ? <img src="./patterns/signs/earth-b.svg" /> : <img src="./patterns/signs/earth-w.svg" />}
      </a>

      <a href="#" className={`${current == "aqua" && "active"} link`} onClick={() => setCurrent("aqua")}>
        {current == "aqua" ? <img src="./patterns/signs/air-b.svg" /> : <img src="./patterns/signs/air-w.svg" />}
      </a>
    </nav>
  );
};

export default Bar;
