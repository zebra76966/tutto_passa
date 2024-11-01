import React from "react";
import { motion } from "framer-motion";
import "./flippers.css";

const Flippers = ({ img1, img2, delay = 0 }) => {
  const variants = {
    hidden: { rotateX: 0 },
    visible: { rotateX: 90 },
  };

  return (
    <div className="button-icon ">
      <motion.div
        className="cube"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% is in view
        transition={{
          duration: 0.5,
          delay: delay,
          ease: "easeOut",
        }}
      >
        <span className="side front">
          <img src={img1} height={"50px"} alt="Front" />
        </span>
        <span className="side top">
          <img src={img2} height={"50px"} alt="Top" />
        </span>
      </motion.div>
    </div>
  );
};

export default Flippers;
