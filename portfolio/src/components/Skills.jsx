import React, { useState } from "react";
import frontend from "../assets/images/frontend.jpg";
import backend from "../assets/images/backend.jpg";
import uiux from "../assets/images/ui-ux.jpg";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="bg-base-300 px-5 py-28 min-h-[80vh] " id="skills">
      <motion.div
        initial={{ y: "-200px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-3xl font-bold text-center ">Skills</h1>
        <p className="text-center text-gray-400 mb-5">My Acquired Skills</p>
      </motion.div>

      <div className="flex justify-center gap-20 flex-col items-center md:flex-row">
        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="card glass card-compact  max-w-96 w-full shadow-xl bg-blue-400"
        >
          <figure>
            <img src={uiux} />
          </figure>
          <div className="card-body">
            <h2 className=" text-center font-bold text-xl">UI/UX</h2>
            <p>I mostly use Figma and Canva for designing.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="glass card card-compact max-w-96 w-full shadow-xl bg-yellow-600"
        >
          <figure>
            <img src={frontend} />
          </figure>
          <div className="card-body ">
            <h2 className="font-bold text-xl text-center">Frontend</h2>
            <p>
              I prefer HTML, CSS, JS and maily React for frontend Development.{" "}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="glass card card-compact bg-pink-400 max-w-96 w-full shadow-xl"
        >
          <figure>
            <img src={backend} />
          </figure>
          <div className="card-body">
            <h2 className=" text-center font-bold text-xl">Backend</h2>
            <p>
              My first choice for backend development is Express, Node and
              MongoDB.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
