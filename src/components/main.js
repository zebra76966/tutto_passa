import React, { useEffect, useState, useRef } from "react";
import "./master.css";
import Bar from "./bar";
import { easeIn, motion, spring } from "framer-motion";
import Cta from "./cta";
import CustomCarousel from "./customslider/customSlider";
import TextSlideUp from "./textslideup/textSlideup";

const Home = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const [activeDrink, setActiveDrink] = useState("sky");
  const [resetDelay, setDelay] = useState(false);
  const [stopanim, setStopAnim] = useState(false);

  useEffect(() => {
    if (activeDrink !== "sky") {
      setDelay(true);
    }
  }, [activeDrink]);

  // Delayed Scroll=============>
  const [scrollPos, setScrollPos] = useState(0);
  const scrollFactor = 0.3; // Control the scroll dampening (0.1 is slower, closer to 1 is faster)
  const scrollPosRef = useRef(0); // Ref to keep the latest scroll position
  const ticking = useRef(false); // Ref to ensure only one requestAnimationFrame is active

  useEffect(() => {
    const handleScroll = () => {
      const targetScrollPos = window.scrollY * scrollFactor;

      // Only update scroll position if not currently updating
      if (!ticking.current) {
        // Request animation frame for smooth updates
        window.requestAnimationFrame(() => {
          scrollPosRef.current = targetScrollPos;
          setScrollPos(targetScrollPos);
          ticking.current = false; // Reset ticking
        });
        ticking.current = true; // Set ticking to prevent multiple calls
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollFactor]);

  return (
    <>
      <div className="spinner-load">
        <img src="flower-spinner.svg" className="flower-pattern" />

        <img src="logo-bw.png" className="flower-logo" height={250} />
      </div>
      <div
        style={{
          transform: `translateY(-${scrollPos}px)`,
          position: "relative",
          transition: "transform 0.9s ease-out",
        }}
      >
        <div className="w-100 hero d-lg-flex align-items-center text-dark ">
          <div className="container-fluid ">
            <div className="row">
              <motion.div className="col-lg-6 d-flex align-items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 11 }}>
                {activeDrink == "sky" && (
                  <motion.div className="w-100 ps-lg-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.5 }}>
                    <h1 className="display-1 h-font" style={{ color: activeDrink == "sky" ? "#48FFDC" : activeDrink == "land" ? "#22FFAA" : "" }}>
                      AQUA
                    </h1>

                    <p className="fs-5">
                      In the fabric of time, in the Tutto Passa universe, we are treasure hunters in the vast landscape of existence. Each product is an invitation to explore the deepest corners of
                      your being. We illuminate paths with the wisdom that distills from each moment, opening doors to understanding and clarity.
                    </p>

                    <Cta />
                  </motion.div>
                )}

                {activeDrink == "land" && (
                  <motion.div className="w-100 ps-lg-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.5 }}>
                    <h1 className="display-1 h-font" style={{ color: activeDrink == "sky" ? "#48FFDC" : activeDrink == "land" ? "#22FFAA" : "" }}>
                      LAND
                    </h1>

                    <p className="fs-5">
                      In the fabric of time, in the Tutto Passa universe, we are treasure hunters in the vast landscape of existence. Each product is an invitation to explore the deepest corners of
                      your being. We illuminate paths with the wisdom that distills from each moment, opening doors to understanding and clarity.
                    </p>

                    <Cta />
                  </motion.div>
                )}

                {activeDrink == "aqua" && (
                  <motion.div className="w-100 ps-lg-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.5 }}>
                    <h1 className="display-1 h-font" style={{ color: activeDrink == "sky" ? "#48FFDC" : activeDrink == "land" ? "#22FFAA" : "" }}>
                      SKY
                    </h1>

                    <p className="fs-5">
                      In the fabric of time, in the Tutto Passa universe, we are treasure hunters in the vast landscape of existence. Each product is an invitation to explore the deepest corners of
                      your being. We illuminate paths with the wisdom that distills from each moment, opening doors to understanding and clarity.
                    </p>

                    <Cta />
                  </motion.div>
                )}
              </motion.div>

              <div className="col-lg-6 position-relative pe-0">
                <div style={{ overflow: "hidden" }}>
                  <div
                    className="clip-box d-flex align-items-center justify-content-center"
                    style={{
                      boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",

                      background: activeDrink == "sky" ? "#48FFDC" : activeDrink == "land" ? "#22FFAA" : "",
                    }}
                  >
                    <div className="drinks-wrapper">
                      {activeDrink == "sky" && (
                        <motion.div
                          className="motion-drinks"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ transition: easeIn, type: "spring", stiffness: 100, duration: 1, delay: resetDelay ? 0.2 : 11 }}
                        >
                          <img src="2.png" className="img-1" />
                        </motion.div>
                      )}

                      {activeDrink == "land" && (
                        <motion.div
                          className="motion-drinks"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ transition: easeIn, type: "spring", stiffness: 100, duration: 1, delay: 0.2 }}
                        >
                          <img src="1.png" className="img-2" />
                        </motion.div>
                      )}

                      {activeDrink == "aqua" && (
                        <motion.div
                          className="motion-drinks"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ transition: easeIn, type: "spring", stiffness: 100, duration: 1, delay: 0.2 }}
                        >
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

        <div id="explore" className="w-100 hero d-lg-flex align-items-center text-dark bg-light">
          <div className="container-fluid ">
            <div className="row">
              <motion.div
                className="col-lg-4 d-flex align-items-center justify-content-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="w-100 ps-lg-5 text-center position-relative">
                  <h1 className="display-2 h-font  drink-txt" style={{ color: "#22FFAA" }}>
                    LAND
                  </h1>
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

        <div className="w-100 hero d-lg-flex align-items-center text-dark ">
          <div className="container-fluid ">
            <div className="row">
              <motion.div
                className="col-lg-4 d-flex align-items-center justify-content-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="w-100 ps-lg-5 text-center position-relative">
                  <h1 className="display-2 h-font drink-txt" style={{ color: "#48FFDC" }}>
                    AQUA
                  </h1>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                initial={{ opacity: 0, y: 100, rotate: 25 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 3, delay: 0.2, type: spring }}
              >
                <img src="2.png" className="drink-img" height={500} />

                <img src="./patterns/signs/float.svg" className="bg-pattern" />
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

        <div className="w-100 hero d-lg-flex align-items-center text-dark bg-light">
          <div className="container-fluid ">
            <div className="row">
              <motion.div
                className="col-lg-4 d-flex align-items-center justify-content-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="w-100 ps-lg-5 text-center position-relative">
                  <h1 className="display-2 h-font drink-txt" style={{ color: "#dcc5ff" }}>
                    SKY
                  </h1>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                initial={{ opacity: 0, y: 100, rotate: 25 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 3, delay: 0.2, type: spring }}
              >
                <img src="3.png" className="drink-img" height={500} />

                <img src="./patterns/signs/fall.svg" className="bg-pattern" />
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

        {/* Custom  Car Start */}

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <CustomCarousel />
            </div>
          </div>
        </div>

        {/* Custom Car End */}

        <div className="container-fluid px-lg-5  bg-black pb-4">
          <div className="row">
            <motion.div className="col-12 px-lg-5 bg-black py-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              {/* itemVid Start===> */}

              <div className=" align-items-center position-relative itemVid">
                <div className="w-100 ">
                  <video muted loop poster="logo512.png" className=" shadow-lg " style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} autoPlay="true">
                    <source src="heroVid.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="h-100 w-100 position-absolute top-0 left-0 m-0 p-0">
                  <div className="w-100 h-100">
                    <motion.div
                      className="clipVid h-100 d-flex align-items-center justify-content-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ type: "tween", duration: 2, delay: 0.5 }}
                    >
                      <motion.img
                        src="./logo-bw.png"
                        className=""
                        style={{ height: "420px", width: "auto" }}
                        initial={{ opacity: 0, scale: 2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", duration: 3, delay: 1 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* itemVid End===> */}
            </motion.div>

            <motion.div className="col-lg-6 ps-lg-5 " style={{ maxHeight: "693px" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="w-100 h-100">
                <video muted loop poster="logo512.png" className=" shadow-lg " style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} autoPlay="true">
                  <source src="wavesTrim.mp4" type="video/mp4" />
                </video>

                <motion.div
                  className="h-100 w-100 d-flex align-items-center justify-content-center border-dark mt-2"
                  style={{ borderRadius: "40px", borderStyle: "dashed", borderWidth: "6px" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <TextSlideUp />
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="col-lg-6 pe-lg-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
              <div className="w-100 ">
                <img src="girl.png" className=" shadow-lg h-100" style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} />
              </div>
            </motion.div>

            <motion.div className="col-lg-6 pe-lg-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
              <div className="w-100 ">
                <img src="girl2.png" className=" shadow-lg h-100" style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} />
              </div>
            </motion.div>

            <motion.div className="col-lg-6 ps-lg-5 " style={{ maxHeight: "693px" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="w-100 h-100">
                <video muted loop poster="logo512.png" className=" shadow-lg " style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} autoPlay="true">
                  <source src="wavesTrim.mp4" type="video/mp4" />
                </video>

                <motion.div
                  className="h-100 w-100 d-flex align-items-center justify-content-center border-dark mt-2"
                  style={{ borderRadius: "40px", borderStyle: "dashed", borderWidth: "6px" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <TextSlideUp />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated cards */}
        <div className={`features-section ${stopanim ? "" : "animated"} my-lg-5 my-3`}>
          <div className="features-section-inner" onMouseOver={() => setStopAnim(true)} onMouseLeave={() => setStopAnim(false)}>
            {[...Array(5)].map((ini, i) => {
              return (
                <div className={`featurecard ${i % 2 == 0 ? "txtcolor-secondary bgcolor-plain" : "txtcolor-plain bgcolor-secondary"} shadow`}>
                  <h1 className="display-6 py-2 fw-bold">{"Some Text Name"}</h1>

                  <p className="thinScroll lead mt-md-4 mt-2 fw-bold">{"ini.detail"} </p>
                </div>
              );
            })}
            {[...Array(5)].map((ini, i) => {
              return (
                <div className={`featurecard ${i % 2 == 0 ? "txtcolor-secondary bgcolor-plain" : "txtcolor-plain bgcolor-secondary"} shadow`}>
                  <h1 className="display-6 py-2 fw-bold">{"Some Text Name"}</h1>

                  <p className="thinScroll lead mt-md-4 mt-2 fw-bold">{"ini.detail"} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
