import React, { useEffect, useState } from "react";
import "./master.css";
import Bar from "./bar";
import { easeIn, motion, spring } from "framer-motion";

const Home = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const [activeDrink, setActiveDrink] = useState("sky");
  const [resetDelay, setDelay] = useState(false);

  useEffect(() => {
    if (activeDrink !== "sky") {
      setDelay(true);
    }
  }, [activeDrink]);

  return (
    <>
      <div className="spinner-load">
        <img src="flower-spinner.svg" className="flower-pattern" />

        <img src="logo-bw.png" className="flower-logo" height={250} />
      </div>

      <div className="w-100 hero d-lg-flex align-items-center text-light ">
        <div className="container-fluid ">
          <div className="row">
            <motion.div className="col-lg-6 d-flex align-items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 11 }}>
              <div className="w-100 ps-lg-5">
                <h1 className="display-2 h-font" style={{ color: activeDrink == "sky" ? "#48FFDC" : activeDrink == "land" ? "#22FFAA" : "" }}>
                  MENTAL CLARITY
                </h1>

                <p className="fs-5">
                  In the fabric of time, in the Tutto Passa universe, we are treasure hunters in the vast landscape of existence. Each product is an invitation to explore the deepest corners of your
                  being. We illuminate paths with the wisdom that distills from each moment, opening doors to understanding and clarity.
                </p>
              </div>
            </motion.div>

            <div className="col-lg-6 position-relative">
              <div style={{ overflow: "hidden" }}>
                <div className="clip-box d-flex align-items-center justify-content-center" style={{ background: activeDrink == "sky" ? "#48FFDC" : activeDrink == "land" ? "#22FFAA" : "" }}>
                  <div className="drinks-wrapper">
                    {activeDrink == "sky" && (
                      <motion.div
                        className="motion-drinks"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ transition: easeIn, duration: 0.5, delay: resetDelay ? 0.2 : 11 }}
                      >
                        <img src="2.png" className="img-1" />
                      </motion.div>
                    )}

                    {activeDrink == "land" && (
                      <motion.div className="motion-drinks" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ transition: easeIn, duration: 0.5, delay: 0.2 }}>
                        <img src="1.png" className="img-2" />
                      </motion.div>
                    )}

                    {activeDrink == "aqua" && (
                      <motion.div className="motion-drinks" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ transition: easeIn, duration: 0.5, delay: 0.2 }}>
                        <img src="3.png" className="img-3" />
                      </motion.div>
                    )}
                  </div>

                  {[...Array(5)].map(() => {
                    return (
                      <>
                        {activeDrink == "sky" && (
                          <motion.div className="patterns" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: resetDelay ? 0.9 : 13 }}>
                            <img src="patterns/aqua/aqua-pattern-r.png" />
                            <img src="patterns/aqua/aqua-pattern-l.png" />
                          </motion.div>
                        )}

                        {activeDrink == "land" && (
                          <motion.div className="patterns" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                            <img src="patterns/land/land-r.svg" />
                            <img src="patterns/land/land-l.svg" />
                          </motion.div>
                        )}

                        {activeDrink == "aqua" && (
                          <motion.div className="patterns" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                            <img src="patterns/sky/sky.svg" />
                            <img src="patterns/sky/sky.svg" />
                          </motion.div>
                        )}
                      </>
                    );
                  })}
                </div>

                <Bar setActiveDrink={(e) => setActiveDrink(e)} activeDrink={activeDrink} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 hero d-lg-flex align-items-center text-light ">
        <div className="container-fluid ">
          <div className="row">
            <motion.div
              className="col-lg-4 d-flex align-items-center justify-content-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="w-100 ps-lg-5 text-center position-relative">
                <h1 className="display-2 h-font text-light drink-txt">LAND</h1>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              initial={{ opacity: 0, y: 100, rotate: 25 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 3, delay: 0.2, type: spring }}
            >
              <img src="1.png" className="drink-img" height={500} />

              <img src="./patterns/signs/run.svg" className="bg-pattern" />
            </motion.div>

            <motion.div
              className="col-lg-4 d-flex align-items-center justify-content-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="fs-5">
                In the fabric of time, in the Tutto Passa universe, we are treasure hunters in the vast landscape of existence. Each product is an invitation to explore the deepest corners of your
                being. We illuminate paths with the wisdom that distills from each moment, opening doors to understanding and clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
