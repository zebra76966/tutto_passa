import React from "react";
import { motion } from "framer-motion";
const FeedCard = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      variants={{ visible: { opacity: 1, scale: 1, y: 0 }, hidden: { opacity: 0, scale: 0.7, y: 200 } }}
      className={`card bg-dark text-white p-0 border-0 pb-2 ${"mb-4"} me-4`}
      style={{ display: "block", width: "100%", cursor: "pointer" }}
    >
      <img src={props.img} className="card-img  opacity-50" style={{ objectFit: "cover", height: "580px" }} loading="lazy" alt="..." />
      <div className="card-img-overlay p-0 ">
        <div className="clipVid2 row mx-0 px-0">
          <div className="col-8 ps-0 pe-2">
            <div className="w-100 rounded-2 bg-white mb-2">
              <span className="d-flex align-items-center justify-content-between  text-light p-4" style={{ background: "rgba(0,0,0,0.5)", borderRadius: "5px 5px 5px 5px" }}>
                <div className="d-flex align-items-center">
                  <p className="p-0 m-0 me-2"></p>
                </div>
                <p className="fs-4 p-0 m-0"> </p>
              </span>
            </div>

            <div className="w-100 rounded-2 bg-white  mb-2">
              <span className="text-light p-2 d-flex align-items-end" style={{ background: "rgba(0,0,0,0.5)", height: "150px" }}>
                <div className="h-100"></div>
              </span>
            </div>

            <div className="w-100 bg-white  mb-2">
              <span className="text-light p-2 d-block" style={{ background: "rgba(0,0,0,0.5)", height: "353px", borderRadius: "5px 5px 5px 25px" }}>
                <div className="d-flex flex-wrap-reverse"></div>
              </span>
            </div>
          </div>

          <div className="col-4 px-0">
            <div className="w-100 bg-white mb-2">
              <span className="d-flex align-items-center justify-content-between  text-light p-2" style={{ background: "rgba(0,0,0,0.5)", height: "184px", borderRadius: "5px 25px 5px 5px" }}>
                <div className="d-block text-center w-100"></div>
              </span>
            </div>

            <div className="w-100 bg-white mb-2">
              <span className="d-flex align-items-center justify-content-between  text-light p-2 " style={{ background: "rgba(0,0,0,0.5)", height: "184px", borderRadius: "5px 5px 5px 5px" }}>
                <div className="d-block text-center w-100"></div>
              </span>
            </div>

            <div className="w-100 bg-white mb-2">
              <span className="d-flex align-items-center justify-content-between  text-light p-2" style={{ background: "rgba(0,0,0,0.5)", height: "185px", borderRadius: "5px 5px 5px 5px" }}>
                <div className="d-block text-center w-100"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedCard;
