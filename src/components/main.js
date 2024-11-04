import React, { useEffect, useState, useRef } from "react";
import "./master.css";
import Bar from "./bar";
import { easeIn, motion, spring } from "framer-motion";
import Cta from "./cta";
import CustomCarousel from "./customslider/customSlider";
import TextSlideUp from "./textslideup/textSlideup";
import datas from "./slides.json";
import FeedCard from "./feedcards";
import Flipers from "./flippers";
import Footer from "./footer";
import ContactForm from "./forms/contact";

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

  const [scrollPos, setScrollPos] = useState(0);
  const baseScrollFactor = 0.3; // Base scroll factor
  const scrollPosRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate a dynamic scroll factor based on scroll position relative to page height
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFactor = baseScrollFactor * (1 - (window.scrollY / pageHeight) ** 0.5); // Gradual reduction

      // Limit the scroll position to prevent excessive white space
      const targetScrollPos = Math.min(window.scrollY * scrollFactor, pageHeight * 0.5);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          scrollPosRef.current = targetScrollPos;
          setScrollPos(targetScrollPos);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="spinner-load">
        <img src="logo-bw.png" className="flower-logo" height={250} />
      </div>
      <div
        style={{
          transform: `translateY(-${scrollPos}px)`,
          position: "relative",
          transition: "transform 0.8s ease-out",
        }}
        id="home"
      >
        <div className="w-100 hero d-lg-flex align-items-center text-dark ">
          <div className="container-fluid ">
            <div className="row ">
              <motion.div
                className="col-lg-6 d-flex align-items-center order-2 order-lg-1 pt-lg-auto pt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
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

              <div className="col-lg-6 position-relative pe-lg-0 mt-lg-0 mt-4 order-1 order-lg-2">
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
                          transition={{ transition: easeIn, type: "spring", stiffness: 100, duration: 1, delay: resetDelay ? 0.2 : 2 }}
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
                            <motion.div className="patterns" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: resetDelay ? 0.9 : 4 }}>
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
        <div className="p-0 m-0 h-0" id="explore"></div>

        <div className="w-100 hero2 d-lg-flex align-items-center text-dark bg-light ">
          <div className="container-fluid ">
            <div className="row pt-lg-0 pt-5">
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
                <img src="1.png" className="drink-img" />

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

        <div className="w-100 hero2 d-lg-flex align-items-center text-dark ">
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
                <img src="2.png" className="drink-img" />

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

        <div className="w-100 hero2 d-lg-flex align-items-center text-dark bg-light ">
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
                <img src="3.png" className="drink-img" />

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

        <div className="container-fluid px-lg-5  bg-black pb-4" id="about">
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

            <motion.div className="col-lg-6 ps-lg-5 mb-3 flippersWrapper" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="w-100 h-100">
                <video muted loop poster="logo512.png" className=" shadow-lg " style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} autoPlay="true">
                  <source src="wavesTrim.mp4" type="video/mp4" />
                </video>

                <motion.div
                  className="h-lg-100 w-100 d-flex align-items-center justify-content-center border-dark mt-2"
                  style={{ borderRadius: "40px", borderStyle: "dashed", borderWidth: "6px" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <TextSlideUp />
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="col-lg-6 pe-lg-5 mb-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
              <div className="w-100 ">
                <img src="girl.png" className=" shadow-lg h-100" style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} />
              </div>
            </motion.div>

            <motion.div className="col-lg-6 ps-lg-5 mb-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
              <div className="w-100 ">
                <img src="girls2.png" className=" shadow-lg h-100" style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} />
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 pe-lg-5 mb-3 position-relative flippersWrapper2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-100 h-100">
                <video muted loop poster="logo512.png" className=" shadow-lg " style={{ width: "100%", objectFit: "cover", borderRadius: "40px" }} autoPlay="true">
                  <source src="mountainsTrim.mp4" type="video/mp4" />
                </video>

                <motion.div
                  className="h-lg-100 w-100  d-flex align-items-center justify-content-center border-dark mt-2"
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
            {datas.map((ini, i) => {
              return (
                <div
                  className={`featurecard ${ini.bg_type == "img" ? "cardImgClass text-light" : "bg-black text-light"} shadow `}
                  style={{
                    background: ini.bg_type == "img" ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${ini.img_src}')` : "black",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <h1 className="display-2 py-2 fw-bold h-font text-end">{ini.count}</h1>

                  <p className="thinScroll lead text-center mt-md-4 mt-4 fw-bold fs-1 ">{ini.text} </p>

                  <div className={`bottom-star ${i % 2 == 0 ? "txtcolor-secondary " : "txtcolor-plain"}`}>
                    <img src={"logo-wb.png"} height={70} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row mx-0 px-0 position-relative">
            <div className="col-lg-4 p-3 ">
              <FeedCard img={"girl.png"} />
              <FeedCard img={"girl3.png"} />
              <FeedCard img={"boy2.png"} />
            </div>
            <div className="col-lg-4 " style={{ maxHeight: "400px" }}>
              <div className="features-section2 animated">
                <div className="features-section2-inner">
                  <h4 className="h-font text-center display-1 text-dark">FIND</h4>
                  <h4 className="h-font text-center display-1 text-dark">FOCUS</h4>
                  <h4 className="h-font text-center display-1 ">UNLEASH</h4>
                  <h4 className="h-font text-center display-1 ">NEW</h4>
                  <h4 className="h-font text-center display-1 ">IDEAS</h4>
                  <h4 className="h-font text-center display-1 text-dark">EXPLORE</h4>
                  <h4 className="h-font text-center display-1 text-dark">NEW</h4>
                  <h4 className="h-font text-center display-1 text-dark">MENTAL</h4>
                  <h4 className="h-font text-center display-1 text-dark">HORIZONS</h4>
                  <h4 className="h-font text-center display-1 ">MASTER</h4>
                  <h4 className="h-font text-center display-1 ">YOUR</h4>
                  <h4 className="h-font text-center display-1 ">THOUGHTS</h4>
                  <h4 className="h-font text-center display-1 text-dark">FIND</h4>
                  <h4 className="h-font text-center display-1 text-dark">FOCUS</h4>
                  <h4 className="h-font text-center display-1 ">UNLEASH</h4>
                  <h4 className="h-font text-center display-1 ">NEW</h4>
                  <h4 className="h-font text-center display-1 ">IDEAS</h4>
                  <h4 className="h-font text-center display-1 text-dark">EXPLORE</h4>
                  <h4 className="h-font text-center display-1 text-dark">NEW</h4>
                  <h4 className="h-font text-center display-1 text-dark">MENTAL</h4>
                  <h4 className="h-font text-center display-1 text-dark">HORIZONS</h4>
                  <h4 className="h-font text-center display-1 ">MASTER</h4>
                  <h4 className="h-font text-center display-1 ">YOUR</h4>
                  <h4 className="h-font text-center display-1 ">THOUGHTS</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 p-3 position-sticky top-0 end-0">
              <FeedCard img={"girl2.png"} />
              <FeedCard img={"boy.png"} />
              <FeedCard img={"girl4.png"} />
            </div>
          </div>
        </div>

        {/* Alt Drinks start */}

        <div className="container-fluid my-lg-5">
          <div className="row mx-0 px-0 position-relative">
            <div className="col-lg-6 ">
              <motion.div className="col-12   py-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                {/* itemVid Start===> */}

                <div className=" align-items-center position-relative itemVid">
                  <div className="w-100 ">
                    <video muted loop poster="logo-bw.png" className=" shadow-lg wavesTrim" style={{ width: "100%", height: "80dvh", objectFit: "cover", borderRadius: "40px" }} autoPlay="true">
                      <source src="wavesTrim.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="h-100 w-100 position-absolute top-0 left-0 m-0 p-0">
                    <div className="w-100 h-100">
                      <motion.div
                        className="clipVid h-100 d-flex align-items-center justify-content-center"
                        style={{ background: "black", mixBlendMode: "darken" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "tween", duration: 2, delay: 0.5 }}
                      >
                        <img src="./flower-spinner-white.svg" className="flower-pattern" style={{ height: "700px", width: "auto" }} />
                      </motion.div>
                    </div>
                  </div>
                </div>
                {/* itemVid End===> */}
              </motion.div>
            </div>

            <div className="col-lg-6 ">
              <div className="d-flex align-items-center position-relative alt-drink-wrapper" style={{ height: "80dvh", overflow: "clip" }}>
                <div className="h-100 w-100 d-flex align-items-center justify-content-center" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                  <motion.img
                    src="./passa-w.png"
                    className="alt-drink-bg"
                    height={"130%"}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </div>

                <div className="h-100 w-100 d-flex align-items-center justify-content-center" style={{ position: "absolute", zIndex: "2", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                  <motion.img
                    src="./alt_drinks.png"
                    className="alt-drink-front"
                    height={"80%"}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center mt-lg-5 pt-lg-5 pb-4">
          <div className="w-100 d-flex align-items-cennter justify-content-center mt-5 pt-5">
            <Flipers delay={0.5} img1={"./talisman.svg"} img2={"./patterns/signs/run.svg"} />
            <Flipers delay={1} img1={"./talisman.svg"} img2={"./patterns/signs/float.svg"} />
            <Flipers delay={0.5} img1={"./talisman.svg"} img2={"././patterns/signs/fall.svg"} />
            <Flipers delay={1} img1={"./talisman.svg"} img2={"./patterns/signs/run.svg"} />
            <Flipers delay={0.5} img1={"./talisman.svg"} img2={"./patterns/signs/float.svg"} />
            <Flipers delay={1} img1={"./talisman.svg"} img2={"././patterns/signs/fall.svg"} />
          </div>
        </div>
      </div>
      <Footer />

      <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-black text-light" style={{ borderRadius: "25px" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Got a Query?
              </h5>
              <button type="button" class="btn bg-none text-danger fs-3" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div class="modal-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
