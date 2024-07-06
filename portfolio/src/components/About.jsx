import React from "react";
import about from "../assets/images/aboutme.jpeg";
import { FaAward, FaHeadphones } from "react-icons/fa";
import { PiSuitcaseBold } from "react-icons/pi";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="bg-base-100 py-24 w-full px-5 min-h-[100vh]" id="about">
        <motion.div
          initial={{ y: "200px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="m-10"
        >
          <h1 className="text-center text-3xl font-bold">About Me</h1>
          <p className="text-center">My Introduction</p>
        </motion.div>

        <div className="flex justify-center lg:gap-28 gap-8 items-center lg:flex-row flex-col">
          <motion.div
            initial={{ y: "200px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:w-1/2 mx-5 flex justify-center"
          >
            <figure>
              <img
                src={about}
                className="mask mask-circle w-[275px] md:w-[450px] h-auto"
              />
            </figure>
          </motion.div>

          <div className="">
            <div className="flex md:flex-wrap gap-5 justify-center items-center flex-col lg:flex-row mb-10">
              <motion.div
                initial={{ y: "200px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="card glass w-80 shadow-xl bg-blue-400"
              >
                <div className="card-body">
                  <h2 className="flex justify-center">
                    <FaAward />
                  </h2>
                  <h2 className="text-center text-lg font-bold">Experience</h2>
                  <p className="text-center text-sm text-gray-100">1 + Years</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: "200px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="card glass  w-80 shadow-xl bg-yellow-500"
              >
                <div className="card-body">
                  <h2 className="flex justify-center">
                    <PiSuitcaseBold />
                  </h2>
                  <h2 className="text-center text-lg font-bold">Projects</h2>
                  <p className="text-center text-sm text-gray-100">
                    10 + Projects
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: "200px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="card glass  w-80 shadow-xl bg-pink-400"
              >
                <div className="card-body justify-center">
                  <h2 className="flex justify-center">
                    <FaHeadphones />
                  </h2>
                  <h2 className="text-center text-lg font-bold">Support</h2>
                  <p className="text-center text-sm text-gray-100">
                    Online 24/7
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: "200px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="w-72 md:w-96 lg:w-full"
            >
              <p>
                Full Stack Developer, I work on MERN stack. I am working on my
                projects to gain my experience working in this technology. Some
                of my minor projects helped me to get some positive compliments
                from users.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: "200px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className=""
            >
              <button className="btn btn-accent mt-10">Download CV</button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
